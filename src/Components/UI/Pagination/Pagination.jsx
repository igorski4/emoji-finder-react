import React from "react";
import { PageItem } from "./PageItem/PageItem";
import cl from "./Pagination.module.css";
import { Select } from "./Select/Select";

export const Pagination = ({ pageCount, setLimit, setTempPage, arrPage, tempPage }) => {
  return (
    <div className={cl.pagination}>
      <div>
        {pageCount > 5 && (
          <PageItem disabledItem={tempPage === 0} onClick={() => setTempPage(0)} key={"first"}>
            First
          </PageItem>
        )}
        {arrPage.map((page) => (
          <PageItem
            activeItem={tempPage === page}
            onClick={() => {
              if (page >= 0 && page <= pageCount - 1) setTempPage(page);
            }}
            key={page}
          >
            {page + 1}
          </PageItem>
        ))}
        {pageCount > 5 && (
          <PageItem disabledItem={tempPage === pageCount - 1} onClick={() => setTempPage(pageCount - 1)} key={"last"}>
            Last
          </PageItem>
        )}
      </div>
      <div>
        <p className={cl.select_title}>Per page</p>
        <Select onChange={(e) => setLimit(e.target.value)} />
      </div>
    </div>
  );
};
