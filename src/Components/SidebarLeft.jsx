import { Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarLeft = () => {
  const currentCover = useSelector((state) => state.currentCover);
  const profileImage = useSelector((state) => state.currentProfile);
  const navigate = useNavigate();
  const userId = "6a0d76433a03a800150d93cc";
  return (
    <Col>
      <Card
        className="shadow-sm rounded-3 position-relative mb-3"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <Card.Img
          className="rounded-top-3"
          variant="top"
          src={currentCover}
          style={{ height: "60px", objectFit: "cover" }}
        />

        <Card.Img
          className="rounded-circle position-absolute border border-2 border-light"
          src={profileImage}
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
          <Card.Text className="m-0 p-0 text-muted">Area</Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-2 px-3 shadow-sm rounded-3 mb-3">
        <p className="text-muted mb-1">
          Accedi a strumenti e informazioni in esclusiva
        </p>
        <p
          style={{ cursor: "pointer" }}
          className="fw-bold mb-0 link-primary text-black"
        >
          Prova Premium per 0 €
        </p>
      </Card>
      <Card className="p-2 px-3 shadow-sm rounded-3 mb-3">
        <p className="fw-bold mb-0">Collegamenti</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-muted mb-1">Amplia la tua rete</p>
          <p className="pe-3 text-primary">19</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold mb-0">Inviti</p>
          <p className="pe-3 text-primary">5</p>
        </div>
      </Card>
      <Card className="p-2 px-3 shadow-sm rounded-3 mb-3">
        <div className="d-flex align-items-center m-1">
          <FontAwesomeIcon icon={["fas", "bookmark"]} />
          <p className="m-0 fw-bold px-3">Elementi salvati</p>
        </div>
        <div className="d-flex align-items-center m-1">
          <FontAwesomeIcon icon={["fas", "people-group"]} />
          <p className="m-0 fw-bold px-3">Gruppi</p>
        </div>
        <div className="d-flex align-items-center m-1">
          <FontAwesomeIcon icon={["fas", "newspaper"]} />
          <p className="m-0 fw-bold px-3">Newsletter</p>
        </div>
        <div className="d-flex align-items-center m-1">
          <FontAwesomeIcon icon={["fas", "calendar"]} />
          <p className="m-0 fw-bold px-3">Eventi</p>
        </div>
      </Card>
    </Col>
  );
};

export default SidebarLeft;
