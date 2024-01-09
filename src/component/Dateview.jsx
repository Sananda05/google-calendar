import { getDate, getDay } from "date-fns";

// import "./calendar-view/CalenderView.css";

const Dateview = ({ date, day }) => {
  return (
    <div className="grid_item">
      {day ? <div>{day}</div> : <></>}
      <div> {getDate(date)}</div>
    </div>
  );
};

export default Dateview;
