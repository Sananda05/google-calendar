import { useState } from "react";

import "./CalendarView.css";

import Dateview from "../Dateview";

import { dayList } from "../../data";
import { fetchCalendarDates } from "../../utils/fetch-data";

const CalendarView = ({ selectedDate, setSelectedDate }) => {
  const calendarDates = fetchCalendarDates(selectedDate);

  console.log("Calendar Dates:", calendarDates);

  return (
    <div className="calendar_wrapper">
      {calendarDates.map(({ date }, index) =>
        index <= 6 ? (
          <Dateview date={date} day={dayList[index]} />
        ) : (
          <Dateview date={date} day={""} />
        )
      )}
    </div>
  );
};

export default CalendarView;
