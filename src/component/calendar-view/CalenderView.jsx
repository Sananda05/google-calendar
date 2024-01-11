import "./CalendarView.css";

import { useState } from "react";

import Dateview from "../Dateview";

import { dayList } from "../../data";
import { fetchCalendarDates } from "../../utils/fetch-data";
import EventModal from "../modal/EventModal";

const CalendarView = ({ selectedDate, setSelectedDate, events, setEvents }) => {
  const [date, setDate] = useState("");
  const calendarDates = fetchCalendarDates({ selectedDate, events, setEvents });

  const [addEventModal, setAddEventModal] = useState(false);

  const handleModalOpener = ({ date }) => {
    setAddEventModal(!addEventModal);
    setDate(date);
  };

  // console.log("Calendar Dates:", calendarDates);

  return (
    <div className="calendar_wrapper">
      {calendarDates.map(({ date, event }, index) =>
        index <= 6 ? (
          <div onClick={(e) => handleModalOpener({ date })}>
            {/* {console.log(event?.title)}
            {console.log(event?.time)} */}
            <Dateview
              date={date}
              day={dayList[index]}
              eventTitle={event?.title}
              eventTime={event?.time}
            />
          </div>
        ) : (
          <div onClick={(e) => handleModalOpener({ date })}>
            <Dateview
              date={date}
              day={""}
              eventTitle={event?.title}
              eventTime={event?.time}
            />
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
