import { useRef } from "react";
import "./EventModal.css";

const EventModal = ({ handleModalOpener }) => {
  const eventNameref = useRef("");

  return (
    <div className="modal_content">
      <form onSubmit={""}>
        <input
          type="text"
          placeholder="Event Details"
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
        <div className="modal_button_group">
          <button className="cancel_btn" onClick={handleModalOpener}>
            cancel
          </button>
          <button className="create_btn" type="submit">
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventModal;
