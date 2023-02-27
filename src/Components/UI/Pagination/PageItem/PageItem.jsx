import clsx from "clsx";
import React from "react";
import cl from "./PageItem.module.css";

export const PageItem = ({ children, onClick, disabledItem, activeItem }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(cl.page, { [cl.page_disabled]: disabledItem }, { [cl.page_active]: activeItem })}
    >
      {children}
    </div>
  );
};
