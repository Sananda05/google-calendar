import "./CalendarView.css";

import Dateview from "../Dateview";

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isToday,
} from "date-fns";
import { useState } from "react";

const CalendarView = () => {
  const [today, setToday] = useState("");
  const fetchCalendarDates = (selectedDate) => {
    const firstDayOfMonth = startOfMonth(selectedDate);
    const lastDayOfMonth = endOfMonth(selectedDate);

    const startOfFirstWeek = startOfWeek(firstDayOfMonth);
    const endOfLastWeek = endOfWeek(lastDayOfMonth);

    const calendarDates = eachDayOfInterval({
      start: startOfFirstWeek,
      end: endOfLastWeek,
    });

    return calendarDates.map((date) => ({
      date,
    }));
  };

  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "WednesDay",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Example usage
  const selectedDate = new Date(); // Replace with your selected date
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
