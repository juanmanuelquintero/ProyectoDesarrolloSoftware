import axios from "axios";

export function Limpiar({
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
  setEmail,
  setDireccion,
  setContraseña,
}) {
  setNombre1("");
  setNombre2("");
  setApellido1("");
  setApellido2("");
  setTelefono1("");
  setTelefono2("");
  setEmail("");
  setDireccion("");
  setContraseña("");
}

export function Buscar({
  codigoE,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
  setEmail,
  setDireccion,
  setCargo,
  setContraseña,
}) {
  if (codigoE) {
    axios
      .get(`http://127.0.0.1:8000/api/empleados/${codigoE}`)
      .then((Response) => {
        const datos = Response.data;
        setNombre1(datos.nombre1);
        setNombre2(datos.nombre2 || "");
        setApellido1(datos.apellido1);
        setApellido2(datos.apellido2 || "");
        setTelefono1(datos.telefono1);
        setTelefono2(datos.telefono2 || "");
        setEmail(datos.email);
        setDireccion(datos.direccion);
        setCargo(datos.cargo_empleado);
        setContraseña(datos.contraseña);
        alert("Empleado encontrado");
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
    .get(`http://127.0.0.1:8000/api/empleados/`)
    .then((Response) => {
      setTabla(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
}

export function AñadirEmpleado({
  codigoE,
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  telefono1,
  telefono2,
  setTabla,
  email,
  direccion,
  cargo,
  contraseña,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
  setEmail,
  setDireccion,
  setContraseña,
}) {
  if (
    codigoE &&
    nombre1 &&
    apellido1 &&
    telefono1 &&
    email &&
    direccion &&
    cargo &&
    contraseña
  ) {
    axios
      .post(`http://127.0.0.1:8000/api/empleados/`, {
        id_empleado: codigoE,
        nombre1: nombre1,
        nombre2: nombre2,
        apellido1: apellido1,
        apellido2: apellido2,
        telefono1: telefono1,
        telefono2: telefono2,
        email: email,
        direccion: direccion,
        cargo_empleado: cargo,
        contraseña: contraseña,
      })
      .then(() => {
        alert("Empleado creado");
        Llenartabla({ setTabla });
        setNombre1("");
        setNombre2("");
        setApellido1("");
        setApellido2("");
        setTelefono1("");
        setTelefono2("");
        setEmail("");
        setDireccion("");
        setContraseña("");
      })
      .catch((error) => {
        console.error("Detalles del error:", error);
      });
  }
}

export function EliminarEmpleado({
  codigoE,
  setTabla,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
  setEmail,
  setDireccion,
  setContraseña,
}) {
  if (codigoE) {
    axios
      .delete(`http://127.0.0.1:8000/api/empleados/${codigoE}/`)
      .then(() => {
        alert("Empleado eliminado");
        Llenartabla({ setTabla });
        setNombre1("");
        setNombre2("");
        setApellido1("");
        setApellido2("");
        setTelefono1("");
        setTelefono2("");
        setEmail("");
        setDireccion("");
        setContraseña("");
      })
      .catch((Error) => {
        alert("error");
        console.log(Error);
      });
  }
}

export function ModificarEmpleado({
  codigoE,
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  telefono1,
  telefono2,
  setTabla,
  email,
  direccion,
  cargo,
  contraseña,
  setNombre1,
  setNombre2,
  setApellido1,
  setApellido2,
  setTelefono1,
  setTelefono2,
  setEmail,
  setDireccion,
  setContraseña,
}) {
  axios
    .patch(`http://127.0.0.1:8000/api/empleados/${codigoE}/`, {
      nombre1: nombre1,
      nombre2: nombre2,
      apellido1: apellido1,
      apellido2: apellido2,
      telefono1: telefono1,
      telefono2: telefono2,
      email: email,
      direccion: direccion,
      cargo_empleado: cargo,
      contraseña: contraseña,
    })
    .then(() => {
      alert("Empleado modificado");
      Llenartabla({ setTabla });
      setNombre1("");
      setNombre2("");
      setApellido1("");
      setApellido2("");
      setTelefono1("");
      setTelefono2("");
      setEmail("");
      setDireccion("");
      setContraseña("");
    })
    .catch((Error) => {
      console.log(Error);
      alert("error");
    });
}
