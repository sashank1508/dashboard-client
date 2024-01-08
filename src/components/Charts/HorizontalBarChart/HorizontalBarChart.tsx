import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./horizontalBarchart.scss";

type HorizontalProgressBarProps = {
  percentage: number;
};

export const HorizontalBarChart: React.FC<HorizontalProgressBarProps> = ({
  percentage,
}) => {
  return (
    <div className="horizontalBarChartContainer">
      <div className="legendContainer">
        <div>
          <span className="legendIcon" style={{ backgroundColor: `#d897ab` }} />
          <span>Used</span>
        </div>
        <div>
          <span className="legendIcon" style={{ backgroundColor: `#198754` }} />
          <span>Expired</span>
        </div>
      </div>
      <div className="barAndLabel">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        
      </div>
    </div>
  );
};
