import "./App.css";
import CalendarView from "./component/calendar-view/CalenderView";
import Navbar from "./component/navbar/Navbar";
import RightsideBar from "./component/sidebar/RightsideBar";
import LeftSideBar from "./component/sidebar/LeftSideBar";

function App() {
  // task

  // task of the session

  return (
    <div className="App">
      <div className="navbar_container">
        <Navbar />
      </div>
      <div className="body_container">
        <LeftSideBar />
        <CalendarView />
        <RightsideBar />
      </div>
    </div>
  );
}

export default App;
