import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "../components/ProgressBarSection/ProgressBarSection";
import ChartSection from "../components/ChartSection/ChartSection";
import HistoryContainerStyled from "../components/Container/HistoryContainer";
import StatisticContainerStyled from "../components/Container/StatisticContainer";

function Statistics() {
  return (
    <StatisticContainerStyled
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
    >
      <ProgressBar />
      <ChartSection />
      <Outlet />
    </StatisticContainerStyled>
  );
}

export default Statistics;
