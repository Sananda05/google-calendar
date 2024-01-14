import "./CalendarView.css";

import { useState } from "react";

import Dateview from "../Dateview";

import { dayList } from "../../data";
import { fetchCalendarDates } from "../../utils/fetch-data";
import EventModal from "../modal/EventModal";

// import { handleTransitionEnd } from "../../utils/calendar-navigation";

const CalendarView = ({ selectedDate, events, setEvents }) => {
  const [date, setDate] = useState("");
  const calendarDates = fetchCalendarDates({ selectedDate, events, setEvents });

  const [addEventModal, setAddEventModal] = useState(false);

  const handleModalOpener = ({ date }) => {
    setAddEventModal(!addEventModal);
    setDate(date);
  };

  return (
    <div className={` calendar_wrapper`}>
      {console.log(calendarDates)}
      {calendarDates.map(({ date, event }, index) =>
        index <= 6 ? (
          <div key={index} onClick={(e) => handleModalOpener({ date })}>
            <Dateview date={date} day={dayList[index]} event={event} />
          </div>
        ) : (
          <div key={index} onClick={(e) => handleModalOpener({ date })}>
            <Dateview date={date} day={""} event={event} />
          </div>
        )
      )}
      {addEventModal && (
        <EventModal
          handleModalOpener={handleModalOpener}
          calendarDates={calendarDates}
          event={events}
          setEvents={setEvents}
          date={date}
        />
      )}
    </div>
  );
};

export default CalendarView;
