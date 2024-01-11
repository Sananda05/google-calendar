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
        <div className="today_date_wrapper">
          <div
            className={isToday(date) ? "today_date_container" : "other_date"}
          >
            <div className={isToday(date) ? "today_date" : ""}>
              {monthList[getMonth(date)]} {getDate(date)}
            </div>
            {eventTitle ? (
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(60, 108, 240)",
                  }}
                ></div>
                <p
                  style={{
                    color: "rgb(60, 108, 240)",
                    fontWeight: "bold",
                    fontSize: "10px",
                  }}
                >
                  {eventTime}
                </p>
                <p style={{ fontWeight: "bold", fontSize: "10px" }}>
                  {eventTitle}
                </p>
              </div>
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
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <div
                style={{
                  height: "6px",
                  width: "6px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(60, 108, 240)",
                  gap: "5px",
                }}
              ></div>
              <p
                style={{
                  color: "rgb(60, 108, 240)",
                  fontWeight: "bold",
                  fontSize: "10px",
                }}
              >
                {eventTime}
              </p>
              <p style={{ fontWeight: "bold", fontSize: "10px" }}>
                {eventTitle}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Dateview;
