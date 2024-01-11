const ViewEvent = ({ eventTime, eventTitle }) => {
  return (
    <div
      style={{
        width: "160px",
        display: "flex",
        gap: "5px",
        marginTop: "5px",
        alignItems: "center",
        backgroundColor: "#469fe7",
        justifyContent: "center",
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
        {eventTime}
      </p>
      <p style={{ fontWeight: "bold", fontSize: "10px", color: "white" }}>
        {eventTitle}
      </p>
    </div>
  );
};

export default ViewEvent;
