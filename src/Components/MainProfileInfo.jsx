import { Container, Row, Col, Image } from "react-bootstrap"

const MainProfileInfo = () => {
  return (
    <Container className="p-0">
      <Row className="m-0">
        <Col className="p-0">
          <Image src="https://placebear.com/790/200" />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <h2>Lorem Ipsum</h2>
          <p>
            Skill up in Full Stack developer presso EPICODE | Amante del cinema | Videomaker | Ex
            Graphic Designer
          </p>
          <p>
            Guidonia Montecelio, Lazio, Italia{" "}
            <span small className="text-primary fw-bold">
              Informazioni di contatto
            </span>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default MainProfileInfo
