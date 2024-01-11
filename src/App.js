import "./App.css";
import { useState } from "react";
import CalendarView from "./component/calendar-view/CalenderView";
import Navbar from "./component/navbar/Navbar";
import RightsideBar from "./component/sidebar/RightsideBar";
import LeftSideBar from "./component/sidebar/LeftSideBar";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sideCalendarDate, setSideCalendarDate] = useState(new Date());
  const [events, setEvents] = useState({});

  return (
    <div className="App">
      <div className="navbar_container">
        <Navbar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      <div className="body_container">
        <LeftSideBar
          selectedDate={sideCalendarDate}
          setSelectedDate={setSideCalendarDate}
          events={events}
          setEvents={setEvents}
        />
        <CalendarView
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          events={events}
          setEvents={setEvents}
        />
        <RightsideBar />
      </div>
    </div>
  );
}

export default App;
