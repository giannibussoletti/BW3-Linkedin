import { Col, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ChangePic = () => {
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [translate, setTranslate] = useState(0);

  return (
    <Col className="m-5">
      <Card className="position-relative">
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom border-1 border-muted">
          <h5>Immagine di copertina</h5>
          <FontAwesomeIcon icon={["fas", "xmark"]} className="fs-4" />
        </div>
        <div
          className="overflow-hidden mt-3"
          style={{ height: "280px", backgroundColor: "#000000" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1920px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg"
            alt=""
            style={{
              objectFit: "cover",
              backgroundColor: "#000000",
              transform: ` translateY(${translate}px) scale(${zoom}) rotate(${rotate}deg) `,
            }}
            className="w-100 bg-dark"
          />
        </div>
        {/* Bottoni rotate */}
        <div className="p-2 d-flex justify-content-end">
          <button
            className="rounded-circle py-1 m-1"
            onClick={() => {
              setRotate(rotate - 90);
            }}
          >
            <FontAwesomeIcon icon={["fas", "rotate-left"]} />
          </button>
          <button
            className="rounded-circle py-1 m-1"
            onClick={() => {
              setRotate(rotate + 90);
            }}
          >
            <FontAwesomeIcon icon={["fas", "rotate-right"]} />
          </button>
        </div>

        {/* Slider Zoom */}
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column m-4">
            <p className="mb-1">Zoom: {zoom}</p>
            <Form.Group className="w-100 d-flex align-items-center">
              <FontAwesomeIcon icon={["fas", "minus"]} />
              <Form.Range
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="px-3"
              />
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </Form.Group>
          </div>
          {/* Slider Rotate */}
          <div className="d-flex flex-column m-4">
            <p className="mb-1">Rotate: {rotate} </p>
            <Form.Group className="w-100 d-flex align-items-center">
              <FontAwesomeIcon icon={["fas", "minus"]} />
              <Form.Range
                min={-45}
                max={45}
                step={1}
                value={rotate}
                onChange={(e) => setRotate(parseInt(e.target.value))}
                className="px-3"
              />
              <FontAwesomeIcon icon={["fas", "plus"]} />
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
        {/* Bottoni */}
        <div className="d-flex align-items-center justify-content-between py-3 px-4 border-top border-1 border-muted">
          <p className="fw-bold mb-0">Elimina foto</p>
          <div>
            <Button className="rounded-5 bg-white text-primary fw-bold py-1">
              Cambia foto
            </Button>
            <Button className="rounded-5 px-3 py-1 fw-bold mx-2">Apply</Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ChangePic;
