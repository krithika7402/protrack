import "./Header.css";
import logo from "../../assets/logo.png";
import profileAvatar from "../../assets/profileAvatar.png";
import { Plus } from "lucide-react";
import bell from "../../assets/bell.svg"
import search from "../../assets/searchIcon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="ProTrack Logo" className="logo" />
        <span className="header-2">Protrack</span>

        <div className="search-container">
          <img src={search} alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="  Search" className="search-input" />
        </div>

        <div className="actions-container">
          <button className="add-task-button">
            <Plus size={16} />
            ADD TASKS
          </button>

          <button className="notification-button">
          <img src={bell} alt="ProTrack Logo" className="notification-bell" />
          </button>

          <img src={profileAvatar} alt="User Profile" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
