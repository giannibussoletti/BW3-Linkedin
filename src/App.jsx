import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//
import NavbarLinkedin from "./Components/navbar/NavbarLinkedin";
import PostCard from "./Components/PostCard";
import SidebarLeft from "./Components/SidebarLeft";
import RightSideBar from "./Components/RightSideBar";
import LowProfilePage from "./Components/LowProfilePage";
import FeedPostCard from "./Components/FeedPostCard";
import ChatBox from "./Components/ChatBox";
import RightSideBarProfile from "./Components/RightSideBarProfile";
import LoginModal from "./Components/LoginModal";
//
import { BrowserRouter, Route, Routes } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

import { Col, Row, Container } from "react-bootstrap";

const App = function () {
  return (
    <BrowserRouter>
      <div className="bg-body-secondary" style={{ minHeight: "100vh" }}>
        <NavbarLinkedin />
        <Container className="mt-3">
          <Routes>
            <Route
              path="/"
              element={
                <Row className="g-3">
                  <Col xs={12} md={3} lg={3}>
                    <SidebarLeft />
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    <PostCard />
                    <FeedPostCard />
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <RightSideBar />
                  </Col>
                </Row>
              }
            />
            <Route
              path="/profile/:userId"
              element={
                <Row className="g-3 justify-content-center">
                  <Col xs={12} md={10} lg={8}>
                    <LowProfilePage />
                  </Col>

                  <Col xs={12} md={10} lg={4}>
                    <RightSideBarProfile />
                  </Col>
                </Row>
              }
            />
            <Route path="/login" element={<LoginModal />} />
          </Routes>

          <ChatBox />
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
