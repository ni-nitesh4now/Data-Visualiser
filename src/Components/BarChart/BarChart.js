import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const barChartData = [
    { "name": "A", "value": 10 },
    { "name": "B", "value": 20 },
    { "name": "C", "value": 30 },
    { "name": "D", "value": 15 },
    { "name": "E", "value": 25 },
    { "name": "F", "value": 35 },
    { "name": "G", "value": 12 },
    { "name": "H", "value": 22 },
    { "name": "I", "value": 32 },
    { "name": "J", "value": 18 },
    { "name": "K", "value": 28 },
    { "name": "L", "value": 38 },
    { "name": "M", "value": 14 },
    { "name": "N", "value": 24 },
    { "name": "O", "value": 34 }
  ]
  


const BarChartComponent = () => {
  return (
    <BarChart width={500} height={300} data={barChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
