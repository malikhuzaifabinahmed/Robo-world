import React from "react";

import "./search-box.css";
/**

A function component that renders an input element of type search
@param {Object} props - The props object
@param {string} placeholder - The placeholder text for the input element
@param {function} handleChange - The event handler function for the input element
@returns {JSX.Element} An input element with type, placeholder and onChange attributes */

export const Searchbox = ({ placeholder, handleChange }) => (
  <div>
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
