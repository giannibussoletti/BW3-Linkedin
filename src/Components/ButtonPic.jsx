import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonPic = () => {
  return (
    <div
      className="m-3"
      style={{
        cursor: "pointer",
      }}
    >
      <button className="btn btn-light p-1 bg-white rounded-circle d-inline border-0">
        <FontAwesomeIcon icon={["fas", "pencil"]} />
      </button>
    </div>
  );
};

export default ButtonPic;
