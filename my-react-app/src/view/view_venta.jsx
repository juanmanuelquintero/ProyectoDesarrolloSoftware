import { useEffect, useState } from "react";
import axios from "axios";
import "./css/venta.css";
import { useLocation } from "react-router-dom";

function Venta() {
  const [codigo, setCodigo] = useState("");
  const [codigoCliente, setCodigoCliente] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [precioU, setPrecioU] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState("");
  const [lista1, setLista1] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [lista3, setLista3] = useState([]);
  const [deshabilitado, setDeshabilitado] = useState(true);
  const [IDventa, setIDventa] = useState(0);
  const { state } = useLocation();
  const { usuario } = state;

  useEffect(() => {
    TraerIDultimaVenta();
  }, []);

  useEffect(() => {
    if (lista3.length > 0) {
      const datos = lista3[lista3.length - 1];
      RegistrarDetalleP(datos);
    }
  }, [lista3]);

  useEffect(() => {
    const preciou = parseFloat(precioU || 0);
    const Cantidad = parseFloat(cantidad || 0);
    const resultado = Cantidad * preciou;

    setSubtotal(resultado.toFixed(2));
  }, [cantidad, precioU]);

  useEffect(() => {
    setTotal(
      lista2.reduce((acumular, valor) => acumular + parseFloat(valor), 0)
    );
  }, [lista2]);

  function Buscar() {
    if (codigo) {
      axios
        .get(`http://127.0.0.1:8000/api/productos/${codigo}`)
        .then((Response) => {
          const producto = Response.data;
          setLista1(producto.id_producto);
          setCantidad(1);
          setPrecioU(parseFloat(producto.precio_venta_cu));
        })
        .catch((Error) => {
          console.log(Error);
          alert("error");
        });
    } else {
      alert("llene los campos");
    }
  }

  function TraerIDultimaVenta() {
    axios
      .get(`http://127.0.0.1:8000/api/ventas/?usar_max_id=1/`)
      .then((Response) => {
        const datos = Response.data[0];
        setIDventa(datos.id_venta + 1);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  function RegistrarDetalleP(datos) {
    axios
      .post(`http://127.0.0.1:8000/api/detalleVenta/`, {
        id_venta: datos.id_venta,
        id_producto: datos.id_producto,
        cantidad: datos.cantidad,
        subtotal: datos.subtotal,
      })
      .then(() => {
        alert("Producto agregado");
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  function Registrar() {
    axios
      .post("http://127.0.0.1:8000/api/ventas/", {
        id_cliente: codigoCliente,
        id_empleado: usuario.codigo,
        total_venta: total,
      })
      .then(() => {
        alert("venta realizada");
        TraerIDultimaVenta();
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  function Añadir() {
    if (codigo && codigoCliente) {
      const productoCantidad = {
        id_producto: lista1,
        id_venta: IDventa,
        cantidad: parseFloat(cantidad),
        subtotal: subtotal,
      };
      setDeshabilitado(false);
      setLista2([...lista2, subtotal]);
      setLista3([...lista3, productoCantidad]);
      setCodigo("");
      setCantidad(0);
      setPrecioU("");
    } else {
      alert("llene todos los campos");
    }
  }

  return (
    <div
      className="contenedor1Venta"
      style={{ position: "absolute", top: "5%", left: "15%" }}
    >
      <input
        placeholder="Codigo Cliente"
        className="inputVenta"
        value={codigoCliente}
        onChange={(e) => setCodigoCliente(e.target.value)}
        type="number"
        style={{ position: "absolute", top: "8%", left: "2%" }}
      ></input>
      <input
        className="inputVenta"
        type="number"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Codigo"
        style={{ position: "absolute", top: "23%", left: "2%" }}
      />
      <input
        className="inputVenta"
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        placeholder="Cantidad"
        style={{ position: "absolute", top: "38%", left: "2%" }}
      />
      <input
        className="inputVenta"
        type="number"
        value={precioU}
        onChange={(e) => setPrecioU(e.target.value)}
        placeholder="Precio U"
        style={{ position: "absolute", top: "53%", left: "2%" }}
      />
      <input
        className="inputVenta"
        type="number"
        value={subtotal}
        readOnly
        placeholder="Subtotal"
        style={{ position: "absolute", top: "68%", left: "2%" }}
      />
      <input
        className="inputVenta"
        type="number"
        value={total}
        readOnly
        placeholder="Total Compra"
        style={{ position: "absolute", top: "64%", left: "66%" }}
      />
      <input
        className="input2Venta"
        value={IDventa || 0}
        readOnly
        style={{ position: "absolute", top: "8%", left: "40%" }}
      />
      <button
        onClick={Registrar}
        disabled={deshabilitado}
        className="botonVenta"
        style={{
          position: "absolute",
          top: "80%",
          left: "70%",
          backgroundColor: "rgba(110, 255, 62, 0.68)",
          border: "rgb(64, 255, 0) 4px solid",
        }}
      >
        Registrar
      </button>
      <button
        className="botonVenta"
        onClick={Buscar}
        style={{
          position: "absolute",
          top: "8%",
          left: "25%",
          backgroundColor: "rgba(100, 100, 100, 0.59)",
          border: "rgb(35, 35, 35) 4px solid",
        }}
      >
        Buscar
      </button>
      <button
        className="botonVenta"
        onClick={Añadir}
        style={{
          position: "absolute",
          top: "68%",
          left: "25%",
          backgroundColor: "rgba(72, 228, 255, 0.65)",
          border: "rgb(0, 217, 255) 4px solid",
        }}
      >
        Añadir
      </button>
      <img
        className="imagenRefrescar"
        src="./actualizar.png"
        style={{
          position: "absolute",
          top: "11%",
          left: "78%",
          width: "40px",
          height: "40px",
        }}
      />
      <div
        className="tablaVenta-container"
        style={{ position: "absolute", top: "25%", left: "25%" }}
      >
        <table className="tablaVenta">
          <thead>
            <tr>
              <th>ID producto</th>
              <th>ID venta</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {lista3.map((productos, index) => (
              <tr key={index}>
                <td>{productos.id_producto}</td>
                <td>{productos.id_venta}</td>
                <td>{productos.cantidad}</td>
                <td>{productos.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Venta;
