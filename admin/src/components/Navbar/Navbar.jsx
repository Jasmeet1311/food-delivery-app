import "./Navbar.css";
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="img"  />
      <img className="profile" src={assets.profile_image} alt="img"  />
    </div>
  )
}

export default Navbar
