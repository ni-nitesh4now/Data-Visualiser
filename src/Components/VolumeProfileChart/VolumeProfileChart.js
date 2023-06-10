import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const volumeProfileChartData = [
  { price: 100, volume: 200 },
  { price: 110, volume: 300 },
  { price: 120, volume: 250 },
  { price: 130, volume: 400 },
  { price: 140, volume: 350 },
  { price: 150, volume: 500 },
  { price: 160, volume: 450 },
  { price: 170, volume: 600 },
  { price: 180, volume: 550 },
  { price: 190, volume: 700 },
  { price: 200, volume: 650 },
  { price: 210, volume: 800 },
  { price: 220, volume: 750 },
  { price: 230, volume: 900 },
  { price: 240, volume: 850 }
];

const VolumeProfileChartComponent = () => {
  return (
    <AreaChart width={500} height={300} data={volumeProfileChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="price" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="volume" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default VolumeProfileChartComponent;
