import React, { useEffect, useState } from "react";
import "./css/cliente.css";
import {
  Buscar,
  AñadirCliente,
  Llenartabla,
  EliminarCliente,
  ModificarCliente,
} from "../controllers/controller_cliente";

function Cliente() {
  const [codigoE, setCodigoE] = useState("");
  const [nombre1, setNombre1] = useState("");
  const [nombre2, setNombre2] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [telefono1, setTelefono1] = useState("");
  const [telefono2, setTelefono2] = useState("");
  const [tabla, setTabla] = useState([]);

  useEffect(() => {
    Llenartabla({ setTabla });
  }, []);

  return (
    <div
      className="contenedor1Cliente"
      style={{ position: "absolute", top: "5%", left: "15%" }}
    >
      <input
        className="inputCliente"
        value={codigoE}
        onChange={(e) => setCodigoE(e.target.value)}
        type="number"
        placeholder="Codigo Empleado"
        style={{ position: "absolute", top: "8%", left: "2%" }}
      />
      <input
        className="inputCliente"
        value={nombre1}
        onChange={(e) => setNombre1(e.target.value)}
        placeholder="Nombre 1"
        style={{ position: "absolute", top: "23%", left: "2%" }}
      />
      <input
        className="inputCliente"
        value={nombre2}
        onChange={(e) => setNombre2(e.target.value)}
        placeholder="Nombre 2"
        style={{ position: "absolute", top: "38%", left: "2%" }}
      />
      <input
        className="inputCliente"
        value={apellido1}
        onChange={(e) => setApellido1(e.target.value)}
        placeholder="Apellido 1"
        style={{ position: "absolute", top: "53%", left: "2%" }}
      />
      <input
        className="inputCliente"
        value={apellido2}
        onChange={(e) => setApellido2(e.target.value)}
        placeholder="Apellido 2"
        style={{ position: "absolute", top: "68%", left: "2%" }}
      />
      <input
        type="number"
        className="inputCliente"
        value={telefono1}
        onChange={(e) => setTelefono1(e.target.value)}
        placeholder="Telefono 1"
        style={{ position: "absolute", top: "8%", left: "25%" }}
      />
      <input
        type="number"
        className="inputCliente"
        value={telefono2}
        onChange={(e) => setTelefono2(e.target.value)}
        placeholder="Telefono 2"
        style={{ position: "absolute", top: "23%", left: "25%" }}
      />
      <button
        className="botonCliente"
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
        onClick={() => {
          AñadirCliente({
            codigoE,
            nombre1,
            nombre2,
            apellido1,
            apellido2,
            telefono1,
            telefono2,
            setTabla,
          });
        }}
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
        className="botonCliente"
        onClick={() => {
          Buscar({
            codigoE,
            setNombre1,
            setNombre2,
            setApellido1,
            setApellido2,
            setTelefono1,
            setTelefono2,
          });
        }}
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
        onClick={() => {
          ModificarCliente({
            codigoE,
            nombre1,
            nombre2,
            apellido1,
            apellido2,
            telefono1,
            telefono2,
            setTabla,
          });
        }}
        className="botonCliente"
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
        onClick={() => {
          EliminarCliente({ codigoE });
        }}
        className="botonCliente"
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
        style={{
          position: "absolute",
          top: "11%",
          left: "78%",
          width: "40px",
          height: "40px",
        }}
      />
      <div
        className="tablaCliente-container"
        style={{ position: "absolute", top: "65%", left: "25%" }}
      >
        <table className="tablaCliente">
          <thead>
            <tr>
              <th>Codigo Empleado</th>
              <th>Nombre 1</th>
              <th>Nombre 2</th>
              <th>Apellido 1</th>
              <th>Apellido 2</th>
              <th>Telefono 1</th>
              <th>Telefono 2</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((item, index) => (
              <tr key={index}>
                <td>{item.id_cliente}</td>
                <td>{item.nombre1}</td>
                <td>{item.nombre2}</td>
                <td>{item.apellido1}</td>
                <td>{item.apellido2}</td>
                <td>{item.telefono1}</td>
                <td>{item.telefono2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cliente;
