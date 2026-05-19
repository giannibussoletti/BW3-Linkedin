import "bootstrap/dist/css/bootstrap.min.css"
import NavbarLinkedin from "./Components/NavbarLinkedin"
/* import all the icons in Free Solid, Free Regular, and Brands styles */
library.add(fas, far, fab)
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import PostCard from "./Components/PostCard"

import SidebarLeft from "./Components/SidebarLeft"

const App = function () {
  return (
    <div className="bg-body-secondary">
      <NavbarLinkedin />
      {/* <SidebarLeft />
      <PostCard /> */}
    </div>
  )
}

export default App
