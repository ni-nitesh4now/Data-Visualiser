import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const stackedBarChartData =[
    { "category": "A", "value1": 10, "value2": 20, "value3": 30 },
    { "category": "B", "value1": 15, "value2": 25, "value3": 35 },
    { "category": "C", "value1": 12, "value2": 22, "value3": 32 },
    { "category": "D", "value1": 18, "value2": 28, "value3": 38 },
    { "category": "E", "value1": 14, "value2": 24, "value3": 34 },
    { "category": "F", "value1": 16, "value2": 26, "value3": 36 },
    { "category": "G", "value1": 20, "value2": 30, "value3": 40 },
    { "category": "H", "value1": 25, "value2": 35, "value3": 45 },
    { "category": "I", "value1": 22, "value2": 32, "value3": 42 },
    { "category": "J", "value1": 28, "value2": 38, "value3": 48 },
    { "category": "K", "value1": 24, "value2": 34, "value3": 44 },
    { "category": "L", "value1": 26, "value2": 36, "value3": 46 },
    { "category": "M", "value1": 30, "value2": 40, "value3": 50 },
    { "category": "N", "value1": 35, "value2": 45, "value3": 55 },
    { "category": "O", "value1": 32, "value2": 42, "value3": 52 }
  ]
  

const StackedBarChartComponent = () => {
  return (
    <BarChart width={500} height={300} data={stackedBarChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value1" stackId="stack" fill="#8884d8" />
      <Bar dataKey="value2" stackId="stack" fill="#82ca9d" />
    </BarChart>
  );
};

export default StackedBarChartComponent;
