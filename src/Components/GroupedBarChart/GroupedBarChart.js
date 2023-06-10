import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const groupedBarChartData = [
  { name: "A", group1: 10, group2: 20 },
  { name: "B", group1: 15, group2: 25 },
  { name: "C", group1: 12, group2: 22 },
  { name: "D", group1: 18, group2: 28 },
  { name: "E", group1: 14, group2: 24 },
  { name: "F", group1: 16, group2: 26 },
  { name: "G", group1: 20, group2: 30 },
  { name: "H", group1: 25, group2: 35 },
  { name: "I", group1: 22, group2: 32 },
  { name: "J", group1: 28, group2: 38 },
  { name: "K", group1: 24, group2: 34 },
  { name: "L", group1: 26, group2: 36 },
  { name: "M", group1: 30, group2: 40 },
  { name: "N", group1: 35, group2: 45 },
  { name: "O", group1: 32, group2: 42 }
];

const GroupedBarChartComponent = () => {
  return (
    <BarChart width={500} height={300} data={groupedBarChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="group1" fill="#8884d8" />
      <Bar dataKey="group2" fill="#82ca9d" />
    </BarChart>
  );
};

export default GroupedBarChartComponent;
