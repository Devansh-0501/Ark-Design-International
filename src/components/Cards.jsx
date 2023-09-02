import React from "react";
import "../styles/card.css"
const Cards = (props) => {
  return (
    
    <div className="card" >
      <h2>Principal Architect</h2>
      <img
        src={props.image}
        alt="aa"
        
      />
      <h3>Message</h3>
      <p >
        {props.message}
      </p>
    </div>
  );
};

export default Cards;
