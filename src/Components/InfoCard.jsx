import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const InfoCard = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Container fluid className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col xs={12} className="p-0">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Informazioni</h5>
                <Button variant="link" className="text-secondary p-1">
                  <FontAwesomeIcon icon="fa-solid fa-pen" size="lg" />
                </Button>
              </div>
            </Col>
            <Col xs={12} className="p-0">
              <p>
                La mia precedente biografia diceva: "Non si smette mai di imparare", ora invece mi
                viene da dire: "Non si smette mai di cambiare" magari in meglio.
              </p>
              <p>Ancora oggi imparo, soprattutto su di me e come mi approccio al Mondo.</p>
              <p>
                Qui non troverai un Videomaker o un modellatore 3D, ma una persona, che guarda il
                quel Mondo dal suo personale punto di vista e a cui piace raccontare storie.
              </p>
              <p>
                Come le racconto queste storie? Ad essere sincero un po' come capita, al meglio
                delle mie possibilità. Se volessimo essere poetici potremmo dire che quello che
                racconto si forma in un eterno divenire.
              </p>
            </Col>
            <Col className="border border-1 m-0 p-3">
              <Row className="m-0 p-0 align-items-center">
                <Col xs="auto me-2 p-0">
                  <FontAwesomeIcon size="xl" icon="fa-regular fa-gem" />
                </Col>
                <Col className="fw-semibold m-0 p-0">
                  <p className="m-0">Competenze principali</p>
                  <p className="small m-0">
                    Videomaking • Produzione video • Blender 3D • Modellazione 3D
                  </p>
                </Col>
                <Col xs="auto">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default InfoCard
