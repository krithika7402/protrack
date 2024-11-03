import './UserProfileButton.css';
import avatar from "../../assets/profileAvatar.png";
import settings from '../../assets/Setting.png';

const UserProfileButton = () => {
  return (
    <div className="user-profile-container">
      <div className="user-info-section">
        <div className="avatar-container">
          <img
            src={avatar}
            alt="User Avatar"
            className="avatar-image"
          />
          <div className="status-indicator"></div>
        </div>
        <div className="user-details">
          <h4>Dalton Smith</h4>
          <span>Free Account</span>
        </div>
      </div>
      <img src={settings} alt="Settings" className="settings-icon" />
    </div>
  );
};

export default UserProfileButton;