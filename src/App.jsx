import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import Chart from "react-apexcharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels: ["senin", "selasa", "rabu"],
    datasets: [
      {
        label: "Laba",
        data: [8000, 9000, 10000],
        backgroundColor: "red",
      },
    ],
  };

  const dataPie = {
    labels: ["paslon 1", "paslon 2", "paslon 3", "paslon 100"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 10, 10, 50],
        backgroundColor: ["red", "green", "blue", "yellow"],
        borderColor: ["grey"],
        borderWidth: 1,
      },
    ],
  };

  const dataLine = {
    labels: ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"],
    datasets: [
      {
        label: "Laba harian",
        data: [10000, 9000, 8000, 20000, 9000, 15000, 0],
        borderColor: "blue",
        backgroundColor: "red",
      },
    ],
  };

  const chartOptions = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div>
      <h1>Vertical Chart</h1>
      <Bar options={options} data={data}></Bar>
      <h1>Pie Chart</h1>
      <Pie data={dataPie}></Pie>
      <h1>Line Chart</h1>
      <Line options={options} data={dataLine}></Line>
      <h1>Bar Chart from APEX</h1>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        width="500"
      ></Chart>
    </div>
  );
};

export default App;
