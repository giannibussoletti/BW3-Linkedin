import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
import NavbarLinkedin from "./Components/NavbarLinkedin";
import PostCard from "./Components/PostCard";
import SidebarLeft from "./Components/SidebarLeft";
import ButtonPic from "./Components/ButtonPic";
import ChangePic from "./Components/ChangePic";
import ProfilePic from "./Components/ProfilePic";
import ChangeProfilePic from "./Components/ChangeProfilePic";

const App = function () {
  return (
    <div className="bg-body-secondary">
      <NavbarLinkedin />
      <ButtonPic />
      <ChangePic />
      <ProfilePic />
      <ChangeProfilePic />
      <SidebarLeft />
      <PostCard />
    </div>
  );
};

export default App;
