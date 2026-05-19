import { Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";

const LanguagesCard = () => {
  return (
    <Card className="mb-3 border-light shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Lingue</h5>
          <div>
            <Button variant="link" className="text-secondary p-1 me-2">
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </Button>
            <Button variant="link" className="text-secondary p-1">
              <FontAwesomeIcon icon={faPen} size="lg" />
            </Button>
          </div>
        </div>

        <ListGroup variant="flush">
          <ListGroup.Item className="px-0 py-2 border-bottom">
            <h6 className="fw-bold text-dark mb-0">Inglese</h6>
          </ListGroup.Item>
          <ListGroup.Item className="px-0 py-2 border-bottom">
            <h6 className="fw-bold text-dark mb-0">Italiano</h6>
            <div className="small text-secondary">
              Conoscenza madrelingua o bilingue
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default LanguagesCard;
