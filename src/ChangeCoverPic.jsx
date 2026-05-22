import { Card, Form, Button, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useRef } from "react"
import AvatarEditor from "react-avatar-editor"
import { useDispatch, useSelector } from "react-redux"
import { setCoverImage } from "./Components/redux/actions/editorPicture"
import { CLOSE_COVER_MODAL } from "./Components/redux/actions/actions"

const ChangeCoverPic = () => {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.isCoverModalOpen)

  const currentCover = useSelector((state) => state.currentCover)
  const [imageSrc, setImageSrc] = useState(currentCover)

  const [zoom, setZoom] = useState(1)
  const [rotate, setRotate] = useState(0)

  const fileInputRef = useRef(null)
  const editorRef = useRef(null) // Riferimento per estrarre il ritaglio finale

  const finalWidth = 1200
  const finalHeight = 300

  const handleClose = () => {
    dispatch({ type: CLOSE_COVER_MODAL })
  }

  // CARICAMENTO NUOVA IMMAGINE
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Seleziona un file immagine valido.")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setImageSrc(reader.result)
      setZoom(1)
      setRotate(0)
    }
    reader.readAsDataURL(file)
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  // SALVATAGGIO
  const handleApply = () => {
    if (editorRef.current) {
      try {
        const canvas = editorRef.current.getImageScaledToCanvas()

        const finalCanvas = document.createElement("canvas")
        finalCanvas.width = finalWidth
        finalCanvas.height = finalHeight
        const ctx = finalCanvas.getContext("2d")

        ctx.drawImage(canvas, 0, 0, finalWidth, finalHeight)

        const croppedBase64 = finalCanvas.toDataURL("image/jpeg", 0.95)

        dispatch(setCoverImage(croppedBase64))
        handleClose()
      } catch (error) {
        console.error("Errore durante il ritaglio della copertina:", error)
      }
    }
  }

  return (
    <Modal
      centered
      size="lg"
      show={show}
      onHide={handleClose}
      contentClassName="bg-transparent border-0">
      <Card className="position-relative shadow-sm overflow-hidden">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="d-none"
        />

        <div className="d-flex justify-content-between align-items-center p-4 border-bottom border-1 border-muted">
          <h5>Immagine di copertina</h5>
          <FontAwesomeIcon
            icon={["fas", "xmark"]}
            className="fs-4"
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          />
        </div>

        {/* Contenitore Editor */}
        <div
          className="mt-3 position-relative d-flex align-items-center justify-content-center bg-dark"
          style={{
            height: "280px",
            width: "100%",
          }}>
          {imageSrc ? (
            <AvatarEditor
              ref={editorRef}
              image={imageSrc}
              width={600}
              height={150}
              border={[20, 65]}
              scale={zoom}
              rotate={rotate}
              crossOrigin="anonymous"
            />
          ) : (
            <div className="text-white small">Nessuna immagine selezionata</div>
          )}
        </div>

        {/* Pulsanti di Rotazione */}
        <div className="p-2 d-flex justify-content-end bg-white">
          <button
            className="rounded-circle py-1 m-1 border border-1 bg-white btn btn-light"
            onClick={() => setRotate((prev) => prev - 90)}>
            <FontAwesomeIcon icon={["fas", "rotate-left"]} />
          </button>
          <button
            className="rounded-circle py-1 m-1 border border-1 bg-white btn btn-light"
            onClick={() => setRotate((prev) => prev + 90)}>
            <FontAwesomeIcon icon={["fas", "rotate-right"]} />
          </button>
        </div>

        {/* Slider Controlli */}
        <div className="d-flex justify-content-around bg-white border-top">
          {/* Slider Zoom */}
          <div className="d-flex flex-column m-4 flex-grow-1" style={{ maxWidth: "250px" }}>
            <p className="mb-1 text-muted small fw-bold">Zoom: {zoom}x</p>
            <Form.Group className="w-100 d-flex align-items-center">
              <Form.Range
                min={1}
                max={3}
                step={0.02}
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
              />
            </Form.Group>
          </div>

          {/* Slider Rotazione */}
          <div className="d-flex flex-column m-4 flex-grow-1" style={{ maxWidth: "250px" }}>
            <p className="mb-1 text-muted small fw-bold">Rotazione fine: {rotate}°</p>
            <Form.Group className="w-100 d-flex align-items-center">
              <Form.Range
                min={-45}
                max={45}
                step={1}
                value={rotate}
                onChange={(e) => setRotate(parseInt(e.target.value))}
              />
            </Form.Group>
          </div>
        </div>

        {/* Bottoni */}
        <div className="d-flex align-items-center justify-content-between py-3 px-4 border-top border-1 border-muted bg-light">
          <p
            className="fw-bold mb-0 text-danger small"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setImageSrc("")
              setZoom(1)
              setRotate(0)
            }}>
            Elimina foto
          </p>
          <div>
            <Button
              className="rounded-5 bg-white text-primary fw-bold py-1 border-primary me-2 shadow-none"
              onClick={triggerFileInput}>
              Cambia foto
            </Button>
            <Button className="rounded-5 px-4 py-1 fw-bold btn-primary" onClick={handleApply}>
              Applica
            </Button>
          </div>
        </div>
      </Card>
    </Modal>
  )
}

export default ChangeCoverPic
