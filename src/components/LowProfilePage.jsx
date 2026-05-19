import { Container } from "react-bootstrap"
import ExperienceCard from "./ExperienceCard"
import EducationCard from "./EducationCard"
import SkillsCard from "./SkillsCard"
import LanguagesCard from "./LanguagesCard"
import InterestsCard from "./InterestsCard"
import ProfileFooter from "./ProfileFooter"
import MainProfileInfo from "./MainProfileInfo"

const LowProfilePage = () => {
  return (
    <Container className="py-4" style={{ maxWidth: "850px" }}>
      <MainProfileInfo />
      <ExperienceCard />
      <EducationCard />
      <SkillsCard />
      <LanguagesCard />
      <InterestsCard />
      <ProfileFooter />
    </Container>
  )
}

export default LowProfilePage
