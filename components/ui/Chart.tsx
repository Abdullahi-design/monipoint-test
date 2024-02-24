"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ['.', '.', '.', '.', '.', '.', '.', '.'],
    datasets: [
      {
        label: "chart",
        fill: true,
        tension: 0,
        borderWidth: 2,
        borderColor: 'rgba(255, 207, 34, 1)',
        radius: 3,
        hitRadius: 3,
        data: [0.1, 0.3, 0.6, 0.3, 0.1, 0.3, 0.6, 0.7],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      xAxis: {
        display: true,
      },
      yAxis: {
        display: true,
      },
    },
    maintainAspectRatio: false, // Adjusts the aspect ratio of the chart
  };

  return (
    <div className='bg-white shadow-lg rounded-lg' style={{ maxWidth: '500px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
