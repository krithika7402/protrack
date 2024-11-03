// PageLoader.jsx
import logo from "../../assets/logo.png";
import "./PageLoader.css";

const PageLoader = () => {
    return (
      <div className="loader-container">
        <div className="loader-content">
          <img src={logo} alt="ProTrack Logo" className="loader-logo" />
          <span className="loader-text">Protrack</span>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    );
  };
  
export default PageLoader;