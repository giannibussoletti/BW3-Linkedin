import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const PostCard = () => {
  return (
    <>
      <Card style={{ width: "50rem" }}>
        <Card.Body className="d-flex">
          <Card.Img
            style={{ margin: "1vw", width: "5vw", borderRadius: 20 }}
            className="m-1 w-3 rounded "
            variant="left"
            src="./mockup/user1.png"
          />
          <Form.Control
            style={{ borderRadius: 40, color: "black" }}
            type="text"
            placeholder="Create post..."
            readOnly
          />
        </Card.Body>
        <section className="d-flex justify-content-around">
          <div className="d-flex align-items-center m-2 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              style={{ color: "rgb(68, 113, 46)" }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.586l2.293 2.293A1 1 0 0 0 22 16V8a1 1 0 0 0-1.707-.707L18 9.586V8a3 3 0 0 0-3-3z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="fs-6 m-2">Video</h1>
          </div>
          <div className="d-flex align-items-center m-2 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              viewBox="0 0 56 56"
              style={{ color: "rgb(58, 118, 245)" }}
            >
              <path
                fill="currentColor"
                d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265m31.57-21.633c-1.055-.937-2.25-1.43-3.515-1.43c-1.313 0-2.462.446-3.54 1.407l-10.593 9.469l-4.336-3.938c-.985-.867-2.04-1.336-3.164-1.336c-1.032 0-2.04.446-3 1.313L4.129 39.73V13.88c0-2.438 1.312-3.68 3.656-3.68h40.43c2.32 0 3.656 1.242 3.656 3.68v25.875Zm-21.469.258c3.024 0 5.508-2.484 5.508-5.531c0-3.023-2.484-5.531-5.508-5.531c-3.046 0-5.53 2.508-5.53 5.531a5.54 5.54 0 0 0 5.53 5.531"
              />
            </svg>
            <h1 className="fs-6 m-2">Photo</h1>
          </div>
          <div className="d-flex align-items-center" m-2 p-3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              style={{ color: "rgb(226, 81, 19)" }}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M16 7h3v4h-3zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17"
              />
            </svg>
            <h1 className="fs-6 m-2">Write Article</h1>
          </div>
        </section>
      </Card>
    </>
  );
};
export default PostCard;
