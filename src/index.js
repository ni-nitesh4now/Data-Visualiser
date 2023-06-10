import React from "react";
import { createRoot } from 'react-dom';
import './style.css'; // Import the CSS file for styling

// Import chart components
import AreaChartComponent from './Components/AreaChart/AreaChart';
import BarChartComponent from './Components/BarChart/BarChart';
import StackedBarChartComponent from './Components/StackedBarChart/StackedBarChart';
import HorizontalBarChartComponent from './Components/HorizontalBarChart/HorizontalBarChart';
import GroupedBarChartComponent from './Components/GroupedBarChart/GroupedBarChart';
import BubbleChartComponent from './Components/BubbleChart/BubbleChart';
import VolumeProfileChartComponent from './Components/VolumeProfileChart/VolumeProfileChart';
import KagiChartComponent from './Components/Kagi/Kagi';
import HeikinAshiChartComponent from './Components/HeikinAshi/HeikinAshi';
import LineAndScatterChartComponent from "./Components/LineAndScatterChart/LineAndScatterChart";
const App = () => {
  return (
    <div className="container">
      <div className="column">
        <h2>Area Chart</h2>
        <AreaChartComponent />
        <h2>Bar Chart</h2>
        <BarChartComponent />
        <h2>Stacked Bar Chart</h2>
        <StackedBarChartComponent />
      </div>
      <div className="column">
        <h2>Horizontal Bar Chart</h2>
        <HorizontalBarChartComponent />
        <h2>Grouped Bar Chart</h2>
        <GroupedBarChartComponent />
        <h2>Bubble Chart</h2>
        <BubbleChartComponent />
        <h2> Line and Scatter Chart</h2>
        <LineAndScatterChartComponent />
      </div>
      <div className="column">
        <h2>Volume Profile Chart</h2>
        <VolumeProfileChartComponent />
        <h2>Heikin Ashi Chart</h2>
        <HeikinAshiChartComponent />
        <h2>Kagi Chart</h2>
        <KagiChartComponent />
      </div>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);