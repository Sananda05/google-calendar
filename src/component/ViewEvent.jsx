const ViewEvent = ({ events }) => {
  return events.map(
    (event, index) =>
      index <= 1 && (
        <div
          key={index}
          style={{
            width: "160px",
            height: "20px",
            display: "flex",
            gap: "5px",
            marginTop: "5px",
            alignItems: "center",
            backgroundColor: "#469fe7",
            justifyContent: "center",
            borderRadius: "3px",
          }}
          onClick={""}
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
          <p style={{ fontWeight: "bold", fontSize: "10px", color: "white" }}>
            {event.title}
          </p>
        </div>
      )
  );
};

export default ViewEvent;
