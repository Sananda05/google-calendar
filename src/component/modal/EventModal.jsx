import { useRef, useState } from "react";
import "./EventModal.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventModal = ({
  handleModalOpener,
  calendarDates,
  event,
  setEvents,
  date,
}) => {
  const eventNameref = useRef("");

  const [time, setTime] = useState(null);
  const [startDate, setstartDate] = useState(date);
  const [endDate, setendDate] = useState(null);

  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");

  const currentTimeString = `${hours}:${minutes}`;

  const handlesubmit = (e) => {
    e.preventDefault();

    const title = eventNameref.current.value;

    const newEvents = { ...event };

    if (startDate && endDate) {
      const currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        time
          ? (newEvents[currentDate.toISOString()] = { title, time })
          : (newEvents[currentDate.toISOString()] = {
              title,
              time: currentTimeString,
            });
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else {
      newEvents[date.toISOString()] = { title, time };
    }

    setEvents(newEvents);

    eventNameref.current.value = "";
    setTime("");
    handleModalOpener("");
  };

  const handlestartDate = (date) => {
    setstartDate(date);
  };

  const handleEndDate = (date) => {
    setendDate(date);
  };

  return (
    <div className="modal_wrapper">
      <form onSubmit={handlesubmit} className="modal_content">
        <input
          type="text"
          placeholder="Event Title"
          id="event_name"
          name="name"
          ref={eventNameref}
          required
          //   onKeyDown={handleKeyDown}
        />
        <input
          type="time"
          value={time ? time : currentTimeString}
          onChange={(e) => setTime(e.target.value)}
          style={{ cursor: "pointer" }}
          required
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <DatePicker
            selected={startDate}
            onChange={handlestartDate}
            style={{ width: "10px", cursor: "pointer" }}
            placeholderText="Start Date"
          />
          <DatePicker
            selected={endDate}
            onChange={handleEndDate}
            style={{ width: "10px", cursor: "pointer" }}
            placeholderText="End Date"
          />
        </div>
        <div className="modal_button_group">
          <button className="cancel_btn" onClick={handleModalOpener}>
            Cancel
          </button>
          <button className="create_btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventModal;
