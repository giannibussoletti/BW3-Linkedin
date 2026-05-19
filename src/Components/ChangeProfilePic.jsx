import { Card, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

const ChangeProfilePic = ({ onSaveImage }) => {
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const imageRef = useRef(null);
  const finalSize = 400; // Dimensione del file finale (400x400)

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

      canvas.width = finalSize;
      canvas.height = finalSize;

      // 1. Troviamo le dimensioni reali dell'immagine così come viene mostrata a schermo dal CSS (object-fit: cover)
      const containerWidth = img.parentElement.clientWidth;
      const containerHeight = img.parentElement.clientHeight;

      const imageRatio = img.naturalWidth / img.naturalHeight;
      const containerRatio = containerWidth / containerHeight;

      let renderedWidth, renderedHeight;

      // Simuliamo l'esatto comportamento di object-fit: cover
      if (imageRatio > containerRatio) {
        renderedHeight = containerHeight;
        renderedWidth = containerHeight * imageRatio;
      } else {
        renderedWidth = containerWidth;
        renderedHeight = containerWidth / imageRatio;
      }

      // 2. Rapporto di conversione tra i pixel dello schermo e i pixel nativi del file originale
      const scaleFactorX = img.naturalWidth / renderedWidth;
      const scaleFactorY = img.naturalHeight / renderedHeight;

      // 3. Il mirino a schermo è un quadrato perfetto di 240px posizionato al centro del contenitore.
      // Troviamo le coordinate X e Y del mirino relative all'immagine renderizzata a schermo, applicando lo zoom e il drag.
      const mirinoSizeScreen = 240;

      // Calcoliamo la porzione visibile a schermo dentro il mirino, considerando lo zoom applicato al centro
      const sourceWidthScreen = mirinoSizeScreen / zoom;
      const sourceHeightScreen = mirinoSizeScreen / zoom;

      // Troviamo il centro dell'immagine e applichiamo lo spostamento inverso del drag fatto dall'utente
      const sourceXScreen =
        renderedWidth / 2 - sourceWidthScreen / 2 - position.x / zoom;
      const sourceYScreen =
        renderedHeight / 2 - sourceHeightScreen / 2 - position.y / zoom;

      // 4. Convertiamo queste coordinate dello schermo nei pixel reali del file sorgente
      const sX = sourceXScreen * scaleFactorX;
      const sY = sourceYScreen * scaleFactorY;
      const sW = sourceWidthScreen * scaleFactorX;
      const sH = sourceHeightScreen * scaleFactorY;

      // 5. Gestione della rotazione mantenendo il perno centrale sul canvas finale
      ctx.translate(finalSize / 2, finalSize / 2);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.translate(-finalSize / 2, -finalSize / 2);

      // 6. Ritaglio perfetto: prendiamo la porzione esatta (sX, sY, sW, sH) dal file sorgente
      // e la stampiamo occupando l'intero spazio del canvas finale (finalSize x finalSize) senza distorsioni
      ctx.drawImage(
        img,
        sX, // Inizio ritaglio X sul file originale
        sY, // Inizio ritaglio Y sul file originale
        sW, // Larghezza del ritaglio sul file originale
        sH, // Altezza del ritaglio sul file originale
        0, // Destinazione X sul canvas
        0, // Destinazione Y sul canvas
        finalSize, // Larghezza finale sul canvas
        finalSize, // Altezza finale sul canvas
      );

      const croppedBase64 = canvas.toDataURL("image/jpeg", 0.95);

      if (onSaveImage) {
        onSaveImage(croppedBase64);
      }
    } catch (error) {
      console.error("Errore durante il ritaglio millimetrico:", error);
    }
  };

  return (
    <Col md={8} className="mx-auto m-4">
      <Card className="overflow-hidden shadow-sm">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom border-1 border-muted">
          <h5 className="mb-0">Modifica foto</h5>
          <FontAwesomeIcon
            icon={["fas", "xmark"]}
            className="fs-4"
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Corpo Editor split-screen */}
        <div className="d-flex flex-column flex-md-row">
          {/* COLONNA SINISTRA: Area visiva di Crop */}
          <div
            className="overflow-hidden position-relative d-flex align-items-center justify-content-center bg-dark"
            style={{
              width: "100%",
              md: "50%",
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
              src="https://plus.unsplash.com/premium_photo-1731442837021-3929f70e1710?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NattaareUlMjBmb3RvfGVufDB8fDB8fHww"
              alt="Foto Profilo"
              crossOrigin="anonymous"
              draggable="false"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotate}deg)`,
              }}
            />

            {/* Mirino tondo da 240px */}
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

          {/* COLONNA DESTRA: Controlli */}
          <div
            className="d-flex flex-column flex-grow-1 bg-white"
            style={{ md: "50%" }}
          >
            <div className="d-flex gap-4 p-3 px-4 border-bottom border-1 border-light fw-bold text-muted">
              <p
                className="mb-0 text-primary border-bottom border-2 border-primary pb-2"
                style={{ cursor: "pointer" }}
              >
                Ritaglia
              </p>
              <p
                className="mb-0 pb-2 link-secondary"
                style={{ cursor: "pointer" }}
              >
                Filtro
              </p>
              <p
                className="mb-0 pb-2 link-secondary"
                style={{ cursor: "pointer" }}
              >
                Regola
              </p>
            </div>

            <div className="p-4 flex-grow-1 d-flex flex-column gap-4 justify-content-center">
              {/* Slider Zoom */}
              <div>
                <Form.Label className="text-muted small fw-bold mb-1">
                  Zoom
                </Form.Label>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={["fas", "minus"]}
                    className="text-muted small"
                  />
                  <Form.Range
                    min={1}
                    max={4}
                    step={0.02}
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                  />
                  <FontAwesomeIcon
                    icon={["fas", "plus"]}
                    className="text-muted small"
                  />
                </div>
              </div>

              {/* Slider Rotazione */}
              <div>
                <Form.Label className="text-muted small fw-bold mb-1">
                  Ruota ({rotate}°)
                </Form.Label>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={["fas", "rotate-left"]}
                    className="text-muted small"
                    style={{ cursor: "pointer" }}
                    onClick={() => setRotate(rotate - 90)}
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
                    className="text-muted small"
                    style={{ cursor: "pointer" }}
                    onClick={() => setRotate(rotate + 90)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-light border-top border-1 d-flex justify-content-end align-items-center">
          <Button className="rounded-5 fw-bold py-1 bg-transparent text-dark border-0 shadow-none me-2">
            <FontAwesomeIcon icon={["fas", "eye"]} /> Chiunque
          </Button>
          <Button className="rounded-5 px-4 py-1 fw-bold" onClick={handleApply}>
            Salva foto
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default ChangeProfilePic;
