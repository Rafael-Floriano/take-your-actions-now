import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ActionChart = () => {
  const data = {
    labels: ["05/11", "08/11", "14/11", "17/11", "23/11", "29/11", "02/12"],
    datasets: [
      {
        label: "Cotação (R$)",
        data: [35.46, 36.00, 37.50, 38.00, 38.50, 39.00, 39.64],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        pointBackgroundColor: "#FFD700",
        pointBorderColor: "#000",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) =>
            `R$ ${tooltipItem.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "#eaeaea",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ActionChart;
