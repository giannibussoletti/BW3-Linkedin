import { Container } from "react-bootstrap"
import ExperienceCard from "./ExperienceCard"
import EducationCard from "./EducationCard"
import SkillsCard from "./SkillsCard"
import LanguagesCard from "./LanguagesCard"
import InterestsCard from "./InterestsCard"
import ProfileFooter from "./ProfileFooter"
import MainProfileInfo from "./MainProfileInfo/MainProfileInfo"
import AnalisiCard from "./AnalisiCard"
import InfoCard from "./InfoCard"
import ServiceCard from "./ServiceCard"
import ActivityCard from "./ActivityCard"
const LowProfilePage = () => {
  return (
    <Container className="py-4" style={{ maxWidth: "850px" }}>
      <MainProfileInfo />
      <AnalisiCard />
      <InfoCard />
      <ServiceCard />
      <ActivityCard />
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
