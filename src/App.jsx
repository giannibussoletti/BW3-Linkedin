import "bootstrap/dist/css/bootstrap.min.css";
//
/* import all the icons in Free Solid, Free Regular, and Brands styles */
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
import { useState } from "react";
import ProfilePic from "./Components/ProfilePic";
import ChangeProfilePic from "./Components/ChangeProfilePic";

const App = function () {
  const [currentCover, setCurrentCover] = useState("");
  const [currentAvatar, setCurrentAvatar] = useState(
    "https://picsum.photos/id/1015/600/200",
  );
  const handleSaveCover = (newImageBase64) => {
    setCurrentCover(newImageBase64); // Salva l'immagine ritagliata dal Canvas
  };

  const handleProfileImageSave = (imageBase64) => {
    setCurrentAvatar(imageBase64); // Aggiorna la foto profilo in tempo reale
  };

  return (
    <div className="bg-body-secondary">
      <NavbarLinkedin />
      <ButtonPic />
      <ChangePic onSaveImage={handleSaveCover} />
      <ProfilePic />
      <ChangeProfilePic onSaveImage={handleProfileImageSave} />
      <SidebarLeft coverImage={currentCover} profileImage={currentAvatar} />
      <PostCard />
    </div>
  );
};

export default App;
