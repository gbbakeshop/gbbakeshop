import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Daily Bar Chart Analytics',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: [20,50,20],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Breadout',
      data: [20,50,20],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'Charges',
        data: [30,60,30],
        borderColor: 'rgb(0, 230, 0)',
        backgroundColor: 'rgb(153, 255, 153)',
      },
  ],
};

export function BranchBarChart() {
  return <Bar options={options} data={data} />;
}