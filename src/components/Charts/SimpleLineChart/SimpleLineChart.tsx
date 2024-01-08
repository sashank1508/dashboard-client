import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "01",
    spend: 1,
  },
  {
    name: "08",
    spend: 0.7,
  },
  {
    name: "15",
    spend: 0.5,
  },
  {
    name: "22",
    spend: 0.4,
  },
];

interface ISimpleLineChartComponent {
  legendString?: string | React.ReactNode;
  data: any;
}

export const SimpleLineChartComponent: React.FC<ISimpleLineChartComponent> = ({
  legendString = null,
  data,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {legendString && <Legend />}
        <Line
          type="monotone"
          dataKey="spend"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const SimpleLineChart = React.memo(SimpleLineChartComponent);
