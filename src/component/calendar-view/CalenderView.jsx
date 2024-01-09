import "./CalendarView.css";

import Dateview from "../Dateview";

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
} from "date-fns";

const CalendarView = () => {
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
      formattedDate: format(date, "yyyy-MM-dd"), // Adjust the format as needed
    }));
  };

  // Example usage
  const selectedDate = new Date(); // Replace with your selected date
  const calendarDates = fetchCalendarDates(selectedDate);

  console.log("Calendar Dates:", calendarDates);

  return (
    <div className="calendar_wrapper">
      {calendarDates.map(({ date, formattedDate }, index) => (
        <Dateview date={date} />
      ))}
    </div>
  );
};

export default CalendarView;
