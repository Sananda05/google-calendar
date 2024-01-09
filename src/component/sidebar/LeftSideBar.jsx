import "./Sidebar.css";

import plusIcon from "../../assets/icons/plus.png";

const LeftSideBar = () => {
  return (
    <div className="left_sidebar_container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: "45px",
          width: "150px",
          gap: "20px",
          padding: "5px",
          borderRadius: "30px",
          boxShadow: "0 .5px 5px rgb(195, 193, 193)",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        <img
          src={plusIcon}
          alt="plus"
          style={{ height: "20px", width: "20px" }}
        />
        <p style={{ fontSize: "14px" }}>Create</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
