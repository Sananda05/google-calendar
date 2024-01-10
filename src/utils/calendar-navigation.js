import { addMonths, subMonths } from "date-fns";

export const handleNextMonthChange = ({ e, selectedDate, setSelectedDate }) => {
  e.preventDefault();
  setSelectedDate(addMonths(selectedDate, 1));
};

export const handlePrevMonthChange = ({ e, selectedDate, setSelectedDate }) => {
  e.preventDefault();
  setSelectedDate(subMonths(selectedDate, 1));
};
