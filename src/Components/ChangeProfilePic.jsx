import { Card, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

const ChangeProfilePic = ({ onSaveImage }) => {
  // 1. STATI PER LA GESTIONE IMMAGINE E TRASFORMAZIONI
  const [imageSrc, setImageSrc] = useState(
    "https://plus.unsplash.com/premium_photo-1731442837021-3929f70e1710?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NhdHRhcmUlMjBmb3RvfGVufDB8fDB8fHww",
  );
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // 2. RIFERIMENTI (REFS)
  const dragStart = useRef({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);
  const containerRef = useRef(null);

  // 3. LOGICA DI CARICAMENTO FILE DA PC
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        // Resetta le trasformazioni quando carichi una nuova foto
        setZoom(1);
        setRotate(0);
        setPosition({ x: 0, y: 0 });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // 4. LOGICA DI TRASCINAMENTO (DRAG & DROP / TRANSLATE)
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

  // 5. LOGICA DI RITAGLIO E SALVATAGGIO (CANVAS)
  const handleSave = () => {
    const img = imageRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const size = 400; // Dimensione finale della foto profilo quadrata

    canvas.width = size;
    canvas.height = size;

    // Calcoliamo le dimensioni renderizzate dell'immagine (object-fit: cover)
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = containerWidth / containerHeight;

    let rWidth, rHeight;
    if (imageRatio > containerRatio) {
      rHeight = containerHeight;
      rWidth = containerHeight * imageRatio;
    } else {
      rWidth = containerWidth;
      rHeight = containerWidth / imageRatio;
    }

    const scaleX = img.naturalWidth / rWidth;
    const scaleY = img.naturalHeight / rHeight;

    // Il mirino è tondo ed è grande 240px a schermo
    const mirinoSize = 240;

    // --- CORREZIONE CHIAVE PER MOVIMENTO CORRETTO CON ROTAZIONE ---
    // Calcoliamo lo spostamento "reale" compensando l'angolo di rotazione
    const radians = (rotate * Math.PI) / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    // Ruotiamo il vettore di movimento (position.x, position.y)
    // Questo compensa il fatto che quando l'immagine è ruotata, "su" non è più "su" nativamente.
    const unrotatedX = position.x * cos + position.y * sin;
    const unrotatedY = -position.x * sin + position.y * cos;

    // Calcolo dell'area visibile dentro il mirino considerando lo zoom
    // Usiamo lo spostamento unrotatedX e unrotatedY per puntare alla parte giusta della foto nativa
    const sW = mirinoSize / zoom;
    const sH = mirinoSize / zoom;
    const sX = rWidth / 2 - sW / 2 - unrotatedX / zoom;
    const sY = rHeight / 2 - sH / 2 - unrotatedY / zoom;

    // Applichiamo la rotazione sul centro del canvas per l'output finale
    ctx.translate(size / 2, size / 2);
    ctx.rotate(radians);
    ctx.translate(-size / 2, -size / 2);

    // Disegniamo il ritaglio sul canvas
    ctx.drawImage(
      img,
      sX * scaleX,
      sY * scaleY,
      sW * scaleX,
      sH * scaleY,
      0,
      0,
      size,
      size,
    );

    const base64Image = canvas.toDataURL("image/jpeg", 0.95);

    if (onSaveImage) {
      onSaveImage(base64Image); // Restituisce l'immagine ritagliata al componente padre
    } else {
      console.log("Immagine ritagliata in Base64:", base64Image);
    }
  };

  return (
    <Col>
      <Card>
        {/* Input file nascosto */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="d-none"
        />

        <div className="d-flex justify-content-between align-items-center p-4 border-bottom border-1 border-muted">
          <h5>Modifica foto</h5>
          <FontAwesomeIcon
            icon={["fas", "xmark"]}
            className="fs-4"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          <div className="d-flex flex-column flex-md-row">
            {/* Box dell'immagine di sinistra */}
            <div
              ref={containerRef}
              className="position-relative overflow-hidden bg-dark d-flex align-items-center justify-content-center"
              style={{
                width: "350px",
                height: "350px",
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
                alt="Foto Profilo"
                className="w-100 h-100"
                draggable="false"
                style={{
                  objectFit: "cover",
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotate}deg)`,
                  transition: isDragging ? "none" : "transform 0.1s ease-out",
                }}
              />

              {/* Overlay Maschera Mirino Tondo */}
              <div
                className="position-absolute border border-2 border-white rounded-circle"
                style={{
                  width: "240px",
                  height: "240px",
                  pointerEvents: "none",
                  boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
                }}
              ></div>
            </div>

            {/* Box dei controlli di destra */}
            <div className="flex-grow-1 p-3 bg-white">
              <div className="d-flex gap-4 p-2 px-5 border-bottom border-1 border-secondary fw-bold text-muted bg-white">
                <p className="text-primary mb-0" style={{ cursor: "pointer" }}>
                  Ritaglia
                </p>
                <p className="mb-0" style={{ cursor: "pointer" }}>
                  Filtro
                </p>
                <p className="mb-0" style={{ cursor: "pointer" }}>
                  Regola
                </p>
              </div>

              {/* Controlli di Zoom e Rotazione inseriti qui */}
              <div className="p-4 d-flex flex-column gap-4 bg-white">
                {/* Controllo Zoom */}
                <div>
                  <Form.Label className="small fw-bold text-muted mb-1">
                    Zoom
                  </Form.Label>
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={["fas", "minus"]}
                      className="small text-muted"
                    />
                    <Form.Range
                      min={1}
                      max={4}
                      step={0.01}
                      value={zoom}
                      onChange={(e) => setZoom(parseFloat(e.target.value))}
                    />
                    <FontAwesomeIcon
                      icon={["fas", "plus"]}
                      className="small text-muted"
                    />
                  </div>
                </div>

                {/* Controllo Rotazione */}
                <div>
                  <Form.Label className="small fw-bold text-muted mb-1">
                    Rotazione ({rotate}°)
                  </Form.Label>
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={["fas", "rotate-left"]}
                      className="text-muted"
                      style={{ cursor: "pointer" }}
                      onClick={() => setRotate((prev) => prev - 90)}
                    />
                    <Form.Range
                      min={-180}
                      max={180}
                      step={1}
                      value={rotate}
                      onChange={(e) => setRotate(parseInt(e.target.value))}
                    />
                    <FontAwesomeIcon
                      icon={["fas", "rotate-right"]}
                      className="text-muted"
                      style={{ cursor: "pointer" }}
                      onClick={() => setRotate((prev) => prev + 90)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer azioni */}
          <div className="p-2 d-flex justify-content-end align-items-center border-top border-muted bg-light">
            <Button
              className="rounded-5 fw-bold py-1 bg-transparent text-black border-0 me-2 shadow-none"
              onClick={triggerFileInput}
            >
              Cambia foto
            </Button>
            <Button className="rounded-5 fw-bold py-1 bg-transparent text-black border-0 shadow-none me-2">
              <FontAwesomeIcon icon={["fas", "eye"]} /> Chiunque
            </Button>
            <Button
              className="rounded-5 px-3 py-1 fw-bold mx-2 btn-primary"
              onClick={handleSave}
            >
              Salva foto
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ChangeProfilePic;
