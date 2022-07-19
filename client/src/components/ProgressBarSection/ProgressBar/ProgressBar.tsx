import React from "react";
import ProgressBarStyled from "./ProgressBar.styled"

type ProgressBarProps = {
  completed: string;
  bgColor: string;
};

function ProgressBar({ completed, bgColor }: ProgressBarProps) {
  return (
    <ProgressBarStyled completed = {completed} bgColor = {bgColor} >
      <div className = "filterStyles"></div>
    </ProgressBarStyled>
  );
}

export default ProgressBar;
