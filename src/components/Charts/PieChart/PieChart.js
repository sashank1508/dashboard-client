import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// type PieChartProps = {
//   progress?: number, // Progress percentage (0 to 100)
//   size?: number, // Optional size of the chart
//   strokeWidth?: number, // Optional stroke width of the chart
// };

const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage, width, height }) => {
  const r = 55;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={width / 2}
      cy={height / 2}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"1.5rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    />
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

export const PieChart = ({ percentage, colour, width = 150, height = 150 }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={width} height={height}>
      <g transform={`rotate(-90 ${"75 75"})`}>
        <Circle colour="lightgrey" width={width} height={height} />
        <Circle
          colour={colour}
          percentage={pct}
          width={width}
          height={height}
        />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};
