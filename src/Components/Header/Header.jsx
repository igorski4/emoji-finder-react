import React from "react";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <div className={cl.header}>
      <div className="container">
        <h1 className={cl.title}>Emoji Finder</h1>
        <p className={cl.subtitle}>Find emoji by keywords</p>
      </div>
    </div>
  );
};

export default Header;
