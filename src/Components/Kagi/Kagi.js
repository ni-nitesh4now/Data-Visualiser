import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { date: "2022-01-01", boxSize: 2 },
  { date: "2022-01-02", boxSize: 2 },
  { date: "2022-01-03", boxSize: 2 },
  { date: "2022-01-04", boxSize: 2 },
  { date: "2022-01-05", boxSize: 2 },
  { date: "2022-01-06", boxSize: 2 },
  { date: "2022-01-07", boxSize: 2 },
  { date: "2022-01-08", boxSize: 2 },
  { date: "2022-01-09", boxSize: 2 },
  { date: "2022-01-10", boxSize: 2 },
  { date: "2022-01-11", boxSize: 2 },
  { date: "2022-01-12", boxSize: 2 },
  { date: "2022-01-13", boxSize: 2 },
  { date: "2022-01-14", boxSize: 2 },
  { date: "2022-01-15", boxSize: 2 }
];

const KagiChartComponent = () => {
  return (
    <div>
      {/* Render the Kagi chart */}
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="boxSize" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default KagiChartComponent;
