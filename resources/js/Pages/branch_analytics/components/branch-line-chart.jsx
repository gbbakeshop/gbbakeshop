import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Daily Chart Analytics',
    },
  },
};



export function BranchLineChart({datas}) {

  const labels = datas?.sales?.map(res=>res.label);

   const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: datas?.sales?.map(res=>res.total_sales),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Expenses',
        data:datas?.expenses?.map(res=>res.total_expenses),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
          label: 'Charges',
          data: datas?.charges?.map(res=>res.total_charge),
          borderColor: 'rgb(0, 230, 0)',
          backgroundColor: 'rgb(153, 255, 153)',
        },
    ],
  };
  return <Line options={options} data={data} />;
}