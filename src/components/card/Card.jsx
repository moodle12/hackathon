import React from "react";
import "./Card.css";

const Card = ({ title, image, time }) => {
  return (
    <div id="card">
      <img id="img" src={image} alt="cardImage" />
      <h1 id="title">Subject- {title}</h1>
      <h1
        id="title"
        style={{
          fontSize: "1rem",
          fontFamily: "serif",
          fontWeight: "bold",
        }}
      >
        Timing- {time}
      </h1>
    </div>
  );
};

export default Card;
