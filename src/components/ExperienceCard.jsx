import { Card, Row, Col, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faArrowRight,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = () => {
  const experiences = [
    {
      id: 1,
      role: "Dipendente addetto alle vendite",
      company: "GOTTARDO SPA",
      type: "A tempo pieno",
      period: "set 2025 - gen 2026 · 5 mesi",
      location: "Guidonia Montecelio, Lazio, Italia · In sede",
      iconColor: "bg-primary",
    },
    {
      id: 2,
      role: "Restaurant Crew Member",
      company: "Burger King Restaurants Italia",
      type: "A tempo pieno",
      period: "dic 2024 - giu 2025 · 7 mesi",
      location: "",
      iconColor: "bg-warning",
    },
    {
      id: 3,
      role: "Graphic Designer | Videomaker | Web designer",
      company: "Freelance",
      type: "Freelance",
      period: "2013 - apr 2025 · 12 anni e 4 mesi",
      location: "Latina, Lazio, Italia · Da remoto",
      description:
        "Dopo aver concluso gli studi presso il Liceo Artistico di Latina ho iniziato un mio percorso di lavoro...",
      skillsDetail: "Progettazione di siti WordPress, HTML e +2 competenze",
      iconColor: "bg-secondary",
    },
  ];

  return (
    <Card className="mb-3 border-light shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Esperienza</h5>
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
          {experiences.map((exp) => (
            <ListGroup.Item key={exp.id} className="px-0 py-3 border-bottom">
              <Row className="align-items-start">
                <Col xs="auto" className="pe-0">
                  <div
                    className={`${exp.iconColor} text-white d-flex align-items-center justify-content-center rounded`}
                    style={{ width: "48px", height: "48px" }}
                  >
                    <FontAwesomeIcon icon={faBriefcase} size="lg" />
                  </div>
                </Col>
                <Col>
                  <h6 className="fw-bold mb-0">{exp.role}</h6>
                  <div className="text-muted small">
                    {exp.company} · {exp.type}
                  </div>
                  <div className="text-secondary small">{exp.period}</div>
                  {exp.location && (
                    <div className="text-secondary small">{exp.location}</div>
                  )}
                  {exp.description && (
                    <p className="small mt-2 mb-2 text-dark">
                      {exp.description}{" "}
                      <span
                        className="text-muted fw-bold"
                        style={{ cursor: "pointer" }}
                      >
                        altro
                      </span>
                    </p>
                  )}
                  {exp.skillsDetail && (
                    <div className="small text-secondary">
                      <FontAwesomeIcon icon={faCode} className="me-2" />
                      <strong>{exp.skillsDetail}</strong>
                    </div>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
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

export default ExperienceCard;
