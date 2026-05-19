import { Card, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor"; // <-- La nuova libreria pulita

const ChangeProfilePic = ({ onSaveImage }) => {
  // 1. STATI ESSENZIALI (Niente più stati per drag, coordinate o booleani complessi)
  const [imageSrc, setImageSrc] = useState(
    "https://plus.unsplash.com/premium_photo-1731442837021-3929f70e1710?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NhdHRhcmUlMjBmb3RvfGVufDB8fDB8fHww",
  );
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);

  // 2. RIFERIMENTI (REFS)
  const fileInputRef = useRef(null);
  const editorRef = useRef(null); // Riferimento fondamentale per estrarre l'immagine

  // 3. LOGICA DI CARICAMENTO FILE DA PC
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        // Resetta i controlli di zoom e rotazione per il nuovo file
        setZoom(1);
        setRotate(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // 4. LOGICA DI SALVATAGGIO RELEGATA ALLA LIBRERIA
  const handleSave = () => {
    if (editorRef.current) {
      // Ottiene il canvas ritagliato, scalato e ruotato alla perfezione dalla libreria
      const canvas = editorRef.current.getImageScaledToCanvas();
      // Genera il Base64 a risoluzione ottimale (size 400x400 regolata dai parametri del componente)
      const base64Image = canvas.toDataURL("image/jpeg", 0.95);

      if (onSaveImage) {
        onSaveImage(base64Image); // Ritorna l'immagine finale pulita al componente App.jsx
      } else {
        console.log("Immagine ritagliata in Base64:", base64Image);
      }
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
            {/* Box dell'immagine di sinistra (Gestito nativamente da AvatarEditor) */}
            <div
              className="position-relative overflow-hidden bg-dark d-flex align-items-center justify-content-center"
              style={{
                width: "350px",
                height: "350px",
              }}
            >
              <AvatarEditor
                ref={editorRef}
                image={imageSrc}
                width={240} // Dimensione interna del mirino
                height={240}
                border={55} // Spazio di overlay scuro intorno: (350px totali - 240px mirino) / 2 = 55px
                borderRadius={120} // Rende il mirino perfettamente tondo (240 / 2)
                color={[0, 0, 0, 0.6]} // Sfondo oscurato semitrasparente
                scale={zoom}
                rotate={rotate}
                crossOrigin="anonymous" // Previene l'errore Tainted Canvas sui placeholder esterni
              />
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

              {/* Controlli di Zoom e Rotazione */}
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
