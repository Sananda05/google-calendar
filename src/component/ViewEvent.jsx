const ViewEvent = ({ events, date }) => {
  return events.map(
    (event, index) =>
      index <= 2 && (
        <div
          key={index}
          style={{
            width: "160px",
            height: "20px",
            display: "flex",
            marginTop: "5px",
            alignItems: "center",
            backgroundColor: event.color,
            justifyContent: "center",
            borderRadius: "1px",
          }}
          onClick={""}
        >
          {event.startDate.getDate() === date.getDate() && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  height: "6px",
                  width: "6px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  gap: "5px",
                }}
              ></div>
              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "10px",
                }}
              >
                {event.time}
              </p>
              <p
                style={{ fontWeight: "bold", fontSize: "10px", color: "white" }}
              >
                {event.title}
              </p>
            </div>
          )}
        </div>
      )
  );
};

export default ViewEvent;
