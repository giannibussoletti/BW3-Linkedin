import { Col, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

const ChangePic = ({ onSaveImage }) => {
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [translate, setTranslate] = useState(0);

  const imageRef = useRef(null);

  const aspectRatio = 32 / 4;

  const finalWidth = 1200;
  const finalHeight = finalWidth / aspectRatio;

  const handleApply = () => {
    const img = imageRef.current;
    if (!img) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = finalWidth;
    canvas.height = finalHeight;

    ctx.translate(finalWidth / 2, finalHeight / 2);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.scale(zoom, zoom);

    const scaleFactor = img.naturalWidth / img.clientWidth;
    const realTranslateY = translate * scaleFactor;

    ctx.drawImage(
      img,
      -img.naturalWidth / 2,
      -img.naturalHeight / 2 + realTranslateY,
      img.naturalWidth,
      img.naturalHeight,
    );

    const croppedBase64 = canvas.toDataURL("image/jpeg", 0.9);

    if (onSaveImage) {
      onSaveImage(croppedBase64);
    }
  };

  return (
    <Col className="m-5">
      <Card className="position-relative">
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom border-1 border-muted">
          <h5>Immagine di copertina</h5>
          <FontAwesomeIcon icon={["fas", "xmark"]} className="fs-4" />
        </div>

        {/* Contenitore Immagine */}
        <div
          className="overflow-hidden mt-3 position-relative d-flex align-items-center justify-content-center"
          style={{ height: "280px", backgroundColor: "#000000" }}
        >
          <img
            ref={imageRef}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1920px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg"
            alt=""
            style={{
              objectFit: "cover",
              backgroundColor: "#000000",
              transform: `translateY(${translate}px) scale(${zoom}) rotate(${rotate}deg)`,
            }}
            className="w-100 h-100 bg-dark"
            crossOrigin="anonymous"
          />

          {/* IL MIRINO ORA OCCUPA IL 100% IN LARGHEZZA */}
          <div
            className="position-absolute border border-2 border-white w-100"
            style={{
              // Sfrutta la proprietà CSS nativa aspect-ratio
              aspectRatio: aspectRatio,
              pointerEvents: "none",
              // L'ombra gigantesca oscura tutto ciò che va sopra e sotto il mirino 100%
              boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>

        {/* Bottoni rotate */}
        <div className="p-2 d-flex justify-content-end">
          <button
            className="rounded-circle py-1 m-1"
            onClick={() => setRotate(rotate - 90)}
          >
            <FontAwesomeIcon icon={["fas", "rotate-left"]} />
          </button>
          <button
            className="rounded-circle py-1 m-1"
            onClick={() => setRotate(rotate + 90)}
          >
            <FontAwesomeIcon icon={["fas", "rotate-right"]} />
          </button>
        </div>

        {/* Slider Zoom e Rotate */}
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column m-4">
            <p className="mb-1">Zoom: {zoom}</p>
            <Form.Group className="w-100 d-flex align-items-center">
              <Form.Range
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="px-3"
              />
            </Form.Group>
          </div>
          <div className="d-flex flex-column m-4">
            <p className="mb-1">Rotate: {rotate}° </p>
            <Form.Group className="w-100 d-flex align-items-center">
              <Form.Range
                min={-45}
                max={45}
                step={1}
                value={rotate}
                onChange={(e) => setRotate(parseInt(e.target.value))}
                className="px-3"
              />
            </Form.Group>
          </div>
        </div>

        {/* Slider Translate */}
        <Form.Range
          min={-300}
          max={300}
          step={1}
          value={translate}
          onChange={(e) => setTranslate(parseInt(e.target.value))}
          className="px-3 position-absolute"
          style={{
            transform: "rotate(-90deg)",
            width: "280px",
            right: "-120px",
            bottom: "350px",
          }}
        />

        {/* Bottoni footer */}
        <div className="d-flex align-items-center justify-content-between py-3 px-4 border-top border-1 border-muted">
          <p className="fw-bold mb-0" style={{ cursor: "pointer" }}>
            Elimina foto
          </p>
          <div>
            <Button className="rounded-5 bg-white text-primary fw-bold py-1 border-primary">
              Cambia foto
            </Button>
            <Button
              className="rounded-5 px-3 py-1 fw-bold mx-2"
              onClick={handleApply}
            >
              Apply
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ChangePic;
