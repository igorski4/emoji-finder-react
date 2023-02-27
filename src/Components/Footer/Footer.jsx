import clsx from "clsx";
import React from "react";
import { Pagination } from "../UI/Pagination/Pagination";
import cl from "./Footer.module.css";

const Footer = ({ pageCount, setLimit, setTempPage, arrPage, tempPage }) => {
  return (
    <div className={clsx("container", cl.footer)}>
      {!!pageCount && (
        <Pagination
          pageCount={pageCount}
          setLimit={setLimit}
          setTempPage={setTempPage}
          arrPage={arrPage}
          tempPage={tempPage}
        />
      )}
      <p className={cl.text}>2022 © Made with love by me</p>
    </div>
  );
};

export default Footer;
