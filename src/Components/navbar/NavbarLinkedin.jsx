import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Navbar, Image, InputGroup, Form, Nav } from "react-bootstrap"

import { navBarObj, iconSize, navLinkClass, pClass } from "./class-objects"

const NavbarLinkedin = () => {
  return (
    <Container fluid className="bg-light">
      <Navbar className="p-0">
        <Container>
          <Navbar.Brand className="p-0">
            <Image style={{ maxHeight: "52px" }} className="py-1" src="./linkedin-in-logo.png" />
          </Navbar.Brand>

          <InputGroup className="w-25 d-none d-md-flex">
            <InputGroup.Text className="bg-transparent border-end-0 rounded-start-pill">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </InputGroup.Text>
            <Form.Control
              className="border-start-0 rounded-end-pill"
              placeholder="Cerca"
              aria-label="Cerca"
            />
          </InputGroup>

          <FontAwesomeIcon
            size="xl"
            className="me-2 d-block d-md-none"
            icon="fa-solid fa-magnifying-glass"
          />

          <Nav className="ms-auto my-2 my-lg- gap-2" navbarScroll>
            {navBarObj.slice(0, 5).map((icons) => {
              return (
                <Nav.Link key={icons.icon} className={icons.navLinkClass}>
                  <FontAwesomeIcon size={icons.iconSize} icon={icons.icon} />
                  <p className={icons.pClass}>{icons.name}</p>
                </Nav.Link>
              )
            })}

            <Nav.Link className="py-0 border-end border-2 d-flex flex-column justify-content-center">
              <Image className="rounded-circle" src="https://placecats.com/30/30" />
              <p className={pClass}>Tu</p>
            </Nav.Link>

            <Nav.Link className={navLinkClass}>
              <FontAwesomeIcon size={iconSize} icon={navBarObj[5].icon} />
              <p className={pClass}>{navBarObj[5].name}</p>
            </Nav.Link>
            <Nav.Link className={navLinkClass}>
              <p className="d-none d-lg-block mb-2">Prova Premium</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}
export default NavbarLinkedin
