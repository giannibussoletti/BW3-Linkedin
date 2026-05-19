import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfilePic = () => {
  return (
    <Col xs={10} lg={8}>
      <Card className="bg-dark rounded-4">
        <div className="d-flex justify-content-between align-items-center p-4 text-light">
          <h5>Foto profilo</h5>
          <FontAwesomeIcon icon={["fas", "xmark"]} className="fs-4" />
        </div>
        <div className="d-flex justify-content-center mb-2 pt-3">
          <img
            src="https://programmaus.unionesarda.it/wp-content/uploads/2024/09/placeholder-325.png"
            alt="Immagine Profilo"
            className="rounded-circle"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div>
          <button className="rounded-5 fw-bolder m-3 p-2 px-4 bg-transparent border-2 border-light text-light">
            <FontAwesomeIcon icon={["fas", "eye"]} className="text-white" />
            Chiunque
          </button>
        </div>
        {/*Bottoni */}
        <div className="d-flex mb-1 gap-5 text-light border-top border-secondary px-3 pt-3">
          <button className="d-flex flex-column align-items-center bg-transparent border-0 text-light link-secondary ">
            <FontAwesomeIcon icon={["fas", "pencil"]} />
            <p>Modifica</p>
          </button>
          <button className="d-flex flex-column align-items-center bg-transparent border-0 text-light link-secondary">
            <FontAwesomeIcon icon={["fas", "camera"]} />
            <p>Aggiorna Foto</p>
          </button>
          <button className="d-flex flex-column align-items-center bg-transparent border-0 text-light link-secondary">
            <FontAwesomeIcon icon={["fas", "image"]} />
            <p>Fotogrammi</p>
          </button>
          <button className="d-flex flex-column align-items-center ms-auto bg-transparent  border-0 text-light link-secondary">
            <FontAwesomeIcon icon={["fas", "trash-can"]} />
            <p>Elimina</p>
          </button>
        </div>
      </Card>
    </Col>
  );
};

export default ProfilePic;
