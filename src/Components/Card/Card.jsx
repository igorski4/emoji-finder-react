import React from "react";
import cl from "./Card.module.css";

const Card = ({ title, symbol, keywords }) => {
  return (
    <div className={cl.item}>
      <p className={cl.symbol}>{symbol}</p>
      <h2 className={cl.title}>{title}</h2>
      <p className={cl.keywords}>{keywords}</p>
    </div>
  );
};

export default Card;
