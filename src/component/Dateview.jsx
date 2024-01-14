import { getDate, getMonth, isFirstDayOfMonth, isToday } from "date-fns";

import { monthList } from "../data";
import ViewEvent from "./ViewEvent";

const Dateview = ({ date, day, event }) => {
  const isFirstDay = isFirstDayOfMonth(date);

  const numberOfEvent = event?.length;

  return (
    <div className="grid_item">
      {day ? (
        <div style={{ marginBottom: "10px", paddingTop: "10px" }}>{day}</div>
      ) : (
        <></>
      )}
      {isFirstDay ? (
        <div className="date_wrapper">
          <div
            className={isToday(date) ? "today_date_container" : "other_date"}
          >
            <div className={isToday(date) ? "today_date" : ""}>
              {monthList[getMonth(date)]} {getDate(date)}
            </div>
            {event ? <ViewEvent event={event} /> : <></>}
            {numberOfEvent > 2 && (
              <p
                style={{
                  color: "#717172",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                {numberOfEvent - 2} more
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="date_wrapper">
          <div
            className={isToday(date) ? "today_date_container" : "other_date"}
          >
            <div className={isToday(date) ? "today_date" : ""}>
              {getDate(date)}
            </div>
          </div>
          {event ? <ViewEvent events={event} /> : <></>}
          {numberOfEvent > 2 && (
            <p
              style={{ color: "#717172", fontSize: "10px", fontWeight: "bold" }}
            >
              {numberOfEvent - 2} more
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dateview;
