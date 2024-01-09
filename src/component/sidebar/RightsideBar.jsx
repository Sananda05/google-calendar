import "./Sidebar.css";

import keepIcon from "../../assets/icons/bulb.png";
import checkIcon from "../../assets/icons/checkmark.png";
import userIcon from "../../assets/icons/user.png";
import mapIcon from "../../assets/icons/google-maps.png";
import plusIcon from "../../assets/icons/plus.png";

const RightsideBar = () => {
  return (
    <div className="right_sidebar_container">
      <div className="right_sidebar_icons">
        <div className="keep_icon_container">
          <img className="keep_icon" src={keepIcon} alt="calendar" />
        </div>
        <img src={checkIcon} alt="chekc" />
        <img src={userIcon} alt="user" />
        <img src={mapIcon} alt="map" />
        <div></div>
        <img src={plusIcon} alt="plus" />
      </div>
      <div></div>
    </div>
  );
};

export default RightsideBar;
