import "bootstrap/dist/css/bootstrap.min.css"
//
import NavbarLinkedin from "./assets/components/NavbarLinkedin"
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)
import PostCard from "./Components/PostCard"

const App = function () {
  return (
    <>
      <NavbarLinkedin />
      <PostCard />
    </>
  )
}

export default App
