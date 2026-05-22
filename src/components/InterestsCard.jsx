import { Card, Row, Col, Badge, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faGraduationCap, faCheck } from "@fortawesome/free-solid-svg-icons"

const InterestsCard = () => {
  return (
    <Card className="mb-3 border-light shadow-sm">
      <Card.Body>
        <h5 className="fw-bold mb-3">Interessi</h5>
        <div className="d-flex gap-2 mb-3">
          <Badge bg="success" pill className="px-3 py-2" style={{ cursor: "pointer" }}>
            Aziende
          </Badge>
          <Badge
            bg="light"
            text="dark"
            pill
            className="px-3 py-2 border text-muted"
            style={{ cursor: "pointer" }}>
            Gruppi
          </Badge>
          <Badge
            bg="light"
            text="dark"
            pill
            className="px-3 py-2 border text-muted"
            style={{ cursor: "pointer" }}>
            Scuole o università
          </Badge>
        </div>

        <Row className="g-3">
          <Col md={6}>
            <div className="d-flex align-items-start p-2 border rounded">
              <div
                className="bg-info text-white d-flex align-items-center justify-content-center rounded me-3"
                style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div>
                <h6 className="fw-bold mb-0 small">
                  Patches, a puzzle by LinkedIn <span className="text-warning">in</span>
                </h6>
                <div className="text-muted extra-small" style={{ fontSize: "11px" }}>
                  7.717.652 follower
                </div>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill mt-2 px-3 fw-bold">
                  <FontAwesomeIcon icon={faCheck} className="me-1" /> Già segui
                </Button>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="d-flex align-items-start p-2 border rounded">
              <div
                className="bg-danger text-white d-flex align-items-center justify-content-center rounded me-3"
                style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div>
                <h6 className="fw-bold mb-0 small">EPICODE Institute of Technology</h6>
                <div className="text-muted extra-small" style={{ fontSize: "11px" }}>
                  23.263 follower
                </div>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill mt-2 px-3 fw-bold">
                  <FontAwesomeIcon icon={faCheck} className="me-1" /> Già segui
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default InterestsCard
