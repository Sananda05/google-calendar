import "./CalendarView.css";

import { useState } from "react";

import Dateview from "../Dateview";

import { dayList } from "../../data";
import { fetchCalendarDates } from "../../utils/fetch-data";
import EventModal from "../modal/EventModal";

const CalendarView = ({ selectedDate, setSelectedDate }) => {
  const calendarDates = fetchCalendarDates(selectedDate);

  const [addEventModal, setAddEventModal] = useState(false);

  // const handleAddEvent = ({ e, date }) => {
  //   e.preventDefault();
  //   setAddEventModal(!addEventModal);
  //   console.log("Date", date);
  // };

  const handleModalOpener = ({ e, date }) => {
    e.preventDefault();
    setAddEventModal(!addEventModal);
  };

  console.log("Calendar Dates:", calendarDates);

  return (
    <div className="calendar_wrapper">
      {calendarDates.map(({ date }, index) =>
        index <= 6 ? (
          <div onClick={(e) => handleModalOpener({ e, date })}>
            <Dateview date={date} day={dayList[index]} />
          </div>
        ) : (
          <div onClick={(e) => handleModalOpener({ e, date })}>
            <Dateview date={date} day={""} />
          </div>
        )
      )}
      {addEventModal && <EventModal handleModalOpener={handleModalOpener} />}
    </div>
  );
};

export default CalendarView;
