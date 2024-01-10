import { useRef, useState } from "react";
import "./EventModal.css";

const EventModal = ({ handleModalOpener }) => {
  const eventNameref = useRef("");

  const [time, setTime] = useState("");

  return (
    <div className="modal_wrapper">
      <form onSubmit={""} className="modal_content">
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
