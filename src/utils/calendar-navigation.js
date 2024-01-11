import { addMonths, subMonths } from "date-fns";

export const handleNextMonthChange = ({ e, selectedDate, setSelectedDate }) => {
  e.preventDefault();
  // setAnimation("next");
  // setNextMonth(selectedDate);
  setSelectedDate(addMonths(selectedDate, 1));
};

export const handlePrevMonthChange = ({ e, selectedDate, setSelectedDate }) => {
  e.preventDefault();
  // setAnimation("prev");
  setSelectedDate(subMonths(selectedDate, 1));
};

// export const handleTransitionEnd = ({ animation, setAnimation }) => {
//   if (animation !== null) setAnimation(null);
// };
