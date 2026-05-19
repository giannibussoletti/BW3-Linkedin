import { Col, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

const ChangePic = ({ onSaveImage }) => {
  const [imageSrc, setImageSrc] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1920px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg",
  );

  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const [isVertical, setIsVertical] = useState(false);

  const imageRef = useRef(null);
  const fileInputRef = useRef(null);

  const aspectRatio = 4 / 1;
  const finalWidth = 1200;
  const finalHeight = finalWidth / aspectRatio; // 300px

  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const imgRatio = img.naturalWidth / img.naturalHeight;
      setIsVertical(imgRatio < aspectRatio);
    };
  }, [imageSrc]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Seleziona un file immagine valido.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setZoom(1);
      setRotate(0);
      setPosition({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleApply = () => {
    const img = imageRef.current;
    if (!img) return;

    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Il canvas finale DEVE mantenere rigidamente le proporzioni 4:1 della sidebar
      canvas.width = finalWidth;
      canvas.height = finalHeight;

      // Puliamo lo sfondo del canvas (evita artefatti o trasparenze strane)
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, finalWidth, finalHeight);

      // 1. Identifichiamo le dimensioni reali di rendering dell'elemento <img> a schermo
      const renderedWidth = img.clientWidth;
      const renderedHeight = img.clientHeight;

      // 2. Troviamo il centro geometrico del mirino 4:1 rispetto al contenitore nero dell'editor
      const containerWidth = img.parentElement.clientWidth;
      const containerHeight = img.parentElement.clientHeight;
      const mirinoHeightScreen = containerWidth / aspectRatio;

      // Centro dell'editor (dove si incrociano le diagonali del mirino)
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;

      // 3. Spostiamo la matrice del Canvas al centro esatto del rettangolo finale di output
      ctx.translate(finalWidth / 2, finalHeight / 2);

      // 4. Applichiamo la rotazione totale (pulsanti 90° + slider fine)
      ctx.rotate((rotate * Math.PI) / 180);

      // 5. Calcoliamo la scala: quanti pixel nativi corrispondono a un pixel renderizzato a schermo
      const scaleX = img.naturalWidth / renderedWidth;
      const scaleY = img.naturalHeight / renderedHeight;

      // 6. Calcoliamo la porzione da disegnare basandoci sul PAN (position) e sullo ZOOM dell'editor
      // Moltiplichiamo lo spostamento dello schermo per la scala reale dei pixel della foto originale
      const dx =
        (position.x + renderedWidth / 2 - (centerX - containerWidth / 2)) *
        scaleX;
      const dy =
        (position.y + renderedHeight / 2 - (centerY - mirinoHeightScreen / 2)) *
        scaleY;

      // Proporzioniamo le dimensioni dell'immagine nel canvas finale in base allo zoom impostato
      const dWidth = renderedWidth * scaleX * zoom;
      const dHeight = renderedHeight * scaleY * zoom;

      // 7. Disegnamo posizionando il centro dell'immagine sopra il perno di rotazione del Canvas
      // Sottraiamo lo spostamento calcolato (dx, dy) per sincronizzare il trascinamento del mouse
      ctx.drawImage(
        img,
        -dWidth / 2 + position.x * scaleX * zoom,
        -dHeight / 2 + position.y * scaleY * zoom,
        dWidth,
        dHeight,
      );

      const croppedBase64 = canvas.toDataURL("image/jpeg", 0.95);

      if (onSaveImage) {
        onSaveImage(croppedBase64);
      }
    } catch (error) {
      console.error("Errore durante il ritaglio:", error);
    }
  };

  return (
    <Col className="m-5">
      <Card className="position-relative shadow-sm overflow-hidden">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="d-none"
        />

        <div className="d-flex justify-content-between align-items-center p-4 border-bottom border-1 border-muted">
          <h5>Immagine di copertina</h5>
          <FontAwesomeIcon
            icon={["fas", "xmark"]}
            className="fs-4"
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Contenitore con altezza fissa dell'editor */}
        <div
          className="overflow-hidden mt-3 position-relative d-flex align-items-center justify-content-center"
          style={{
            height: "280px",
            backgroundColor: "#000000",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          <img
            ref={imageRef}
            src={imageSrc}
            alt="Copertina"
            style={{
              backgroundColor: "#000000",
              width: isVertical ? "100%" : "auto",
              height: isVertical ? "auto" : "100%",
              minWidth: "100%",
              minHeight: "100%",
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotate}deg)`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.1s ease-out",
            }}
            className="bg-dark"
            crossOrigin="anonymous"
            draggable="false"
          />

          {/* Il Mirino 4:1 */}
          <div
            className="position-absolute border border-2 border-white w-100"
            style={{
              aspectRatio: aspectRatio,
              pointerEvents: "none",
              boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>

        {/* Pulsanti Rotazione */}
        <div className="p-2 d-flex justify-content-end">
          <button
            className="rounded-circle py-1 m-1 border border-1 bg-white"
            onClick={() => setRotate(rotate - 90)}
          >
            <FontAwesomeIcon icon={["fas", "rotate-left"]} />
          </button>
          <button
            className="rounded-circle py-1 m-1 border border-1 bg-white"
            onClick={() => setRotate(rotate + 90)}
          >
            <FontAwesomeIcon icon={["fas", "rotate-right"]} />
          </button>
        </div>

        {/* Slider Controlli */}
        <div className="d-flex justify-content-around bg-white border-top">
          <div
            className="d-flex flex-column m-4 flex-grow-1"
            style={{ maxWidth: "250px" }}
          >
            <p className="mb-1 text-muted small fw-bold">Zoom: {zoom}x</p>
            <Form.Group className="w-100 d-flex align-items-center">
              <Form.Range
                min={1}
                max={3}
                step={0.02}
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
              />
            </Form.Group>
          </div>
          <div
            className="d-flex flex-column m-4 flex-grow-1"
            style={{ maxWidth: "250px" }}
          >
            <p className="mb-1 text-muted small fw-bold">
              Rotazione fine: {rotate}°
            </p>
            <Form.Group className="w-100 d-flex align-items-center">
              <Form.Range
                min={-45}
                max={45}
                step={1}
                value={rotate}
                onChange={(e) => setRotate(parseInt(e.target.value))}
              />
            </Form.Group>
          </div>
        </div>

        {/* Footer */}
        <div className="d-flex align-items-center justify-content-between py-3 px-4 border-top border-1 border-muted bg-light">
          <p
            className="fw-bold mb-0 text-danger small"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setImageSrc("");
              setPosition({ x: 0, y: 0 });
            }}
          >
            Elimina foto
          </p>
          <div>
            <Button
              className="rounded-5 bg-white text-primary fw-bold py-1 border-primary me-2"
              onClick={triggerFileInput}
            >
              Cambia foto
            </Button>
            <Button
              className="rounded-5 px-4 py-1 fw-bold"
              onClick={handleApply}
            >
              Applica
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ChangePic;
