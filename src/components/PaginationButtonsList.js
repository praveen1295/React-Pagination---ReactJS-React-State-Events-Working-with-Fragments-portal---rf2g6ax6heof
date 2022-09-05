import React, { useState, useEffect } from "react";

const PaginationButtonsList = (props) => {
  let pageNumber = [];

  for (let i = 1; i <= 20; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination-buttons-list">
      {pageNumber.map((pagenumber, index) => {
        return (
          <button
            className={pagenumber == props.page ? "active-btn" : ""}
            key={index}
            id={`button-${pagenumber}`}
            onClick={(e) => props.fetchMoreData(pagenumber)}
          >
            {pagenumber}
          </button>
        );
      })}
    </div>
  );
};

export { PaginationButtonsList };
