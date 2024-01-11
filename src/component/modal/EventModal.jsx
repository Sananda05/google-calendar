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

  const [time, setTime] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(date, "Date");
    // console.log(calendarDates);
    // console.log(eventNameref.current.value);
    // console.log(time);

    const title = eventNameref.current.value;

    if (title && time) {
      const newEvents = { ...event, [date.toISOString()]: { title, time } };
      setEvents(newEvents);
    }

    eventNameref.current.value = "";
    setTime("");
    handleModalOpener("");
    // console.log(calendarDates, "Updated Date");
    // console.log(event);
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
          //   onKeyDown={handleKeyDown}
        />
        {/* {errorMessage && (
          <p
            style={{
              color: "red",
              fontSize: "11px",
              display: "hidden",
            }}
          >
            {errorMessage}
          </p>
        )} */}
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
