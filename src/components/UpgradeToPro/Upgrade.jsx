import './Upgrade.css';
import proIcon from "../../assets/whitelogo.png";

const Upgrade = () => {
  return (
    <div className="upgrade-card">
      <div className="upgrade-circle">
        <img src={proIcon} alt="PRO" className="pro-icon"/>
      </div>
      <div className="upgrade-text">
        <div className='pro-header'>Upgrade to PRO</div>
        <p className='pro-paragraph'>to get access to all features!
        Connect with Protrack World!</p>
      </div>
    </div>
  );
};

export default Upgrade;