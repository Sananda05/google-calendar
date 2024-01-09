//css
import "./Navbar.css";

//import icons

import hamburgerIcon from "../../assets/icons/hamburger.png";
import googleCalendarIcon from "../../assets/icons/google-calendar.png";
import searchIcon from "../../assets/icons/search.png";
import supportIcon from "../../assets/icons/question.png";
import settingIcon from "../../assets/icons/settings.png";
import calendarIcon from "../../assets/icons/calendar.png";
import tickIcon from "../../assets/icons/correct.png";
import dotMenuIcon from "../../assets/icons/dots-menu.png";
import userIcon from "../../assets/icons/user.png";

function Navbar() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar_left_content">
          <div className="navbar_left_first_content">
            <div className="hamburger_container">
              <img className="hamburger_icon" src={hamburgerIcon} alt="menu" />
            </div>
            <img
              src={googleCalendarIcon}
              alt="calendar"
              style={{ height: "30px", width: "30px" }}
            />
            <h2 className="navbar_title">Calendar</h2>
          </div>

          <div className="navbar_left_second_content">
            <button className="navbar_today_button">Today</button>
            <p style={{ color: "#222222" }}> {"<"} </p>
            <p style={{ color: "#222222" }}> {">"} </p>
            <h2 className="navbar_title">January 2024</h2>
          </div>
        </div>

        <div className="navbar_right_content">
          <img src={searchIcon} alt="search" />
          <img
            src={supportIcon}
            alt="support"
            style={{ height: "20px", width: "20px" }}
          />
          <img
            src={settingIcon}
            alt="setting"
            style={{ height: "20px", width: "20px" }}
          />

          <select className="navbar_view_selector">
            <option value="">Month</option>
            <option value="option1">Week</option>
            <option value="option2">Month</option>
            <option value="option3">Year</option>
          </select>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="calendar_button_container">
              <img
                className="calendar_icon"
                src={calendarIcon}
                alt="calendar"
              />
            </div>
            <div className="task_button_container">
              <img src={tickIcon} alt="tick" />
            </div>
          </div>
          <img
            src={dotMenuIcon}
            alt="menu"
            style={{ height: "20px", width: "20px" }}
          />
          <img
            src={userIcon}
            alt="profilePic"
            style={{ height: "30px", width: "30px" }}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
