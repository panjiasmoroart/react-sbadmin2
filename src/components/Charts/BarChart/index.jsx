import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [4215, 5312, 6251, 7841, 9821, 14984],
        borderWidth: 1,
        barPercentage: 0.5, // lebar bar (0 - 1)
        categoryPercentage: 0.7, // jarak antar bar dalam satu kategori
        maxBarThickness: 50, // maksimal lebar bar (px)
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Monthly Revenue" },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        min: 0,
        max: 15000,
        ticks: {
          stepSize: 5000,
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="chart-bar">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
