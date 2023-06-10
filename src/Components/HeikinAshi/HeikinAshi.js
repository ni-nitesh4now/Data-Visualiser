import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { "date": "2022-01-01", "open": 100, "high": 150, "low": 80, "close": 120 },
  { "date": "2022-01-02", "open": 120, "high": 180, "low": 100, "close": 140 },
  { "date": "2022-01-03", "open": 140, "high": 200, "low": 110, "close": 160 },
  { "date": "2022-01-04", "open": 160, "high": 220, "low": 130, "close": 180 },
  { "date": "2022-01-05", "open": 180, "high": 240, "low": 150, "close": 200 },
  { "date": "2022-01-06", "open": 200, "high": 260, "low": 170, "close": 220 },
  { "date": "2022-01-07", "open": 220, "high": 280, "low": 190, "close": 240 },
  { "date": "2022-01-08", "open": 240, "high": 300, "low": 210, "close": 260 },
  { "date": "2022-01-09", "open": 260, "high": 320, "low": 230, "close": 280 },
  { "date": "2022-01-10", "open": 280, "high": 340, "low": 250, "close": 300 },
  { "date": "2022-01-11", "open": 300, "high": 360, "low": 270, "close": 320 },
  { "date": "2022-01-12", "open": 320, "high": 380, "low": 290, "close": 340 },
  { "date": "2022-01-13", "open": 340, "high": 400, "low": 310, "close": 360 },
  { "date": "2022-01-14", "open": 360, "high": 420, "low": 330, "close": 380 },
  { "date": "2022-01-15", "open": 380, "high": 440, "low": 350, "close": 400 }
]

const HeikinAshiChartComponent = () => {
  return (
    <div>
      {/* Render the HeikinAshi chart */}
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="open" stroke="#8884d8" />
        <Line type="monotone" dataKey="close" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default HeikinAshiChartComponent;

