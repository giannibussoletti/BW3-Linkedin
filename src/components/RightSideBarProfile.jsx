import { Card, ListGroup, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faPlus,
  faArrowRight,
  faUserPlus,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const RightSideBarProfile = function () {
  const altriProfili = [
    { id: 1, nome: "Qualcuno presso Account Managing Group S.r.l." },
    { id: 2, nome: "Qualcuno nel settore Fabbricazione di macchina..." },
    {
      id: 3,
      nome: "Amministratore progetti nel settore Sviluppo di softwar...",
    },
    { id: 4, nome: "Ingegnere civile presso TTW" },
  ];

  const personeConsigliate = [
    {
      id: 1,
      nome: "Lorenzo Petrucci",
      info: "Cybersecurity Specialist in formazione presso Epicode - Penetration Testing, ...",
      grado: "2°",
      verificato: true,
      avatar: "https://via.placeholder.com/150/orange",
    },
    {
      id: 2,
      nome: "Diana Cristina Santiago Arano",
      info: "Assistente vendite retail",
      grado: "3°+",
      verificato: false,
      avatar: "https://via.placeholder.com/150/blue",
    },
    {
      id: 3,
      nome: "Michele De Santis",
      info: "International Sales & Commercial Operations @ Tucano | APAC & India ...",
      grado: "2°",
      verificato: true,
      avatar: "https://via.placeholder.com/150/green",
    },
    {
      id: 4,
      nome: "filippo pasqualone",
      info: "Venditore presso Bar",
      grado: "3°+",
      verificato: false,
      avatar: "https://via.placeholder.com/150/gray",
    },
    {
      id: 5,
      nome: "clarice paola mongiovi",
      info: "Area manager",
      grado: "2°",
      verificato: false,
      in: true,
      avatar: "https://via.placeholder.com/150/purple",
    },
  ];

  const pagineInteresse = [
    {
      id: 1,
      nome: "Geopop",
      tipo: "Produzione di media",
      follower: "192.100 follower",
      dettagli: "Laura e altri 3 collegamenti seguono questa pagina",
      logo: "https://via.placeholder.com/50/yellow",
    },
    {
      id: 2,
      nome: "Forbes Italia",
      tipo: "Editoria: libri e pubblicazioni periodiche",
      follower: "572.476 follower",
      dettagli: "Nicola e altri 7 collegamenti seguono questa pagina",
      logo: "https://via.placeholder.com/50/black",
      in: true,
    },
  ];

  return (
    <div
      style={{ maxWidth: "320px" }}
      className="d-flex flex-column gap-2 font-sans"
    >
      <Card
        style={{ borderRadius: "12px", borderColor: "#e0e0e0" }}
        className="p-3 bg-white shadow-sm"
      >
        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
          <div>
            <div className="fw-bold text-dark" style={{ fontSize: "0.875rem" }}>
              Lingua del profilo
            </div>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              Italiano
            </div>
          </div>
          <FontAwesomeIcon
            icon={faPencil}
            className="text-secondary cursor-pointer"
            style={{ fontSize: "0.9rem" }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold text-dark" style={{ fontSize: "0.875rem" }}>
              Profilo pubblico e URL
            </div>
            <div
              className="text-muted text-truncate"
              style={{ fontSize: "0.8rem", maxWidth: "240px" }}
            >
              www.linkedin.com/in/giangiorgio
            </div>
          </div>
          <FontAwesomeIcon
            icon={faPencil}
            className="text-secondary cursor-pointer"
            style={{ fontSize: "0.9rem" }}
          />
        </div>
      </Card>
      <Card
        style={{ borderRadius: "12px", borderColor: "#e0e0e0" }}
        className="pt-3 px-3 pb-0 bg-white shadow-sm"
      >
        <h5 className="fw-bold text-dark mb-0" style={{ fontSize: "0.95rem" }}>
          Altri profili consultati
        </h5>
        <span
          className="text-muted d-block mb-2"
          style={{ fontSize: "0.75rem" }}
        >
          Visibile solo a te
        </span>

        <ListGroup variant="flush">
          {altriProfili.map((profilo) => (
            <ListGroup.Item
              key={profilo.id}
              className="px-0 py-3 border-0 border-bottom d-flex align-items-start gap-2 bg-transparent"
            >
              <div
                className="rounded-circle bg-secondary-subtle border"
                style={{
                  width: "48px",
                  height: "48px",
                }}
              ></div>
              <div>
                <div
                  className="fw-bold text-dark lh-sm mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  {profilo.nome}
                </div>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill fw-bold py-1 px-3"
                  style={{ fontSize: "0.75rem", borderColor: "#666" }}
                >
                  Visualizza
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      <Card
        style={{ borderRadius: "12px", borderColor: "#e0e0e0" }}
        className="pt-3 bg-white shadow-sm overflow-hidden"
      >
        <div className="px-3">
          <h5
            className="fw-bold text-dark mb-0"
            style={{ fontSize: "0.95rem" }}
          >
            Persone che potresti conoscere
          </h5>
          <span
            className="text-muted d-block mb-3"
            style={{ fontSize: "0.75rem" }}
          >
            Della tua qualifica
          </span>
        </div>

        <ListGroup variant="flush">
          {personeConsigliate.map((persona) => (
            <ListGroup.Item
              key={persona.id}
              className="px-3 py-3 border-0 border-bottom bg-transparent"
            >
              <div className="d-flex align-items-start gap-2 mb-2">
                <Image
                  src={persona.avatar}
                  roundedCircle
                  style={{ width: "48px", height: "48px" }}
                />
                <div>
                  <div
                    className="fw-bold text-dark lh-1 mb-1"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {persona.nome}
                    {persona.verificato && (
                      <FontAwesomeIcon
                        icon={faShieldHalved}
                        className="text-secondary ms-1"
                        style={{ fontSize: "0.8rem" }}
                      />
                    )}
                    <span
                      className="text-muted fw-normal ms-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      • {persona.grado}
                    </span>
                    {persona.in && (
                      <span
                        className="badge bg-primary ms-1"
                        style={{ fontSize: "0.6rem", padding: "2px 5px" }}
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    )}
                  </div>
                  <div
                    className="text-muted custom-line-clamp"
                    style={{ fontSize: "0.75rem", lineHeight: "1.2" }}
                  >
                    {persona.info}
                  </div>
                </div>
              </div>
              <div className="ps-5">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill fw-bold py-1 px-3 d-flex align-items-center gap-1 hover-connect-btn"
                  style={{
                    fontSize: "0.85rem",
                    borderColor: "#666",
                    color: "#5e5e5e",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ fontSize: "0.85rem" }}
                  />{" "}
                  Collegati
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Button
          variant="link"
          className="w-100 py-2 border-0 rounded-0 text-secondary fw-bold text-decoration-none d-flex align-items-center justify-content-center gap-1 custom-footer-btn"
          style={{ fontSize: "0.875rem" }}
        >
          Mostra tutto{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "0.85rem" }}
          />
        </Button>
      </Card>
      <Card
        style={{ borderRadius: "12px", borderColor: "#e0e0e0" }}
        className="pt-3 bg-white shadow-sm overflow-hidden"
      >
        <div className="px-3">
          <h5
            className="fw-bold text-dark mb-0"
            style={{ fontSize: "0.95rem" }}
          >
            Potrebbero interessarti
          </h5>
          <span
            className="text-muted d-block mb-3"
            style={{ fontSize: "0.75rem" }}
          >
            Pagine per te
          </span>
        </div>
        <ListGroup variant="flush">
          {pagineInteresse.map((pagina) => (
            <ListGroup.Item
              key={pagina.id}
              className="px-3 py-3 border-0 border-bottom bg-transparent"
            >
              <div className="d-flex align-items-start gap-2 mb-2">
                <Image
                  src={pagina.logo}
                  rounded
                  style={{ width: "48px", height: "48px" }}
                />
                <div>
                  <div
                    className="fw-bold text-dark lh-1 mb-1"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {pagina.nome}
                    {pagina.in && (
                      <span
                        className="badge bg-primary ms-1"
                        style={{ fontSize: "0.6rem", padding: "2px 5px" }}
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    )}
                  </div>
                  <div
                    className="text-muted mb-1"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {pagina.tipo}
                  </div>
                  <div className="text-muted" style={{ fontSize: "0.72rem" }}>
                    {pagina.follower}
                  </div>
                </div>
              </div>
              <div className="ps-5 mb-2">
                <div
                  className="text-muted mb-2"
                  style={{ fontSize: "0.72rem", lineHeight: "1.2" }}
                >
                  {pagina.dettagli}
                </div>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill fw-bold py-1 px-3 d-flex align-items-center gap-1 hover-connect-btn"
                  style={{
                    fontSize: "0.85rem",
                    borderColor: "#666",
                    color: "#5e5e5e",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ fontSize: "0.95rem" }}
                  />{" "}
                  Segui
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button
          variant="link"
          className="w-100 py-2 border-0 rounded-0 text-secondary fw-bold text-decoration-none d-flex align-items-center justify-content-center gap-1 custom-d-btn"
          style={{ fontSize: "0.875rem" }}
        >
          Mostra tutto{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "0.85rem" }}
          />
        </Button>
      </Card>

      <style>{`
        .cursor-pointer { cursor: pointer; }
        .cursor-pointer:hover { color: #0a66c2 !important; }
        .custom-line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
        .hover-connect-btn:hover {
          background-color: #f3f3f3 !important;
          border-width: 2px !important;
          color: #333 !important;
        }
        .custom-d-btn:hover {
          background-color: #f1f1f1 !important;
          color: #333 !important;
        }
      `}</style>
    </div>
  );
};

export default RightSideBarProfile;
