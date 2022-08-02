import React from "react";
import HistorySkeletonStyled from "./History.styled";
import BaseSkeleton from "../BaseSkeleton";
function History() {
  return (
    <HistorySkeletonStyled>
      <BaseSkeleton type="history-title" />
      <div style = {{display:"flex",gap:"1.5em",flexDirection:"column"}}>
        {[1, 2].map((n: number) => (
          <div className="container" key={n}>
            <div className="name">
              <BaseSkeleton type="name" />
            </div>
            <div className="calendar">
              <BaseSkeleton type="calendar" />
            </div>
            <div className="status">
              <BaseSkeleton type="status" />
            </div>
            <div className="arrow">
              <BaseSkeleton type="arrow" />
            </div>
          </div>
        ))}
      </div>
    </HistorySkeletonStyled>
  );
}

export default History;
