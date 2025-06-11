import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GraficoVentas() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ventas/")
      .then((res) => setVentas(res.data))
      .catch((err) => console.error("Error cargando ventas:", err));
  }, []);

  // Extraer etiquetas (meses) y valores (totales) del backend
  const labels = ventas.map((v) => v.id_empleado);
  const data = {
    labels,
    datasets: [
      {
        label: "Total Ventas",
        data: ventas.map((v) => v.total_venta),
        backgroundColor: "rgb(227, 183, 137)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Ventas" },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
