import { format } from "date-fns";

import { fetchCalendarDates } from "../../utils/fetch-data";
import {
  handleNextMonthChange,
  handlePrevMonthChange,
} from "../../utils/calendar-navigation";

const SidebarCalendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div>
        <button
          onClick={(e) =>
            handlePrevMonthChange({ e, selectedDate, setSelectedDate })
          }
        >
          &lt; Previous Month
        </button>
        <span>{format(selectedDate, "MMMM yyyy")}</span>
        <button
          onClick={(e) =>
            handleNextMonthChange({ e, selectedDate, setSelectedDate })
          }
        >
          Next Month &gt;
        </button>
      </div>
      <ul>
        {fetchCalendarDates(selectedDate).map((day, index) => (
          <li key={index}>{format(day.date, "d")}</li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCalendar;
