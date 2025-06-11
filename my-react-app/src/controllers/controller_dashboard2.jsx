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

export default function GraficoDetalleVentas() {
  const [ProductoMasVendido, setProductoMasVendido] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/detalleVenta/")
      .then((res) => {
        const ventas = res.data;

        // Agrupar por id_empleado
        const conteo = {};
        ventas.forEach((v) => {
          const id = v.id_producto;
          conteo[id] = (conteo[id] || 0) + 1;
        });

        setProductoMasVendido(conteo);
      })
      .catch((err) => console.error("Error cargando Productos:", err));
  }, []);

  const labels = Object.keys(ProductoMasVendido);
  const data = {
    labels,
    datasets: [
      {
        label: "Producto mas vendido",
        data: Object.values(ProductoMasVendido),
        backgroundColor: "rgba(227, 183, 137, 0.9)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Productos" },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
