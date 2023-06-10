import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const bubbleChartData = 
[
    { "x": 10, "y": 20, "z": 30 },
    { "x": 20, "y": 30, "z": 40 },
    { "x": 15, "y": 25, "z": 35 },
    { "x": 25, "y": 35, "z": 45 },
    { "x": 18, "y": 28, "z": 38 },
    { "x": 22, "y": 32, "z": 42 },
    { "x": 12, "y": 22, "z": 32 },
    { "x": 28, "y": 38, "z": 48 },
    { "x": 14, "y": 24, "z": 34 },
    { "x": 24, "y": 34, "z": 44 },
    { "x": 16, "y": 26, "z": 36 },
    { "x": 30, "y": 40, "z": 50 },
    { "x": 32, "y": 42, "z": 52 },
    { "x": 26, "y": 36, "z": 46 },
    { "x": 34, "y": 44, "z": 54 }
  ]
  
const BubbleChartComponent = () => {
  return (
    <ScatterChart width={500} height={300} data={bubbleChartData}>
      <CartesianGrid />
      <XAxis dataKey="x" name="X" />
      <YAxis dataKey="y" name="Y" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter dataKey="value" fill="#8884d8" />
    </ScatterChart>
  );
};

export default BubbleChartComponent;
