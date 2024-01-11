import { getDate, getMonth, isFirstDayOfMonth, isToday } from "date-fns";

import { monthList } from "../data";

const Dateview = ({ date, day, eventTitle, eventTime }) => {
  const isFirstDay = isFirstDayOfMonth(date);

  return (
    <div className="grid_item">
      {day ? (
        <div style={{ marginBottom: "10px", paddingTop: "10px" }}>{day}</div>
      ) : (
        <></>
      )}
      {isFirstDay ? (
        <div className={isToday(date) ? "today_date_container" : "other_date"}>
          <div className={isToday(date) ? "today_date" : ""}>
            {monthList[getMonth(date)]} {getDate(date)}
          </div>
          <p>{eventTitle}</p>
          <p>{eventTime}</p>
        </div>
      ) : (
        <div className={isToday(date) ? "today_date_container" : "other_date"}>
          <div className={isToday(date) ? "today_date" : ""}>
            {getDate(date)}
          </div>
          <p>{eventTitle}</p>
          <p>{eventTime}</p>
        </div>
      )}
    </div>
  );
};

export default Dateview;
