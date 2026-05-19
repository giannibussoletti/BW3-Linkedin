import "bootstrap/dist/css/bootstrap.min.css"
import NavbarLinkedin from "./Components/navbar/NavbarLinkedin"
import PostCard from "./Components/PostCard"
import SidebarLeft from "./Components/SidebarLeft"
import RightSideBar from "./Components/RightSideBar"
/* import all the icons in Free Solid, Free Regular, and Brands styles */

library.add(fas, far, fab)
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { Col, Row, Container } from "react-bootstrap"

const App = function () {
  return (
    <div className="bg-body-secondary">
      <NavbarLinkedin />
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12} md={3} lg={2}>
            <SidebarLeft xs={12} md={2} />
          </Col>
          <Col xs={12} md={6} lg={7}>
            <PostCard />
          </Col>
          <Col xs={12} md={3} lg={3}>
            <RightSideBar />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
