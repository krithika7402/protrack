import Upgrade from "../UpgradeToPro/Upgrade";
import "./Sidebar.css";
import UserProfileButton from "../UserProfileButton/UserProfileButton";
import activity from "../../assets/sidebar-icons/Activity.svg";
import category from "../../assets/sidebar-icons/Category.svg";
import calendar from "../../assets/sidebar-icons/Calendar.svg";
import folder from "../../assets/sidebar-icons/Folder.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-menu">
          <div className="menu-item active">
            <img src={category} alt="Home" />
            <span>Home</span>
          </div>
          <div className="menu-item">
            <img src={calendar} alt="Calendar" />
            <span>Calendar</span>
          </div>
          <div className="menu-item">
            <img src={activity} alt="Tasks" />
            <span>Tasks</span>
          </div>
          <div className="menu-item">
            <img src={folder} alt="Notes" />
            <span>Notes</span>
          </div>
        </div>

        <div className="sidebar-divider"></div>
        <Upgrade />
      </div>

      <div className="sidebar-footer">
        <UserProfileButton />
      </div>
    </div>
  );
};

export default Sidebar;
