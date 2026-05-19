import { Card, Row, Col, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faArrowRight,
  faGraduationCap,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const EducationCard = () => {
  return (
    <Card className="mb-3 border-light shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Formazione</h5>
          <div>
            <Button variant="link" className="text-secondary p-1 me-2">
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </Button>
            <Button variant="link" className="text-secondary p-1">
              <FontAwesomeIcon icon={faPen} size="lg" />
            </Button>
          </div>
        </div>

        <ListGroup variant="flush">
          <ListGroup.Item className="px-0 py-3 border-bottom">
            <Row className="align-items-start">
              <Col xs="auto" className="pe-0">
                <div
                  className="bg-danger text-white d-flex align-items-center justify-content-center rounded"
                  style={{ width: "48px", height: "48px" }}
                >
                  <FontAwesomeIcon icon={faGraduationCap} size="lg" />
                </div>
              </Col>
              <Col>
                <h6 className="fw-bold mb-0">
                  EPICODE Institute of Technology
                </h6>
                <div className="text-muted small">Full-Stack Developer</div>
                <div className="text-secondary small">feb 2026 - set 2026</div>
                <p className="small mt-2 mb-2 text-dark">
                  In formazione intensiva presso EPICODE per il conseguimento
                  della qualifica di Full-Stack Developer...{" "}
                  <span
                    className="text-muted fw-bold"
                    style={{ cursor: "pointer" }}
                  >
                    altro
                  </span>
                </p>
                <div className="small text-secondary">
                  <FontAwesomeIcon icon={faCode} className="me-2" />
                  <strong>JavaScript, React.js</strong> e +2 competenze
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>

        <Button
          variant="light"
          className="w-100 text-secondary fw-bold mt-2 py-2 border-0 bg-transparent text-center"
        >
          Mostra tutto <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
