import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./css/paginaPrincipal-Admin.css";
import { Navegar, NavegarV, Inf } from "../controllers/controller_pgAdmin";
import GraficoVentas from "../controllers/controller_dashboard";
import GraficoDetalleVentas from "../controllers/controller_dashboard2";

function Pg_principalAdmin() {
  const [inf, setInf] = useState(false);
  const { state } = useLocation();
  const { usuario } = state;
  const Titulo = "Pagina \nprincipal";
  const navigate = useNavigate();

  return (
    <div>
      <img
        src="./logo.png"
        className="imagenLogin"
        style={{ position: "absolute", top: "5%", left: "84%" }}
      />
      <pre
        className="labelPaginaPrincipal"
        style={{
          position: "absolute",
          top: "75%",
          left: "82%",
          fontSize: "50px",
          color: "rgb(146, 121, 90)",
        }}
      >
        {Titulo}
      </pre>
      <div
        className="contenedor1PaginaPrincipal"
        style={{ position: "absolute", top: "10%", left: "25%" }}
      >
        <div className="contenedor2PaginaPrincipal">
          <img
            src="./logoP.png"
            className="imagenPaginaPrincipal"
            style={{
              position: "absolute",
              top: "1%",
              left: "43%",
              width: "100px",
              height: "80px",
            }}
          />
          <label
            className="labelPaginaPrincipal"
            style={{
              position: "absolute",
              top: "5%",
              left: "5%",
              fontSize: "20px",
            }}
          >
            Perusoft
          </label>
          <div
            className={
              inf
                ? "contenedorINF-2PaginaPrincipal"
                : "contenedorINFPaginaPrincipal"
            }
          >
            <div className={inf ? "contenedor3PaginaPrincipal" : "none"}>
              <label
                className={inf ? "label2PaginaPrincipal" : "none"}
                style={{ position: "absolute", top: "8%", left: "20%" }}
              >
                Administrador {usuario.nombre}
              </label>
            </div>
            <div
              className="contenedor4PaginaPrincipal"
              onClick={() => {
                Navegar({ navigate, navega: "/" });
              }}
              style={{
                position: "absolute",
                top: "40%",
                left: "0%",
                paddingTop: "15px",
              }}
            >
              <label className="labelPaginaPrincipal">Volver al Login</label>
            </div>
          </div>
          <img
            src="./avatar.png"
            onClick={() => {
              Inf({ setInf, inf });
            }}
            className="imagen2PaginaPrincipal"
            style={{
              position: "absolute",
              top: "4%",
              left: "90%",
              width: "50px",
              height: "50px",
              zIndex: "1",
            }}
          />
        </div>
        <button
          onClick={() => {
            Navegar({ navigate, navega: "/empleados" });
          }}
          className="botonPaginaPrincipal"
          style={{ position: "absolute", top: "50%", left: "25%" }}
        >
          Empleado
        </button>
        <button
          onClick={() => {
            Navegar({ navigate, navega: "/clientes" });
          }}
          className="botonPaginaPrincipal"
          style={{ position: "absolute", top: "50%", left: "55%" }}
        >
          Cliente
        </button>
        <button
          className="botonPaginaPrincipal"
          onClick={() => {
            Navegar({ navigate, navega: "/Inventario" });
          }}
          style={{ position: "absolute", top: "30%", left: "25%" }}
        >
          Inventario
        </button>
        <button
          onClick={() => {
            NavegarV({ navigate, usuario });
          }}
          className="botonPaginaPrincipal"
          style={{ position: "absolute", top: "30%", left: "55%" }}
        >
          Venta
        </button>
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "2%",
            width: "400px",
            height: "400px",
          }}
        >
          <GraficoVentas />
        </div>
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "50%",
            width: "360px",
            height: "400px",
          }}
        >
          <GraficoDetalleVentas />
        </div>
      </div>
    </div>
  );
}

export default Pg_principalAdmin;
