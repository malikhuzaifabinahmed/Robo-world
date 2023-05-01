import React from "react";
import "./cardllist.css";
import { Card } from "./card";
/**
 * A function component that renders a list of monsters
 * @param {Object} props - The props object
 * @param {Array} monster - An array of objects with id and name properties
 * @returns {JSX.Element} A div element with a class name of "card-list"
 */

export const Cardlist = (props) => {
  return (
    <div className="card-list">
      {props.monster.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
