import React from "react";
import { Outlet } from "react-router-dom";
import HistoryContainer from "../components/Container/HistoryContainer";
import HistoryDetailComponent from "../components/HistoryDetail/HistoryDetail";

function HistoryDetail() {
  return (
    <HistoryContainer>
      <HistoryDetailComponent />
      <Outlet />
    </HistoryContainer>
  );
}

export default HistoryDetail;
