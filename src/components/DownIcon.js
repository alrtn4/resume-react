import React from "react";

const DownIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-40px",
        transform: "translateY(-40px)",
      }}
    >
      <div>
        <img
          src={props.icon}
          alt=""
          style={{
            maxWidth: "35px",
          }}
        />
      </div>
    </div>
  );
};

export default DownIcon;
