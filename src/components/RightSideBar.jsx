import { Card, ListGroup, Button } from "react-bootstrap";
import { BsInfoCircle, BsChevronDown, BsChevronRight } from "react-icons/bs";
import FooterP from "./FooterP";
const RightSideBar = function () {
  return (
    <div className="d-flex flex-column align-items-center">
      <Card
        style={{ width: "100%", borderRadius: "12px", borderColor: "#e0e0e0" }}
        className="p-3 shadow-sm bg-white"
      >
        <Card.Body className="p-0 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0 text-dark fw-bold" style={{ fontSize: "1rem" }}>
              LinkedIn Notizie
            </h5>
            <BsInfoCircle
              className="text-secondary"
              style={{ cursor: "pointer", fontSize: "0.9rem" }}
            />
          </div>

          <div
            className="text-secondary fw-semibold mb-3"
            style={{ fontSize: "0.75rem" }}
          >
            Storie principali
          </div>

          <ListGroup variant="flush">
            <ListGroup.Item
              className="px-0 py-2 border-0 bg-transparent custom-hover-link"
              style={{ cursor: "pointer" }}
            >
              <h6
                className="mb-1 text-dark fw-bold"
                style={{ fontSize: "0.875rem", lineHeight: "1.3" }}
              >
                Playtomic, Canva: cercasi country manager
              </h6>
              <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                2 giorni fa • 393 lettori
              </small>
            </ListGroup.Item>

            <ListGroup.Item
              className="px-0 py-2 border-0 bg-transparent custom-hover-link"
              style={{ cursor: "pointer" }}
            >
              <h6
                className="mb-1 text-dark fw-bold"
                style={{ fontSize: "0.875rem", lineHeight: "1.3" }}
              >
                L'auto europea parla sempre più cinese
              </h6>
              <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                2 giorni fa • 369 lettori
              </small>
            </ListGroup.Item>

            <ListGroup.Item
              className="px-0 py-2 border-0 bg-transparent custom-hover-link"
              style={{ cursor: "pointer" }}
            >
              <h6
                className="mb-1 text-dark fw-bold"
                style={{ fontSize: "0.875rem", lineHeight: "1.3" }}
              >
                Aumentano i consumi per cani e gatti
              </h6>
              <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                2 giorni fa • 104 lettori
              </small>
            </ListGroup.Item>

            <ListGroup.Item
              className="px-0 py-2 border-0 bg-transparent custom-hover-link"
              style={{ cursor: "pointer" }}
            >
              <h6
                className="mb-1 text-dark fw-bold"
                style={{ fontSize: "0.875rem", lineHeight: "1.3" }}
              >
                Le nuove Top Voices di LinkedIn
              </h6>
              <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                4 giorni fa • 1312 lettori
              </small>
            </ListGroup.Item>

            <ListGroup.Item
              className="px-0 py-2 border-0 bg-transparent custom-hover-link"
              style={{ cursor: "pointer" }}
            >
              <h6
                className="mb-1 text-dark fw-bold"
                style={{ fontSize: "0.875rem", lineHeight: "1.3" }}
              >
                Internazionali di Roma: vince Sinner
              </h6>
              <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                2h fa • 1237 lettori
              </small>
            </ListGroup.Item>
          </ListGroup>

          <Button
            variant="link"
            className="text-secondary fw-bold p-0 mt-2 text-decoration-none d-flex align-items-center gap-1 btn-sm container-hover"
            style={{ fontSize: "0.85rem" }}
          >
            Mostra altre notizie <BsChevronDown />
          </Button>
        </Card.Body>

        <Card.Body className="p-0 border-top pt-3">
          <h4
            className="fw-bold text-dark mb-3"
            style={{ fontSize: "1.25rem" }}
          >
            I rompicapo di oggi
          </h4>

          <ListGroup variant="flush">
            <ListGroup.Item
              className="px-1 py-2 border-0 d-flex align-items-center justify-content-between bg-transparent rounded custom-game-item"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center text-white fw-bold rounded shadow-sm"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#0a66c2",
                    fontSize: "0.8rem",
                  }}
                >
                  P
                </div>
                <div>
                  <h6
                    className="mb-0 text-dark fw-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Patches{" "}
                    <span
                      className="text-muted fw-normal ms-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      #62
                    </span>
                  </h6>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Metti insieme i pezzi
                  </div>
                </div>
              </div>
              <BsChevronRight className="text-secondary" />
            </ListGroup.Item>

            <ListGroup.Item
              className="px-1 py-2 border-0 d-flex align-items-center justify-content-between bg-transparent rounded custom-game-item"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center text-white fw-bold rounded shadow-sm"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f57c00",
                    fontSize: "0.8rem",
                  }}
                >
                  Z
                </div>
                <div>
                  <h6
                    className="mb-0 text-dark fw-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Zip{" "}
                    <span
                      className="text-muted fw-normal ms-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      #427
                    </span>
                  </h6>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Completa il percorso
                  </div>
                </div>
              </div>
              <BsChevronRight className="text-secondary" />
            </ListGroup.Item>

            <ListGroup.Item
              className="px-1 py-2 border-0 d-flex align-items-center justify-content-between bg-transparent rounded custom-game-item"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center text-white fw-bold rounded shadow-sm"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#00875a",
                    fontSize: "0.8rem",
                  }}
                >
                  M
                </div>
                <div>
                  <h6
                    className="mb-0 text-dark fw-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Mini Sudoku{" "}
                    <span
                      className="text-muted fw-normal ms-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      #280
                    </span>
                  </h6>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Il gioco classico, in versione mini
                  </div>
                </div>
              </div>
              <BsChevronRight className="text-secondary" />
            </ListGroup.Item>

            <ListGroup.Item
              className="px-1 py-2 border-0 d-flex align-items-center justify-content-between bg-transparent rounded custom-game-item"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center text-white fw-bold rounded shadow-sm"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e6a100",
                    fontSize: "0.8rem",
                  }}
                >
                  T
                </div>
                <div>
                  <h6
                    className="mb-0 text-dark fw-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Tango{" "}
                    <span
                      className="text-muted fw-normal ms-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      #588
                    </span>
                  </h6>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Armonizza la griglia
                  </div>
                </div>
              </div>
              <BsChevronRight className="text-secondary" />
            </ListGroup.Item>
          </ListGroup>

          <Button
            variant="link"
            className="text-secondary fw-bold p-0 mt-3 text-decoration-none d-flex align-items-center gap-1 btn-sm container-hover"
            style={{ fontSize: "0.85rem" }}
          >
            Mostra altro <BsChevronDown />
          </Button>
        </Card.Body>

        <style>{`
        .custom-hover-link h6:hover {
          color: #0a66c2 !important;
          text-decoration: underline;
        }
        .custom-game-item:hover {
          background-color: #f8f9fa !important;
        }
        .container-hover:hover {
          color: #4f4f4f !important;
        }
      `}</style>
      </Card>
      <FooterP />
    </div>
  );
};
export default RightSideBar;
