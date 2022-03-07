import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '2020 V.S 2021',
    }
  }
};

const labels = ['Fluency', 'Comprehension', 'Sentence Sructure', 'Pronunciation', 'Monolingualism'];

export default function LineBar(stats) {
  const statArrs = Object.values(stats)
  const data = {
    labels,
    datasets: [
      {
        label: '2020',
        data: Object.values(statArrs[0]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '2021 ',
        data: Object.values(statArrs[1]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}