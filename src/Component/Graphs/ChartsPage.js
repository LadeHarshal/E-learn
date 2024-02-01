// ChartsPage.js
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./ChartsPage.css";
import { Chart } from "chart.js/auto";
const ChartsPage = () => {
  // Sample data for charts
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Minutes Watched",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 60, 70],
      },
    ],
  };

  const pieChartData = {
    labels: ["HTML", "CSS", "CPP", "Python", "C#", "UI-UX"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9966FF",
          "#FFA07A",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9966FF",
          "#FFA07A",
        ],
      },
    ],
  };

  return (
    <div className="ChartsPage">
      <h2>Data of your Activity</h2>
      <div className="graphs-div">
        <div className="bar-graph">
          <Bar data={barChartData} />
        </div>
        <div className="pie-chart">
          {/* <h2>Pie Chart</h2> */}
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
