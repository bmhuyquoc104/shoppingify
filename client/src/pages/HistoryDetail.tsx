import React from "react";
import { Outlet } from "react-router-dom";
import HistoryContainer from "../components/Container/HistoryContainer";
import HistoryDetailComponent from "../components/HistoryDetail/HistoryDetail";

function HistoryDetail() {
  return (
    <HistoryContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        x: -200,
        opacity: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
    >
      <HistoryDetailComponent />
      <Outlet />
    </HistoryContainer>
  );
}

export default HistoryDetail;
