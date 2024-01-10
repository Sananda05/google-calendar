import { getDate, getMonth, isFirstDayOfMonth, isToday } from "date-fns";

import { monthList } from "../data";
const Dateview = ({ date, day }) => {
  const isFirstDay = isFirstDayOfMonth(date);

  console.log(day, "Day");

  return (
    <div className="grid_item">
      {day ? (
        <div style={{ marginBottom: "10px", marginTop: "10px" }}>{day}</div>
      ) : (
        <></>
      )}
      {isFirstDay ? (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: isToday(date) ? "#ccdbf3" : "transparent",
          }}
        >
          {monthList[getMonth(date)]} {getDate(date)}
        </div>
      ) : (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: isToday(date) ? "#ccdbf3" : "transparent",
          }}
        >
          {getDate(date)}
        </div>
      )}
    </div>
  );
};

export default Dateview;
