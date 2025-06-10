import axios from "axios";

export function BotonAñadir({
  setDeshabilitado5,
  setDeshabilitado4,
  setDeshabilitado,
  deshabilitado5,
  deshabilitado4,
  deshabilitado,
}) {
  setDeshabilitado5(!deshabilitado5);
  setDeshabilitado4(!deshabilitado4);
  setDeshabilitado(!deshabilitado);
}

export function Normalidad({
  setDeshabilitado,
  setDeshabilitado2,
  setDeshabilitado3,
  setDeshabilitado4,
  setDeshabilitado5,
  setNombre,
  setDescripcion,
  setPrecio_C,
  setPrecio_V,
  setMarca,
  setCategoria,
  setStock,
  setCodigo,
}) {
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

export function Llenartabla({ setDatosT }) {
  axios
    .get("http://127.0.0.1:8000/api/productos/")
    .then((Response) => {
      setDatosT(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
}

export function Buscar({
  Codigo,
  setDeshabilitado3,
  setDeshabilitado4,
  setDeshabilitado,
  setDeshabilitado2,
  setNombre,
  setDescripcion,
  setPrecio_C,
  setPrecio_V,
  setMarca,
  setCategoria,
  setStock,
  deshabilitado3,
  deshabilitado4,
  deshabilitado,
  deshabilitado2,
}) {
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

export function Añadir({
  Codigo,
  Nombre,
  Descripcion,
  Precio_C,
  Precio_V,
  Marca,
  Categoria,
  Ganancia,
  Stock,
  setDeshabilitado,
  setDeshabilitado2,
  setDeshabilitado4,
  setDeshabilitado5,
  setNombre,
  setDescripcion,
  setPrecio_C,
  setPrecio_V,
  setMarca,
  setCategoria,
  setStock,
  setCodigo,
  setDatosT,
}) {
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
        Llenartabla({ setDatosT });
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

export function Eliminar({
  Codigo,
  setDeshabilitado,
  setDeshabilitado2,
  setDeshabilitado4,
  setDeshabilitado3,
  setNombre,
  setDescripcion,
  setPrecio_C,
  setPrecio_V,
  setMarca,
  setCategoria,
  setStock,
  setCodigo,
  setDatosT,
  deshabilitado3,
  deshabilitado4,
  deshabilitado,
  deshabilitado2,
}) {
  if (Codigo) {
    axios
      .delete(`http://127.0.0.1:8000/api/productos/${Codigo}/`)
      .then(() => {
        alert("producto eliminado");
        Llenartabla({ setDatosT });
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

export function Actualizar({
  Codigo,
  Nombre,
  Descripcion,
  Precio_C,
  Precio_V,
  Marca,
  Categoria,
  Ganancia,
  Stock,
  setDeshabilitado,
  setDeshabilitado2,
  setDeshabilitado4,
  setDeshabilitado3,
  setNombre,
  setDescripcion,
  setPrecio_C,
  setPrecio_V,
  setMarca,
  setCategoria,
  setStock,
  setCodigo,
  setDatosT,
  deshabilitado3,
  deshabilitado4,
  deshabilitado,
  deshabilitado2,
}) {
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
        Llenartabla({ setDatosT });
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
