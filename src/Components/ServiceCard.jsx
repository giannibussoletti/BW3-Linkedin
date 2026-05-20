import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const ServiceCard = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Container fluid className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col xs={12} className="p-0">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Servizi</h5>
                <Button variant="link" className="text-secondary p-1">
                  <FontAwesomeIcon icon="fa-solid fa-pen" size="lg" />
                </Button>
              </div>
            </Col>
            <Col>
              <span className="me-2 bg-secondary-subtle text-secondary p-1 rounded-1">
                Montaggio
              </span>
              <span className="me-2 bg-secondary-subtle text-secondary p-1 rounded-1">
                Produzione video
              </span>
              <span className="me-2 bg-secondary-subtle text-secondary p-1 rounded-1">
                Progettazione 3D
              </span>
            </Col>
            <Col xs={12} className=" border-top border-1 mt-3">
              <Button
                variant="light"
                className="w-100 text-secondary fw-bold mt-2 py-2 border-0 bg-transparent text-center">
                Mostra tutto <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ms-1" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard
