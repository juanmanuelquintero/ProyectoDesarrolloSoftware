import axios from "axios";

export function Buscar({ codigo, setLista1, setCantidad, setPrecioU }) {
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

export function TraerIDultimaVenta({ setIDventa }) {
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

export function RegistrarDetalleP({ datos }) {
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

export function Registrar({
  codigoCliente,
  codigo,
  usuario,
  total,
  setIDventa,
  setLista3,
}) {
  axios
    .post("http://127.0.0.1:8000/api/ventas/", {
      id_cliente: codigoCliente,
      id_empleado: usuario.codigo,
      total_venta: total,
    })
    .then(() => {
      alert("venta realizada");
      TraerIDultimaVenta({ setIDventa });

      setLista3([]);
    })
    .catch((Error) => {
      console.log(Error);
    });
}

export function Añadir({
  codigo,
  codigoCliente,
  lista1,
  IDventa,
  cantidad,
  subtotal,
  setDeshabilitado,
  setLista2,
  setLista3,
  setCodigo,
  setCantidad,
  setPrecioU,
  lista2,
  lista3,
}) {
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
