import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";

export const fetchCalendarDates = (selectedDate) => {
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
