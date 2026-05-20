import { Card, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_PROFILE_MODAL, OPEN_EDIT_MODAL } from "./redux/reducers/index";

const ProfilePic = () => {
  const profileImage = useSelector((state) => state.currentProfile);
  const show = useSelector((state) => state.isProfileModalOpen);
  const dispatch = useDispatch();

  const handleClose = () => dispatch({ type: CLOSE_PROFILE_MODAL });

  const handleModificaClick = () => {
    // 1. Chiudiamo subito il modale attuale nel Redux
    dispatch({ type: CLOSE_PROFILE_MODAL });

    // 2. Rimandiamo l'apertura del secondo al prossimo ciclo di esecuzione.
    // Questo permette a Bootstrap di smontare il primo modale dal DOM
    // prima che Redux metta a "true" l'apertura del secondo.
    setTimeout(() => {
      dispatch({ type: OPEN_EDIT_MODAL });
    }, 300); // 150ms bastano per far finire l'animazione di chiusura
  };

  return (
    <Modal
      centered
      size="lg"
      show={show}
      onHide={handleClose}
      contentClassName="bg-transparent border-0"
    >
      <Card className="bg-dark rounded-4">
        <div className="d-flex justify-content-between align-items-center p-4 text-light">
          <h5>Foto profilo</h5>
          <FontAwesomeIcon
            icon={["fas", "xmark"]}
            className="fs-4"
            onClick={handleClose}
          />
        </div>
        <div className="d-flex justify-content-center mb-2 pt-3">
          <img
            src={profileImage}
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
          <button
            className="d-flex flex-column align-items-center bg-transparent border-0 text-light link-secondary "
            onClick={handleModificaClick}
          >
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
    </Modal>
  );
};

export default ProfilePic;
