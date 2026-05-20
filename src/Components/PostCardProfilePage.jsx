import { Container, Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const PostCardProfilePage = () => {
  return (
    <Container className="border border-1 rounded-1 p-3">
      <Row className="align-items-center mb-2">
        <Col xs="auto" className="pe-2">
          <Image className="rounded-circle" src="https://placebear.com/60/60" />
        </Col>
        <Col className="p-0">
          <p className="mb-0 fw-semibold">Gianni Bussoletti</p>
          <p className="mb-0 small">Skill-up in...</p>
          <p className="mb-0 small">5 anni fa</p>
        </Col>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsam ullam mollitia
          quisquam libero.
        </p>
      </Row>
      <Row>
        <Col>
          <Image src="https://placebear.com/100/100" className="w-100" />
        </Col>
      </Row>
      <Row className="border-top border-1 mt-3">
        <Col className="pt-4 pb-2 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
        </Col>
        <Col className="pt-4 pb-2 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
        </Col>
        <Col className="pt-4 pb-2 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon="fa-regular fa-share-from-square" />
        </Col>
        <Col className="pt-4 pb-2 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
        </Col>
      </Row>
    </Container>
  )
}
export default PostCardProfilePage
