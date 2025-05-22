import { useState, useEffect } from "react";
import axios from "axios";
import "./inventario.css";
import { useNavigate } from "react-router-dom";

function Inventario() {
  const [Codigo, setCodigo] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Precio_C, setPrecio_C] = useState("");
  const [Precio_V, setPrecio_V] = useState("");
  const [Ganancia, setGanancia] = useState("");
  const [Marca, setMarca] = useState("");
  const [Categoria, setCategoria] = useState("");
  const [Stock, setStock] = useState("");
  const [deshabilitado, setDeshabilitado] = useState(true);
  const [deshabilitado2, setDeshabilitado2] = useState(false);
  const [deshabilitado3, setDeshabilitado3] = useState(true);
  const [deshabilitado4, setDeshabilitado4] = useState(false);
  const [deshabilitado5, setDeshabilitado5] = useState(true);
  const [datosT, setDatosT] = useState([]);

  useEffect(() => {
    const Pcompra = parseFloat(Precio_C || 0);
    const Pventa = parseFloat(Precio_V || 0);
    const resultado = Pventa - Pcompra;
    setGanancia(resultado.toFixed(2));
  }, [Precio_C, Precio_V]);

  useEffect(() => {
    Llenartabla();
  }, []);

  function BotonAñadir() {
    setDeshabilitado5(!deshabilitado5);
    setDeshabilitado4(!deshabilitado4);
    setDeshabilitado(!deshabilitado);
  }

  function Normalidad() {
    setDeshabilitado(true);
    setDeshabilitado2(false);
    setDeshabilitado3(true);
    setDeshabilitado4(false);
    setDeshabilitado5(true);
    setNombre("");
    setDescripcion("");
    setPrecio_C("");
    setPrecio_V("");
    setMarca("");
    setCategoria("");
    setStock("");
    setCodigo("");
  }

  function Llenartabla() {
    axios
      .get("http://127.0.0.1:8000/api/productos/")
      .then((Response) => {
        setDatosT(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  function Buscar() {
    if (Codigo) {
      axios
        .get(`http://127.0.0.1:8000/api/productos/?id_producto=${Codigo}`)
        .then((Response) => {
          const Producto = Response.data[0];
          setDeshabilitado3(!deshabilitado3);
          setDeshabilitado4(!deshabilitado4);
          setDeshabilitado(!deshabilitado);
          setDeshabilitado2(!deshabilitado2);
          setNombre(Producto.nombre);
          setDescripcion(Producto.descripcion);
          setPrecio_C(Producto.precio_compra_cu);
          setPrecio_V(Producto.precio_venta_cu);
          setMarca(Producto.marca);
          setCategoria(Producto.categoria);
          setStock(Producto.stock);
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else {
      alert("codigo de producto no encontrado");
    }
  }

  function Añadir() {
    if (
      Codigo &&
      Nombre &&
      Descripcion &&
      Precio_C &&
      Precio_V &&
      Marca &&
      Categoria &&
      Stock
    ) {
      axios
        .post(`http://127.0.0.1:8000/api/productos/`, {
          id_producto: Codigo,
          nombre: Nombre,
          descripcion: Descripcion,
          precio_compra_cu: Precio_C,
          precio_venta_cu: Precio_V,
          ganancia: Ganancia,
          marca: Marca,
          categoria: Categoria,
          stock: Stock,
        })
        .then(() => {
          alert("producto agregado con exito");
          Llenartabla();
          setDeshabilitado(true);
          setDeshabilitado2(false);
          setDeshabilitado4(false);
          setDeshabilitado5(true);
          setNombre("");
          setDescripcion("");
          setPrecio_C("");
          setPrecio_V("");
          setMarca("");
          setCategoria("");
          setStock("");
          setCodigo("");
        })
        .catch((Error) => {
          console.log(Error);
          alert("error");
        });
    } else {
      alert("llene todos los campos");
    }
  }

  function Eliminar() {
    if (Codigo) {
      axios
        .delete(`http://127.0.0.1:8000/api/productos/${Codigo}/`)
        .then(() => {
          alert("producto eliminado");
          Llenartabla();
          setDeshabilitado3(!deshabilitado3);
          setDeshabilitado4(!deshabilitado4);
          setDeshabilitado(!deshabilitado);
          setDeshabilitado2(!deshabilitado2);
          setNombre("");
          setDescripcion("");
          setPrecio_C("");
          setPrecio_V("");
          setMarca("");
          setCategoria("");
          setStock("");
          setCodigo("");
        })
        .catch((Error) => {
          console.log(Error);
          alert("error");
        });
    } else {
      alert("codigo no encontrado");
    }
  }

  function Actualizar() {
    if (
      Codigo &&
      Nombre &&
      Descripcion &&
      Precio_C &&
      Precio_V &&
      Marca &&
      Categoria &&
      Stock
    ) {
      axios
        .patch(`http://127.0.0.1:8000/api/productos/${Codigo}/`, {
          nombre: Nombre,
          descripcion: Descripcion,
          precio_compra_cu: Precio_C,
          precio_venta_cu: Precio_V,
          ganancia: Ganancia,
          marca: Marca,
          categoria: Categoria,
          stock: Stock,
        })
        .then(() => {
          alert("producto actualizado con exito");
          Llenartabla();
          setDeshabilitado3(!deshabilitado3);
          setDeshabilitado4(!deshabilitado4);
          setDeshabilitado(!deshabilitado);
          setDeshabilitado2(!deshabilitado2);
          setNombre("");
          setDescripcion("");
          setPrecio_C("");
          setPrecio_V("");
          setMarca("");
          setCategoria("");
          setStock("");
          setCodigo("");
        })
        .catch((Error) => {
          console.log(Error);
          alert("error");
        });
    } else {
      alert("llene todos los campos");
    }
  }

  return (
    <div
      className="contenedor1Inventario"
      style={{ position: "absolute", top: "5%", left: "15%" }}
    >
      <input
        className="inputInventario"
        type="number"
        disabled={deshabilitado2}
        value={Codigo}
        placeholder="Codigo"
        onChange={(e) => setCodigo(e.target.value)}
        style={{ position: "absolute", top: "8%", left: "2%" }}
      />
      <input
        className="inputInventario"
        disabled={deshabilitado}
        value={Nombre}
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}
        style={{ position: "absolute", top: "23%", left: "2%" }}
      />
      <input
        className="inputInventario"
        disabled={deshabilitado}
        value={Descripcion}
        placeholder="Descripcion"
        onChange={(e) => setDescripcion(e.target.value)}
        style={{ position: "absolute", top: "38%", left: "2%" }}
      />
      <input
        className="inputInventario"
        type="number"
        disabled={deshabilitado}
        value={Precio_C}
        placeholder="Precio C"
        onChange={(e) => setPrecio_C(e.target.value)}
        style={{ position: "absolute", top: "68%", left: "2%" }}
      />
      <input
        className="inputInventario"
        type="number"
        disabled={deshabilitado}
        value={Precio_V}
        placeholder="Precio V"
        onChange={(e) => setPrecio_V(e.target.value)}
        style={{ position: "absolute", top: "53%", left: "2%" }}
      />
      <input
        className="inputInventario"
        value={Ganancia}
        placeholder="Ganancia"
        readOnly
        style={{ position: "absolute", top: "8%", left: "25%" }}
      />
      <input
        className="inputInventario"
        disabled={deshabilitado}
        value={Marca}
        placeholder="Marca"
        onChange={(e) => setMarca(e.target.value)}
        style={{ position: "absolute", top: "23%", left: "25%" }}
      />
      <input
        className="inputInventario"
        disabled={deshabilitado}
        value={Categoria}
        placeholder="Categoria"
        onChange={(e) => setCategoria(e.target.value)}
        style={{ position: "absolute", top: "38%", left: "25%" }}
      />
      <input
        className="inputInventario"
        type="number"
        disabled={deshabilitado}
        value={Stock}
        placeholder="Stock"
        onChange={(e) => setStock(e.target.value)}
        style={{ position: "absolute", top: "53%", left: "25%" }}
      />
      <button
        className="botonInventario"
        onClick={BotonAñadir}
        disabled={deshabilitado4}
        style={{
          position: "absolute",
          top: "10%",
          left: "55%",
          backgroundColor: "rgba(110, 255, 62, 0.68)",
          border: "rgb(64, 255, 0) 4px solid",
        }}
      >
        Nuevo
      </button>
      <button
        className={deshabilitado5 ? "none" : "botonInventario"}
        onClick={Añadir}
        style={{
          position: "absolute",
          top: "10%",
          left: "65%",
          backgroundColor: "rgba(255, 138, 251, 0.67)",
          border: "rgb(255, 0, 247) 4px solid",
        }}
      >
        Añadir
      </button>
      <button
        className="botonInventario"
        disabled={deshabilitado4}
        onClick={Buscar}
        style={{
          position: "absolute",
          top: "20%",
          left: "55%",
          backgroundColor: "rgba(100, 100, 100, 0.59)",
          border: "rgb(35, 35, 35) 4px solid",
        }}
      >
        Buscar
      </button>
      <button
        className="botonInventario"
        disabled={deshabilitado3}
        onClick={Actualizar}
        style={{
          position: "absolute",
          top: "30%",
          left: "55%",
          backgroundColor: "rgba(72, 228, 255, 0.65)",
          border: "rgb(0, 217, 255) 4px solid",
        }}
      >
        Modificar
      </button>
      <button
        className="botonInventario"
        disabled={deshabilitado3}
        onClick={Eliminar}
        style={{
          position: "absolute",
          top: "40%",
          left: "55%",
          backgroundColor: "rgba(255, 80, 80, 0.63)",
          border: "rgb(255, 0, 0) 4px solid",
        }}
      >
        Eliminar
      </button>
      <img
        className="imagenRefrescar"
        src="./actualizar.png"
        onClick={Normalidad}
        style={{
          position: "absolute",
          top: "11%",
          left: "78%",
          width: "40px",
          height: "40px",
        }}
      />
      <div
        className="tablaInventario-container"
        style={{ position: "absolute", top: "65%", left: "25%" }}
      >
        <table className="tablaInventario">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio Compra</th>
              <th>Precio Venta</th>
              <th>Ganancia</th>
              <th>Marca</th>
              <th>Categoria</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {datosT.map((productos, index) => (
              <tr key={index}>
                <td>{productos.id_producto}</td>
                <td>{productos.nombre}</td>
                <td>{productos.descripcion}</td>
                <td>{productos.precio_compra_cu}</td>
                <td>{productos.precio_venta_cu}</td>
                <td>{productos.ganancia}</td>
                <td>{productos.marca}</td>
                <td>{productos.categoria}</td>
                <td>{productos.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventario;
