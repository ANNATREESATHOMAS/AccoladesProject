import React from "react";
const OfficeAddress = ({ address }) => {
  return (
    <div className="d-flex gap-2 address">
      <i className={address.icon} style={{ color: "#23A7AE" }}></i>
      <div>
        <h5 className="tag">{address.tag}</h5>
        <p className="add">{address.text}</p>
      </div>
    </div>
  );
};
export default OfficeAddress;
