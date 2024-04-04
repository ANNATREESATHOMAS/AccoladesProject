import React from "react";
const ClientImageCard = ({source}) => {
  return (
    <>
      <div className="slider-card opacity-100-hover ">
        <img
          decoding="async"
          src={source}
          alt="Youtube"
        />
      </div>
    </>
  );
};
export default ClientImageCard;
