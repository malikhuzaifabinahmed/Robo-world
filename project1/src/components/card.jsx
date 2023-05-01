import React from "react";
import "./card.css";
/**

A function component that renders a card with monster image, name and email
@param {Object} props - The props object
@param {Object} monster - An object with id, name and email properties
@returns {JSX.Element} A div element with a class name of “card-container”;
**/

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
