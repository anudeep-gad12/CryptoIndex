import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Charts = (props) => {
  const axesData = { labels: [], values: [] };
  const dataHistory = props.chartsData?.history;
  dataHistory?.forEach((value) => {
    axesData.values.push(value.price);
    axesData.labels.push(
      new Date(value.timestamp * 1000).toUTCString().split(",")[1].slice(1, 12)
    );
  });

  const data = {
    labels: axesData.labels.reverse(),
    datasets: [
      {
        label: "Price In USD",
        data: axesData.values.reverse(),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    responsive: true,
  };

  return <Line datasetIdKey="id" data={data} options={options} />;
};

export default Charts;
