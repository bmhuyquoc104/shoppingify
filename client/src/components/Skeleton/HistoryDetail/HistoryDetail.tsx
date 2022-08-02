import React from "react";
import HistoryDetailSkeletonStyled from "./HistoryDetail.styled";
import BaseSkeleton from "../BaseSkeleton";

function HistoryDetail() {
  return (
    <HistoryDetailSkeletonStyled>
      <BaseSkeleton type="history-detail-title" />
      <BaseSkeleton type="calendar" />
      {[1, 2].map((n: number) => (
        <div key ={n} className="container">
          <BaseSkeleton type="title" />
          <div className="item">
            {[1, 2, 3].map((n2: number) => (
              <BaseSkeleton key={n2} type="text" />
            ))}
          </div>
        </div>
      ))}
    </HistoryDetailSkeletonStyled>
  );
}

export default HistoryDetail;
