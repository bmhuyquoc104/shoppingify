import React from "react";
import BaseSkeleton from "../BaseSkeleton";
import StatisticSkeletonStyled from "./Statistis.styled";

function Statistic() {
  return (
    <StatisticSkeletonStyled>
      {[1, 2].map((n: number) => (
        <div key={n} className="item">
          <div className="title">
            <BaseSkeleton type="history-title" />
            <BaseSkeleton type="history-title" />
          </div>
          <BaseSkeleton type="progress" />
        </div>
      ))}
    </StatisticSkeletonStyled>
  );
}

export default Statistic;
