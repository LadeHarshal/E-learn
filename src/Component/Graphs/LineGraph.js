import { Chart } from "chart.js/auto";
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import "./LineGraph.css";

const LinearGraph = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Line Graph",
        data: data.lineValues,
        fill: false,
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(0, 128, 128, 0.2)", // Light Aqua color for the fill
        borderColor: "rgba(0, 128, 128, 1)",
        pointBackgroundColor: "rgba(0, 128, 128, 1)",
        pointBorderColor: "rgba(255, 255, 255, 1)",
        pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
        pointHoverBorderColor: "rgba(0, 128, 128, 1)",
        tension: 0.1,
      },
      {
        label: "Bar Graph",
        data: data.barValues,
        backgroundColor: "rgba(0, 128, 128, 0.5)",
        borderColor: "rgba(0, 128, 128, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        grid: {
          color: "rgba(0, 128, 128, 0.1)",
        },
        ticks: {
          stepSize: 1, // Set stepSize to 1 to display only whole numbers
        },
      },
      y1: {
        type: "linear",
        beginAtZero: true,
        grid: {
          color: "rgba(0, 128, 128, 0.1)",
        },
      },
      y2: {
        type: "linear",
        beginAtZero: true,
        position: "right",
        grid: {
          color: "rgba(0, 128, 128, 0.1)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="GraphDiv">
      <h2 style={{ color: "rgba(0, 128, 128, 1)" }}>Combined Graph</h2>
      <Line
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default LinearGraph;
