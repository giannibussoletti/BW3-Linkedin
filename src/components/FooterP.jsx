import { Container, Nav, Dropdown } from "react-bootstrap";
import { BsCaretDownFill } from "react-icons/bs";
const FooterP = function () {
  return (
    <Container
      className="py-3 px-2"
      style={{ maxWidth: "320px", fontFamily: "sans-serif" }}
    >
      <Nav
        className="justify-content-center flex-wrap gap-2 mb-3"
        style={{ fontSize: "0.75rem" }}
      >
        <Nav.Link href="#" className="p-0 text-secondary custom-footer-link">
          Informazioni
        </Nav.Link>
        <Nav.Link href="#" className="p-0 text-secondary custom-footer-link">
          Accessibilità
        </Nav.Link>
        <Nav.Link href="#" className="p-0 text-secondary custom-footer-link">
          Centro assistenza
        </Nav.Link>

        <Dropdown as={Nav.Item} className="d-inline">
          <Dropdown.Toggle
            as={Nav.Link}
            className="p-0 text-secondary border-0 bg-transparent custom-footer-link d-flex align-items-center gap-1"
            style={{ fontSize: "0.75rem" }}
          >
            Privacy e condizioni{" "}
            <BsCaretDownFill style={{ fontSize: "0.6rem" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu align="center" style={{ fontSize: "0.8rem" }}>
            <Dropdown.Item href="#">Informativa sulla privacy</Dropdown.Item>
            <Dropdown.Item href="#">Contratto di licenza</Dropdown.Item>
            <Dropdown.Item href="#">Informativa sui cookie</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Nav.Link href="#" className="p-0 text-secondary custom-footer-link">
          Opzioni per gli annunci pubblicitari
        </Nav.Link>
        <Nav.Link href="#" className="p-0 text-secondary custom-footer-link">
          Pubblicità
        </Nav.Link>

        <Dropdown as={Nav.Item} className="d-inline">
          <Dropdown.Toggle
            as={Nav.Link}
            className="p-0 text-secondary border-0 bg-transparent custom-footer-link d-flex align-items-center gap-1"
            style={{ fontSize: "0.75rem" }}
          >
            Servizi alle aziende{" "}
            <BsCaretDownFill style={{ fontSize: "0.6rem" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu align="center" style={{ fontSize: "0.8rem" }}>
            <Dropdown.Item href="#">Soluzioni per i talenti</Dropdown.Item>
            <Dropdown.Item href="#">Soluzioni di marketing</Dropdown.Item>
            <Dropdown.Item href="#">Vendite</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Nav.Link href="#" className="p-0 text-secondary custom-footer-link">
          Scarica l'app LinkedIn
        </Nav.Link>
        <Nav.Link href="#" className="p-0 text-secondary custom-footer-link">
          Altro
        </Nav.Link>
      </Nav>

      <div
        className="d-flex align-items-center justify-content-center gap-2"
        style={{ fontSize: "0.75rem", color: "#191919" }}
      >
        <span className="text-info">Linked</span>
        <span>Corporation © {new Date().getFullYear()}</span>
      </div>

      <style>{`
        .custom-footer-link {
          color: #666666 !important;
          transition: color 0.15s ease, text-decoration 0.15s ease;
        }
        .custom-footer-link:hover {
          color: #0a66c2 !important;
          text-decoration: underline !important;
        }
        /* Rimuove la freccia di default di Bootstrap dal dropdown */
        .dropdown-toggle::after {
          display: none !important;
        }
      `}</style>
    </Container>
  );
};
export default FooterP;
