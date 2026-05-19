import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCog,
  faShieldAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const ProfileFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinksLeft = [
    "Informazioni",
    "Linee guida della comunità",
    "Privacy e condizioni",
    "Sales Solutions",
    "Centro sicurezza",
  ];
  const footerLinksCenter = [
    "Accessibilità",
    "Carriera",
    "Opzioni per gli annunci pubblicitari",
    "Mobile",
  ];
  const footerLinksRight = [
    "Talent Solutions",
    "Soluzioni di marketing",
    "Pubblicità",
    "Piccole imprese",
  ];

  return (
    <footer
      className="pt-4 pb-5 mt-4 border-top text-secondary"
      style={{ fontSize: "12px" }}
    >
      <Row className="mb-4 gy-3">
        <Col xs={6} md={3}>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {footerLinksLeft.map((link, idx) => (
              <li
                key={idx}
                style={{ cursor: "pointer" }}
                className="text-hover-primary"
              >
                {link}{" "}
                {link === "Privacy e condizioni" && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="xs"
                    className="ms-1"
                  />
                )}
              </li>
            ))}
          </ul>
        </Col>

        <Col xs={6} md={3}>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {footerLinksCenter.map((link, idx) => (
              <li key={idx} style={{ cursor: "pointer" }}>
                {link}
              </li>
            ))}
          </ul>
        </Col>

        <Col xs={6} md={3}>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {footerLinksRight.map((link, idx) => (
              <li key={idx} style={{ cursor: "pointer" }}>
                {link}
              </li>
            ))}
          </ul>
        </Col>

        <Col xs={12} md={3}>
          <Form.Group controlId="languageSelect">
            <Form.Label className="text-muted mb-1 small">
              Seleziona lingua
            </Form.Label>
            <Form.Select
              size="sm"
              defaultValue="it"
              className="text-dark border-secondary"
              style={{ fontSize: "12px", maxWidth: "200px" }}
            >
              <option value="it">Italiano (Italiano)</option>
              <option value="en">English (Inglese)</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="gy-3 pt-3 border-top align-items-start">
        <Col md={9} className="d-flex flex-column gap-3">
          <div className="d-flex align-items-start">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              size="lg"
              className="me-2 mt-1 text-dark"
            />
            <div>
              <strong
                className="text-dark d-block"
                style={{ fontSize: "13px", cursor: "pointer" }}
              >
                Domande?
              </strong>
              <span className="text-muted">
                Visita il nostro Centro assistenza.
              </span>
            </div>
          </div>

          <div className="d-flex align-items-start">
            <FontAwesomeIcon
              icon={faCog}
              size="lg"
              className="me-2 mt-1 text-dark"
            />
            <div>
              <strong
                className="text-dark d-block"
                style={{ fontSize: "13px", cursor: "pointer" }}
              >
                Gestisci il tuo account e la tua privacy
              </strong>
              <span className="text-muted">Vai alle impostazioni</span>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <FontAwesomeIcon
              icon={faShieldAlt}
              size="lg"
              className="me-2 mt-1 text-dark"
            />
            <div>
              <strong
                className="text-dark d-block"
                style={{ fontSize: "13px", cursor: "pointer" }}
              >
                Trasparenza sui contenuti consigliati
              </strong>
              <span className="text-muted">
                Scopri di più sui contenuti consigliati.
              </span>
            </div>
          </div>
        </Col>
        <Col md={3} className="text-md-end mt-md-4 text-muted">
          <span>LinkedIn Corporation © {currentYear}</span>
        </Col>
      </Row>
    </footer>
  );
};

export default ProfileFooter;
