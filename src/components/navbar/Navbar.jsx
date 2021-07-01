import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"></Search>
          <span>KID</span>
          <Notifications className="icon"></Notifications>
          <img src="https://avatars.githubusercontent.com/u/2127640?v=4" alt="User" />
          <div className="profile">
            <ArrowDropDown className="icon"></ArrowDropDown>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
