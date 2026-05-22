import { Col, Card, Container, Row, Button, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobs } from "./redux/actions/actions"

const JobsCard = () => {
  const jobs = useSelector((store) => store.jobsArray)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  return (
    <Card className="mb-3 border-light shadow-sm">
      <Card.Body>
        <Container fluid>
          <Row>
            <h5 className="fw-bold mb-0">Lavori</h5>

            {jobs.slice(0, 20).map((sJob) => {
              return (
                <Col xs={12} key={sJob._id}>
                  <ListGroup.Item className="px-0 py-3 position-relative">
                    <Row className="align-items-start">
                      <Col xs="auto" className="pe-0">
                        <div
                          className="bg-secondary text-white d-flex align-items-center justify-content-center rounded"
                          style={{ width: "48px", height: "48px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-briefcase" size="lg" />
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-between align-items-start">
                          <h6 className="fw-bold mb-0">{sJob.title}</h6>
                          <Button variant="link" className="text-secondary p-0 ps-2">
                            Hello
                          </Button>
                        </div>

                        <div className="text-muted small">
                          {sJob.company_name} • {sJob.candidate_required_location}
                        </div>

                        <p className="small mt-2 mb-2 text-dark">
                          {new Date(sJob.publication_date).toLocaleDateString()}
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </Col>
              )
            })}
            <Col xs={12} className=" border-top border-1">
              <Button
                variant="light"
                className="w-100 text-secondary fw-bold mt-2 py-2 border-0 bg-transparent text-center">
                Mostra tutto <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ms-1" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default JobsCard
