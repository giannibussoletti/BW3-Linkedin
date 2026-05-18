import "bootstrap/dist/css/bootstrap.min.css"
//
import NavbarLinkedin from "./Components/NavbarLinkedin"
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)
import PostCard from "./Components/PostCard"

const App = function () {
  return (
    <div className="bg-body-secondary">
      <NavbarLinkedin />
      <PostCard />
    </div>
  )
}

export default App
