import React from "react";
import { Line } from "react-chartjs-2";
import { LoadingSpinner } from "../index";
import Chart from "chart.js/auto";

const Charts = (props) => {
  const axesData = { labels: [], values: [] };
  const dataHistory = props.chartsData?.history;

  if (!props.loadingState) {
    for (let i = 0; i < dataHistory?.length; i++) {
      if (dataHistory[i].price === null || dataHistory[i].timestamp === null)
        continue;
      axesData.values.push(dataHistory[i]?.price);
      axesData.labels.push(
        new Date(dataHistory[i]?.timestamp * 1000)
          .toUTCString()
          .split(",")[1]
          .slice(1, 12)
      );
    }
  }

  const data = {
    labels: axesData.labels
      .reverse()
      .filter((value, index) => (index % 5 === 0 ? value : "")),
    datasets: [
      {
        label: "Price In USD",
        data: axesData.values
          .reverse()
          .filter((value, index) => (index % 5 === 0 ? value : "")),
        fill: false,
        backgroundColor: "#4338ca",
        borderColor: "#4338ca",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        ticks: {
          autoSkip: true,
          beginAtZero: true,
          maxTicksLimit: 12,
          font: {
            size: "12%",
          },
        },
      },
      xAxes: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12,
          font: {
            size: "10%",
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      {props.loadingState ? (
        <div className="flex justify-center items-center h-[290px]">
          <LoadingSpinner />
        </div>
      ) : (
        <Line datasetIdKey="id" data={data} options={options} />
      )}
    </>
  );
};

export default Charts;
