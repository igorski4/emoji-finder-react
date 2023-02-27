import React, { useState } from "react";
import cl from "./Select.module.css";

export const Select = ({ onChange }) => {
  const [option] = useState([12, 24, 48]);
  return (
    <select onChange={onChange} className={cl.select}>
      {option.map((limit) => (
        <option key={limit}>{limit}</option>
      ))}
    </select>
  );
};
