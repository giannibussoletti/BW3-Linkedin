import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { buttonArray } from "./MainProfileInfoScript"
import { useSelector, useDispatch } from "react-redux"
import ProfilePic from "../ProfileEditor"
import ChangeProfilePic from "../ChangeProfilePic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ChangeCoverPic from "../../ChangeCoverPic"
import { OPEN_COVER_MODAL, OPEN_PROFILE_MODAL } from "../redux/actions/actions"

const MainProfileInfo = () => {
  const currentCover = useSelector((state) => state.currentCover)
  const profileImage = useSelector((state) => state.currentProfile)
  const dispatch = useDispatch()

  return (
    <Container fluid className="p-0 bg-white mb-3 rounded-3 shadow-sm">
      <Row className="m-0">
        <Col className="p-0">
          <Image
            className="w-100 rounded-top-3"
            src={currentCover}
            style={{ width: "790px", height: "200px", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Row className="p-4">
        <Col xs={12} style={{ height: "75px" }} className="position-relative">
          <div
            className=" position-absolute border-4 border-light border rounded-circle"
            style={{
              top: "-50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}>
            <Image
              className="rounded-circle"
              src={profileImage}
              style={{ height: "152px", width: "152px", objectFit: "cover" }}
              onClick={() => dispatch({ type: OPEN_PROFILE_MODAL })}
            />
          </div>
          <FontAwesomeIcon
            icon={["fas", "pen"]}
            className="fs-6 position-absolute bg-light rounded-circle px-2 py-2 text-primary"
            style={{
              top: "-200",
              right: "15px",
              cursor: "pointer",
            }}
            onClick={() => dispatch({ type: OPEN_COVER_MODAL })}
          />
        </Col>
        <Col xs={12} md={8}>
          <h3 className="fw-semibold">Gianni Bussoletti</h3>
          <p className="m-0">
            Skill up in Full Stack developer presso EPICODE | Amante del cinema | Videomaker | Ex
            Graphic Designer
          </p>
          <p className="text-secondary mb-2" style={{ fontSize: ".9rem" }}>
            Guidonia Montecelio, Lazio, Italia ·{" "}
            <span className="text-primary fw-bold">Informazioni di contatto</span>
          </p>
          <p style={{ fontSize: ".9rem" }} className="text-primary fw-bold">
            84 collegamenti
          </p>
          <div className="d-flex gap-2 mb-4 flex-wrap">
            {buttonArray.map((button) => {
              return (
                <Button
                  key={button.variant + button.name}
                  style={button.style}
                  variant={button.variant}
                  className={button.classes}>
                  {button.name}
                </Button>
              )
            })}
          </div>
          <div
            className="p-3 rounded-3 w-75"
            style={{ backgroundColor: "#dde7f1", fontSize: "0.9rem" }}>
            <p className="m-0 text-black fw-bold">Disponibile a lavorare</p>
            <p className="m-0">Roma | In sede · Ibrido · Da remoto</p>
            <p className="m-0 text-primary fw-semibold">Mostra dettagli</p>
          </div>
        </Col>
        <Col>
          <div className="d-none d-md-flex gap-2 align-items-center">
            <div style={{ width: "40px" }}>
              <Image className="w-100" src="../epicodeschool_logo.jpg" />
            </div>
            <p className="m-0 fw-semibold">EPICODE Institute of Technology</p>
          </div>
        </Col>
      </Row>
      <ProfilePic />
      <ChangeProfilePic />
      <ChangeCoverPic />
    </Container>
  )
}

export default MainProfileInfo
