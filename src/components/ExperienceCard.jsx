import { Card, Row, Col, ListGroup, Button, Modal, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faPen,
  faArrowRight,
  faBriefcase,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "./redux/actions/actions"
import { useParams } from "react-router"

const ExperienceCard = () => {
  const dispatch = useDispatch()
  const experiences = useSelector((state) => state.content)
  const { userId } = useParams()

  // gestione Modale
  const [showModal, setShowModal] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedExpId, setSelectedExpId] = useState(null)
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  })

  useEffect(() => {
    if (userId) {
      dispatch(fetchExperiences(userId))
    }
  }, [dispatch, userId])

  const formatPeriod = (start, end) => {
    if (!start) return ""
    const startYear = new Date(start).getFullYear()
    const endYear = end ? new Date(end).getFullYear() : "Presente"
    return `${startYear} - ${endYear}`
  }

  const handleShowCreate = () => {
    setIsEditMode(false)
    setSelectedExpId(null)
    setFormData({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    })
    setShowModal(true)
  }

  const handleShowEdit = (exp) => {
    setIsEditMode(true)
    setSelectedExpId(exp._id)
    setFormData({
      role: exp.role || "",
      company: exp.company || "",
      startDate: exp.startDate ? exp.startDate.substring(0, 10) : "",
      endDate: exp.endDate ? exp.endDate.substring(0, 10) : "",
      description: exp.description || "",
      area: exp.area || "",
    })
    setShowModal(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEditMode) {
      dispatch(
        updateExperience({
          userId,
          expId: selectedExpId,
          experienceData: formData,
        }),
      )
    } else {
      dispatch(createExperience({ userId, experienceData: formData }))
    }
    setShowModal(false)
  }

  const handleDelete = (expId) => {
    if (window.confirm("Sei sicuro di voler eliminare questa esperienza?")) {
      dispatch(deleteExperience({ userId, expId }))
      setShowModal(false)
    }
  }

  return (
    <>
      <Card className="mb-3 border-light shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">Esperienza</h5>
            <div>
              <Button variant="link" className="text-secondary p-1" onClick={handleShowCreate}>
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </Button>
            </div>
          </div>

          <ListGroup variant="flush">
            {experiences &&
              experiences.map((exp) => (
                <ListGroup.Item key={exp._id} className="px-0 py-3 border-bottom position-relative">
                  <Row className="align-items-start">
                    <Col xs="auto" className="pe-0">
                      <div
                        className="bg-secondary text-white d-flex align-items-center justify-content-center rounded"
                        style={{ width: "48px", height: "48px" }}>
                        <FontAwesomeIcon icon={faBriefcase} size="lg" />
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex justify-content-between align-items-start">
                        <h6 className="fw-bold mb-0">{exp.role}</h6>
                        <Button
                          variant="link"
                          className="text-secondary p-0 ps-2"
                          onClick={() => handleShowEdit(exp)}>
                          <FontAwesomeIcon icon={faPen} size="sm" />
                        </Button>
                      </div>

                      <div className="text-muted small">{exp.company}</div>
                      <div className="text-secondary small">
                        {formatPeriod(exp.startDate, exp.endDate)}
                      </div>
                      {exp.area && <div className="text-secondary small">{exp.area}</div>}
                      {exp.description && (
                        <p className="small mt-2 mb-2 text-dark">
                          {exp.description}{" "}
                          <span className="text-muted fw-bold" style={{ cursor: "pointer" }}>
                            altro
                          </span>
                        </p>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
          </ListGroup>

          <Button
            variant="light"
            className="w-100 text-secondary fw-bold mt-2 py-2 border-0 bg-transparent text-center">
            Mostra tutto <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            {isEditMode ? "Modifica esperienza" : "Aggiungi esperienza"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Qualifica</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Esempio: Web Developer"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Nome azienda</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Esempio: Microsoft"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Data di inizio</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Data di fine</Form.Label>
                  <Form.Control
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Milano, Italia"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <div>
              {isEditMode && (
                <Button variant="danger" onClick={() => handleDelete(selectedExpId)}>
                  <FontAwesomeIcon icon={faTrash} className="me-2" /> Elimina
                </Button>
              )}
            </div>
            <div>
              <Button
                variant="outline-secondary"
                className="me-2 rounded-pill"
                onClick={() => setShowModal(false)}>
                Annulla
              </Button>
              <Button variant="primary" type="submit" className="rounded-pill">
                Salva
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ExperienceCard
