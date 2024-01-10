import { format, isToday } from "date-fns";

import { fetchCalendarDates } from "../../utils/fetch-data";
import { shortDayList } from "../../data";
import {
  handleNextMonthChange,
  handlePrevMonthChange,
} from "../../utils/calendar-navigation";

import leftIcon from "../../assets/icons/left.png";
import rightIcon from "../../assets/icons/right.png";

import "./SidebarCalendar.css";

const SidebarCalendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="calendar_containder">
      <div className="calendar_navigation">
        <div className="navigation_button_container">
          <img
            src={leftIcon}
            alt="left"
            className="navigation_button"
            onClick={(e) =>
              handlePrevMonthChange({ e, selectedDate, setSelectedDate })
            }
          />
        </div>
        <span style={{ fontSize: "14px" }}>
          {" "}
          {format(selectedDate, "MMMM yyyy")}
        </span>
        <div className="navigation_button_container">
          <img
            src={rightIcon}
            alt="right"
            className="navigation_button"
            onClick={(e) =>
              handleNextMonthChange({ e, selectedDate, setSelectedDate })
            }
          />
        </div>
      </div>
      <div className="calender_grid">
        {fetchCalendarDates(selectedDate).map((day, index) =>
          index <= 6 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "10px",
              }}
            >
              <div className="calendar_grid_item" key={index}>
                {shortDayList[index]}
              </div>
              <p
                className={
                  isToday(day.date)
                    ? "today calendar_grid_item"
                    : "calendar_grid_item"
                }
              >
                {format(day.date, "d")}
              </p>
            </div>
          ) : (
            <div
              className={
                isToday(day.date)
                  ? "today calendar_grid_item"
                  : "calendar_grid_item"
              }
              key={index}
            >
              {format(day.date, "d")}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SidebarCalendar;
