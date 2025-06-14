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
  const [ventasPorEmpleado, setVentasPorEmpleado] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ventas/")
      .then((res) => {
        const ventas = res.data;

        // Agrupar por id_empleado
        const conteo = {};
        ventas.forEach((v) => {
          const id = v.id_empleado;
          conteo[id] = (conteo[id] || 0) + 1;
        });

        setVentasPorEmpleado(conteo);
      })
      .catch((err) => console.error("Error cargando ventas:", err));
  }, []);

  const labels = Object.keys(ventasPorEmpleado);
  const data = {
    labels,
    datasets: [
      {
        label: "Cantidad de ventas por empleado",
        data: Object.values(ventasPorEmpleado),
        backgroundColor: "rgba(227, 183, 137, 0.9)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Ventas por Empleado" },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
