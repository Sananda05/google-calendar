import { getDate, getMonth, isFirstDayOfMonth, isToday } from "date-fns";

import { monthList } from "../data";
import ViewEvent from "./ViewEvent";

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
        <div className="today_date_wrapper">
          <div
            className={isToday(date) ? "today_date_container" : "other_date"}
          >
            <div className={isToday(date) ? "today_date" : ""}>
              {monthList[getMonth(date)]} {getDate(date)}
            </div>
            {eventTitle ? (
              <ViewEvent eventTime={eventTime} eventTitle={eventTitle} />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div className="today_date_wrapper">
          <div
            className={isToday(date) ? "today_date_container" : "other_date"}
          >
            <div className={isToday(date) ? "today_date" : ""}>
              {getDate(date)}
            </div>
          </div>
          {eventTitle ? (
            <ViewEvent eventTime={eventTime} eventTitle={eventTitle} />
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Dateview;
