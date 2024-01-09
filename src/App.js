import "./App.css";
import CalendarView from "./component/calendar-view/CalenderView";
import Navbar from "./component/navbar/Navbar";

function App() {
  // task

  // task of the session

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar_container">
          <Navbar />
        </div>
        <div className="body_container">
          <CalendarView />
        </div>
      </header>
    </div>
  );
}

export default App;
