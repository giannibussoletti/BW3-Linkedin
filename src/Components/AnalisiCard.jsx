import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const AnalisiCard = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Container fluid>
          <Row>
            <h5 className="fw-bold mt-2 mb-4 p-0">Analisi</h5>
            <Col xs={12} md={4} className="mb-3 mb-md-1 p-0">
              <Row className="m-0 p-0">
                <Col xs="auto" className="pe-2 ps-0">
                  <FontAwesomeIcon size="lg" icon="fa-solid fa-user-group" />
                </Col>
                <Col className="p-0">
                  <p className="fw-semibold m-0">17 visualizzazioni del profilo</p>
                  <p className="small m-0">Scopri chi ha visitato il tuo profilo.</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-1 p-0">
              <Row className="m-0">
                <Col xs="auto" className="pe-2 ps-0">
                  <FontAwesomeIcon size="lg" icon="fa-solid fa-chart-simple" />
                </Col>
                <Col className="p-0">
                  <p className="fw-semibold m-0">1.999 impressioni dei post</p>
                  <p className="small m-0">Scopri chi sta interagendo con i tuoi post.</p>
                  <p className="small m-0 text-secondary">Ultimi 7 giorni.</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-1 p-0">
              <Row className="m-0">
                <Col xs="auto" className="pe-2 ps-0">
                  <FontAwesomeIcon size="lg" icon="fa-solid fa-magnifying-glass" />
                </Col>
                <Col className="p-0">
                  <p className="fw-semibold m-0">4 comparse nelle ricerche</p>
                  <p className="small m-0">
                    Vedi quante volte il tuo profilo è comparso nei risultati di ricerca.
                  </p>
                </Col>
              </Row>
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

export default AnalisiCard
