import { Card, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarLeft = () => {
  return (
    <Col xs={12} md={2}>
      <Card className="shadow-sm rounded-3 position-relative mb-3">
        <Card.Img
          className="rounded-top-3"
          variant="top"
          src="https://picsum.photos/id/1015/600/200"
          style={{ height: "60px", objectFit: "cover" }}
        />

        <Card.Img
          className="rounded-circle position-absolute border border-2 border-light"
          src="https://picsum.photos/id/1015/600/200"
          style={{
            height: "70px",
            width: "70px",
            objectFit: "cover",
            top: "40px",
            left: "20px",
          }}
        />

        <Card.Body>
          <Card.Title className="h4 fw-bold mb-0 mt-5">
            Name Surname <FontAwesomeIcon icon={["fas", "shield-halved"]} />
          </Card.Title>

          <Card.Text className="m-0 p-0">Bio</Card.Text>
          <Card.Text
            className="m-0 p-0 text-muted"
            style={{ fontSize: "0.75rem" }}
          >
            Area
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-2 px-3 shadow-sm rounded-3 mb-3">
        <p style={{ fontSize: "0.80rem" }} className="text-muted mb-1">
          Accedi a strumenti e informazioni in esclusiva
        </p>
        <p
          style={{ fontSize: "0.70rem", cursor: "pointer" }}
          className="fw-bold mb-0 link-primary text-black"
        >
          Prova Premium per 0 €
        </p>
      </Card>
      <Card className="p-2 px-3 shadow-sm rounded-3 mb-3">
        <p style={{ fontSize: "0.70rem" }} className="fw-bold mb-0">
          Collegamenti
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <p style={{ fontSize: "0.70rem" }} className="text-muted mb-1">
            Amplia la tua rete
          </p>
          <p className="pe-3 text-primary" style={{ fontSize: "0.80rem" }}>
            19
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p style={{ fontSize: "0.70rem" }} className="fw-bold mb-0">
            Inviti
          </p>
          <p className="pe-3 text-primary" style={{ fontSize: "0.80rem" }}>
            5
          </p>
        </div>
      </Card>
      <Card className="p-2 px-3 shadow-sm rounded-3 mb-3">
        <div className="d-flex">
          <FontAwesomeIcon icon={["fas", "bookmark"]} />
          <p style={{ fontSize: "0.70rem" }} className="fw-bold px-3">
            Elementi salvati
          </p>
        </div>
        <div className="d-flex">
          <FontAwesomeIcon icon={["fas", "people-group"]} />
          <p style={{ fontSize: "0.70rem" }} className="fw-bold px-3">
            Gruppi
          </p>
        </div>
        <div className="d-flex">
          <FontAwesomeIcon icon={["fas", "newspaper"]} />
          <p style={{ fontSize: "0.70rem" }} className="fw-bold px-3">
            Newsletter
          </p>
        </div>
        <div className="d-flex">
          <FontAwesomeIcon icon={["fas", "calendar"]} />
          <p style={{ fontSize: "0.70rem" }} className="m-0 fw-bold px-3">
            Eventi
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default SidebarLeft;
