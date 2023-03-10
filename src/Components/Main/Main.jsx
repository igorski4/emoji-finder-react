import clsx from "clsx";
import React from "react";
import Card from "../Card/Card";
import Input from "../UI/Input/Input";
import cl from "./Main.module.css";

const Main = ({ setFilter, filter, cards, limit, tempPage, pageCount }) => {
  return (
    <div className={clsx("container", cl.main)}>
      <Input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Enter keywords..." />
      <div className={cl.grid}>
        {cards
          .filter((card) => `${card.title} ${card.keywords}`.toLowerCase().trim().includes(filter.toLowerCase().trim()))
          .slice(tempPage * limit, (tempPage + 1) * limit)
          .map((card) => (
            <Card key={card.title} title={card.title} symbol={card.symbol} keywords={card.keywords} />
          ))}
      </div>
    </div>
  );
};

export default Main;
