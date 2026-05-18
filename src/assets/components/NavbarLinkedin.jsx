import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Navbar, Image, InputGroup, Form, Nav } from "react-bootstrap"

const NavbarLinkedin = () => {
  return (
    <Container fluid>
      <Navbar className="p-0">
        <Container>
          <Navbar.Brand className="p-0">
            <Image style={{ maxHeight: "52px" }} className="py-1" src="./linkedin-in-logo.png" />
          </Navbar.Brand>
          <InputGroup className="w-25">
            <InputGroup.Text className="bg-transparent border-end-0 rounded-start-pill">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </InputGroup.Text>
            <Form.Control
              className="border-start-0 rounded-end-pill"
              placeholder="Cerca"
              aria-label="Cerca"
            />
          </InputGroup>
          <Nav className="ms-auto my-2 my-lg- gap-2" navbarScroll>
            <Nav.Link className="py-0 d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon size="xl" icon="fa-solid fa-house" /> <p className="m-0">Home</p>
            </Nav.Link>
            <Nav.Link className="py-0 d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon size="xl" icon="fa-solid fa-user-group" />
              <p className="m-0" style={{ whiteSpace: "nowrap" }}>
                La mia rete
              </p>
            </Nav.Link>
            <Nav.Link className="py-0 d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon size="xl" icon="fa-solid fa-briefcase pb-3" />
              <p className="m-0">Lavoro</p>
            </Nav.Link>
            <Nav.Link className="py-0 d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon size="xl" icon="fa-solid fa-comment-dots" />
              <p className="m-0">Messagistica</p>
            </Nav.Link>
            <Nav.Link className="py-0 d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon size="xl" icon="fa-solid fa-bell" />
              <p className="m-0">Notifiche</p>
            </Nav.Link>
            <Nav.Link className="py-0 border-end border-2 d-flex flex-column justify-content-center align-items-center">
              <Image className="rounded-circle" src="https://placecats.com/30/30" />
              <p className="m-0">Tu</p>
            </Nav.Link>
            <Nav.Link className="py-0 d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon size="xl" icon="fa-solid fa-grip-vertical" />{" "}
              <p className="m-0" style={{ whiteSpace: "nowrap" }}>
                Per le aziende
              </p>
            </Nav.Link>
            <Nav.Link className="py-0 d-flex flex-column justify-content-center align-items-center">
              <p>Prova Premium</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}
export default NavbarLinkedin
