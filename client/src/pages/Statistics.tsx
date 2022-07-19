import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "../components/ProgressBarSection/ProgressBarSection";
import HistoryContainerStyled from "../components/Container/HistoryContainer";

function Statistics() {
  return (
    <HistoryContainerStyled>
      <ProgressBar />
      <Outlet />
    </HistoryContainerStyled>
  );
}

export default Statistics;
