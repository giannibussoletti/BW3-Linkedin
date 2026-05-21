import { Card, Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage } from "./redux/actions/editorPicture";
import { CLOSE_EDIT_MODAL } from "./redux/reducers/index";

const ChangeProfilePic = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.isEditorPicModalOpen);

  const currentProfile = useSelector((state) => state.currentProfile);

  const [imageSrc, setImageSrc] = useState(currentProfile || "");

  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);

  const fileInputRef = useRef(null);
  const editorRef = useRef(null); // Riferimento per estrarre l'immagine

  // CARICAMENTO FILE DA PC
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

  // LOGICA DI SALVATAGGIO
  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      // Genera il Base64
      const base64Image = canvas.toDataURL("image/jpeg", 0.95);

      dispatch(setProfileImage(base64Image));
      dispatch({ type: CLOSE_EDIT_MODAL });
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => dispatch({ type: CLOSE_EDIT_MODAL })}
      centered
    >
      <Card>
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
            onClick={() => dispatch({ type: CLOSE_EDIT_MODAL })}
          />
        </div>
        <div>
          <div className="d-flex flex-column flex-md-row">
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
                border={55} // Spazio scuro intorno
                borderRadius={120} // Rende il mirino tondo
                color={[0, 0, 0, 0.6]}
                scale={zoom}
                rotate={rotate}
                crossOrigin="anonymous" // Previene l'errore Tainted Canvas sui placeholder esterni
              />
            </div>

            {/* Controlli finti */}
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

          {/* Bottoni */}
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
    </Modal>
  );
};

export default ChangeProfilePic;
