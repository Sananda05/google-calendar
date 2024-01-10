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
        <div className={isToday(date) ? "today_date_container" : "other_date"}>
          <div className={isToday(date) ? "today_date" : ""}>
            {monthList[getMonth(date)]} {getDate(date)}
          </div>
        </div>
      ) : (
        <div className={isToday(date) ? "today_date_container" : "other_date"}>
          <div className={isToday(date) ? "today_date" : ""}>
            {getDate(date)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dateview;
