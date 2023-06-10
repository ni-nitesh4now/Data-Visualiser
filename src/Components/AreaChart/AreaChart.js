import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const areaChartData = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 30 },
  { name: "D", value: 15 },
  { name: "E", value: 25 },
  { name: "F", value: 35 },
  { name: "G", value: 12 },
  { name: "H", value: 22 },
  { name: "I", value: 32 },
  { name: "J", value: 18 },
  { name: "K", value: 28 },
  { name: "L", value: 38 },
  { name: "M", value: 14 },
  { name: "N", value: 24 },
  { name: "O", value: 34 }
];

const AreaChartComponent = () => {
  return (
    <AreaChart width={500} height={300} data={areaChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default AreaChartComponent;
