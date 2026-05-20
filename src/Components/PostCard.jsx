import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import EmojiPicker from "emoji-picker-react"

const TokenPaolo =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDU4NDA2YmJlOTAwMTVkZWU1N2UiLCJpYXQiOjE3NzkwOTQ5MTYsImV4cCI6MTc4MDMwNDUxNn0.76kWBS67r5ygr_d-wqdXMOaMNYRsOUCAvuKafyaiAHA"

const PostCard = () => {
  const [showModal, setShowModal] = useState(false)
  const [postText, setPostText] = useState("")
  const [showPicker, setShowPicker] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleClose = () => {
    setShowModal(false)
    setShowPicker(false)
    setPostText("")
    setSelectedImage(null)
    setImagePreview(null)
  }

  const handleShow = () => setShowModal(true)

  const handleEmojiClick = emojiData => {
    setPostText(prev => prev + emojiData.emoji)
  }

  const handleImageChange = e => {
    const file = e.target.files[0]

    if (file) {
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handlePost = async () => {
  try {
    if (!postText.trim() && !selectedImage) {
      alert("Escribe algo o selecciona una imagen")
      return
    }

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenPaolo}`,
        },
        body: JSON.stringify({
          text: postText || " ",
        }),
      },
    )

    const data = await response.json()
    console.log("RESPUESTA POST:", data)

    if (!response.ok) {
      throw new Error(data.message || "Error creando el post")
    }

    if (selectedImage) {
      const formData = new FormData()
      formData.append("post", selectedImage)

      const imageResponse = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${data._id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TokenPaolo}`,
          },
          body: formData,
        },
      )

      const imageData = await imageResponse.json()
      console.log("RESPUESTA IMAGEN:", imageData)

      if (!imageResponse.ok) {
        throw new Error(imageData.message || "Error subiendo imagen")
      }
    }

    alert("Post creado correctamente")
    handleClose()
  } catch (error) {
    console.log("ERROR:", error)
    alert(error.message)
  }
}

  return (
    <>
      <Card className="w-100">
        <Card.Body className="d-flex align-items-center gap-2">
          <img
            src="./mockup/user1.png"
            alt="user"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <Form.Control
            style={{
              borderRadius: 40,
              color: "black",
              cursor: "pointer",
            }}
            type="text"
            placeholder="Create post..."
            readOnly
            onClick={handleShow}
          />
        </Card.Body>

        <section className="d-flex justify-content-around flex-wrap">
          <div className="d-flex align-items-center m-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

          <div className="d-flex align-items-center m-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

          <div className="d-flex align-items-center m-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-2">
            <img
              src="./mockup/user1.png"
              alt="user"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Modal.Title>userName</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="What do you want to talk about?"
            value={postText}
            onChange={e => setPostText(e.target.value)}
          />

          <div className="d-flex flex-wrap align-items-center gap-2 mt-3">
            <Button
              className="border-0 bg-transparent p-1"
              onClick={() => setShowPicker(!showPicker)}
            >
              😊
            </Button>

            <Button className="border-0 bg-transparent p-1">🖼️</Button>
            <Button className="border-0 bg-transparent p-1">📅</Button>
            <Button className="border-0 bg-transparent p-1">⭐</Button>
            <Button className="border-0 bg-transparent p-1">➕</Button>
          </div>

          {showPicker && (
            <div className="mt-3">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.5.85a6.65 6.65 0 1 1-5.072 2.349l.073-.07a.5.5 0 0 1 .69.717l-.154.188A5.65 5.65 0 1 0 8 1.874v1.648a.5.5 0 0 1-1 0V1.35l.01-.1a.5.5 0 0 1 .49-.4m-3.25 3.4a.25.25 0 0 1 .323-.026L8.08 6.741a.96.96 0 1 1-1.34 1.34L4.225 4.572a.25.25 0 0 1 .026-.323"
              />
            </svg>
          </Button>

          <Button
            variant="primary"
            onClick={handlePost}
            disabled={postText.trim() === ""}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PostCard