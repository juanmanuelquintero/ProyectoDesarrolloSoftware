import axios from "axios";

export function Limpiar({
  setCodigoE,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
}) {
  setCodigoE("");
  setNombre1("");
  setNombre2("");
  setApellido1("");
  setApellido2("");
  setTelefono1("");
  setTelefono2("");
}

export function Buscar({
  codigoE,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
}) {
  if (codigoE) {
    axios
      .get(`http://127.0.0.1:8000/api/cliente/${codigoE}`)
      .then((Response) => {
        const datos = Response.data;
        setNombre1(datos.nombre1);
        setNombre2(datos.nombre2 || "");
        setApellido1(datos.apellido1);
        setApellido2(datos.apellido2 || "");
        setTelefono1(datos.telefono1);
        setTelefono2(datos.telefono2 || "");
        alert("cliente encontrado");
      })
      .catch((Error) => {
        console.log(Error);
      });
  } else {
    alert("llene los campos");
  }
}

export function Llenartabla({ setTabla }) {
  axios
    .get(`http://127.0.0.1:8000/api/cliente/`)
    .then((Response) => {
      setTabla(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
}

export function AñadirCliente({
  codigoE,
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  telefono1,
  telefono2,
  setTabla,
  setCodigoE,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
}) {
  if (codigoE && nombre1 && apellido1 && telefono1) {
    axios
      .post(`http://127.0.0.1:8000/api/cliente/`, {
        id_cliente: codigoE,
        nombre1: nombre1,
        nombre2: nombre2,
        apellido1: apellido1,
        apellido2: apellido2,
        telefono1: telefono1,
        telefono2: telefono2,
      })
      .then(() => {
        alert("cliente creado");
        Llenartabla({ setTabla });
        setCodigoE("");
        setNombre1("");
        setNombre2("");
        setApellido1("");
        setApellido2("");
        setTelefono1("");
        setTelefono2("");
      })
      .catch((Error) => {
        alert("error");
        console.log(Error);
      });
  }
}

export function EliminarCliente({
  codigoE,
  setTabla,
  setCodigoE,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
}) {
  if (codigoE) {
    axios
      .delete(`http://127.0.0.1:8000/api/cliente/${codigoE}/`)
      .then(() => {
        alert("cliente eliminado");
        Llenartabla({ setTabla });
        setCodigoE("");
        setNombre1("");
        setNombre2("");
        setApellido1("");
        setApellido2("");
        setTelefono1("");
        setTelefono2("");
      })
      .catch((Error) => {
        alert("error");
        console.log(Error);
      });
  }
}

export function ModificarCliente({
  codigoE,
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  telefono1,
  telefono2,
  setTabla,
  setCodigoE,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
}) {
  axios
    .patch(`http://127.0.0.1:8000/api/cliente/${codigoE}/`, {
      nombre1: nombre1,
      nombre2: nombre2,
      apellido1: apellido1,
      apellido2: apellido2,
      telefono1: telefono1,
      telefono2: telefono2,
    })
    .then(() => {
      alert("cliente modificado");
      Llenartabla({ setTabla });
      setCodigoE("");
      setNombre1("");
      setNombre2("");
      setApellido1("");
      setApellido2("");
      setTelefono1("");
      setTelefono2("");
    })
    .catch((Error) => {
      console.log(Error);
      alert("error");
    });
}
