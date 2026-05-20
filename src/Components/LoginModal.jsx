import { Button, Modal, Form, Alert, Image } from "react-bootstrap"
import { useState } from "react"

const LoginModal = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Button variant="primary">Launch demo modal</Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title className="d-flex align-items-center gap-2">
            <Image style={{ maxHeight: "40px" }} src="./linkedin-in-logo.png" />{" "}
            <span className="fw-semibold">Login</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">Per poter accedere al sito devi fare il login</Alert>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="mb-3"
          />

          <Form.Control
            type="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
            className="mb-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Conferma Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal
