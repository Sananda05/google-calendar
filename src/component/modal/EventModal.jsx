import { useRef, useState } from "react";
import "./EventModal.css";

const EventModal = ({
  handleModalOpener,
  calendarDates,
  event,
  setEvents,
  date,
}) => {
  const eventNameref = useRef("");

  const [time, setTime] = useState("12:00 AM");

  const handlesubmit = (e) => {
    e.preventDefault();

    const title = eventNameref.current.value;

    if (title && time) {
      const newEvents = { ...event, [date.toISOString()]: { title, time } };
      setEvents(newEvents);
    }

    eventNameref.current.value = "";
    setTime("");
    handleModalOpener("");
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
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder={time}
          style={{ cursor: "pointer" }}
          required
        />
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
