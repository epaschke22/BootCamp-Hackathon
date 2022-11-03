import React from "react";

const Footer = ({ login }) => {
  // let label = "User: " + login.username;
  return (
    <div className="card bg-light footer">
      {/* <span style={{ float: "right" }}>{label}</span>&nbsp; */}
      <input
        style={{ width: "fit-content" }}
        className="btn btn-primary"
        type="button"
        value="Log Out"
      />
    </div>
  );
};

export default Footer;
