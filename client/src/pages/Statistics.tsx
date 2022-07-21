import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "../components/ProgressBarSection/ProgressBarSection";
import ChartSection from "../components/ChartSection/ChartSection";
import HistoryContainerStyled from "../components/Container/HistoryContainer";
import StatisticContainerStyled from "../components/Container/StatisticContainer";

function Statistics() {
  return (
    <StatisticContainerStyled>
      <ProgressBar />
      <ChartSection/>
      <Outlet />
    </StatisticContainerStyled>
  );
}

export default Statistics;
