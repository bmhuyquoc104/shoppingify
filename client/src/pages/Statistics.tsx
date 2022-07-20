import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "../components/ProgressBarSection/ProgressBarSection";
import ChartSection from "../components/ChartSection/ChartSection";
import HistoryContainerStyled from "../components/Container/HistoryContainer";
import PageContainerStyled from "../components/Container/PageContainer";

function Statistics() {
  return (
    <PageContainerStyled>
      <ProgressBar />
      <ChartSection />
      <Outlet />
    </PageContainerStyled>
  );
}

export default Statistics;
