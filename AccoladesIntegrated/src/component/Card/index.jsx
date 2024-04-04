import React from "react";
import Rating from "../Rating";
const Card = ({reviewObject}) => {
    // console.log(reviewObject.name,reviewObject.review)
  return (
    <div className={`carousel-item ${reviewObject.active}`}>
      <div className="card text-center" style={{ backgroundColor: "#000000" }}>
        <div className="card-header">
          <i
            className="fa-solid fa-quote-right"
            style={{ color: "#23A7AE" }}
          ></i>
        </div>
        <div className="card-body">
          <p className="card-text text-white">
            {reviewObject.review}
          </p>
          <Rating />
        </div>
        <div className="card-footer text-white">{reviewObject.name}</div>
      </div>
    </div>
  );
};

export default Card;
