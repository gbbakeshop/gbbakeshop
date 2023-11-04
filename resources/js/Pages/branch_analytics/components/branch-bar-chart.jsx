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



export function BranchBarChart({datas}) {

  const labels = datas?.sales?.map(res=>res.label);

  const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data:datas?.sales?.map(res=>res.total_sales),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Expenses',
        data: datas?.expenses?.map(res=>res.total_expenses),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
          label: 'Charges',
          data:  datas?.charges?.map(res=>res.total_charge),
          borderColor: 'rgb(0, 230, 0)',
          backgroundColor: 'rgb(153, 255, 153)',
        },
    ],
  };
  return <Bar options={options} data={data} />;
}