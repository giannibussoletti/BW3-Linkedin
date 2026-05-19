import { Col, Card } from "react-bootstrap";

const ProfileDestination = ({ imageUrl }) => {
  // Immagine segnaposto se l'utente non ha ancora cliccato su "Apply"
  const defaultPlaceholder =
    "https://via.placeholder.com/400x400?text=Inserisci+Immagine";

  return (
    <Col className="m-5">
      <Card
        className="text-white border-0 shadow"
        style={{ width: "250px", height: "250px", overflow: "hidden" }}
      >
        {/* Card.Img inserisce l'immagine di sfondo catturata direttamente dal canvas */}
        <Card.Img
          src={imageUrl || defaultPlaceholder}
          alt="Immagine di sfondo finale"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />

        {/* Contenuto testuale o icone in sovrimpressione sullo sfondo salvato */}
        <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50 p-3"></Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default ProfileDestination;
