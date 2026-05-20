import { Card, ListGroup, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faPen,
  faArrowRight,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons"

const SkillsCard = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      sources: [{ id: 101, text: "EPICODE Institute of Technology", type: "education" }],
    },
    {
      id: 2,
      name: "Progettazione di siti WordPress",
      sources: [
        {
          id: 201,
          text: "Graphic Designer | Videomaker | Web designer presso Freelance",
          type: "work",
        },
        { id: 202, text: "Com2 - Ente di formazione", type: "work" },
      ],
    },
  ]

  return (
    <Card className="mb-3 border-light shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Competenze (15)</h5>
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
          {skills.map((skill) => (
            <ListGroup.Item key={skill.id} className="px-0 py-3 border-bottom">
              <h6 className="fw-bold text-dark mb-2">{skill.name}</h6>
              {skill.sources.map((source) => (
                <div
                  key={source.id}
                  className="small text-secondary d-flex align-items-center mb-1">
                  <FontAwesomeIcon
                    icon={source.type === "education" ? faGraduationCap : faBriefcase}
                    className={`me-2 ${source.type === "education" ? "text-danger" : "text-secondary"}`}
                  />
                  {source.text}
                </div>
              ))}
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
  )
}

export default SkillsCard
