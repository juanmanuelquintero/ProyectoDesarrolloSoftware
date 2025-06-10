import React, { useState } from "react";
import axios from "axios";
import "./css/login.css";
import { useNavigate } from "react-router-dom";
import { Inf, Ingresar } from "../controllers/controller_login";

function Login() {
  const [id_empleado, setId_empleado] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();
  const [inf, setInf] = useState(false);
  const Informacion =
    "si tiene problemas con la aplicacion porfavor comunicarse al 3148756304";

  return (
    <div>
      <img
        src="./logo.png"
        className="imagenLogin"
        style={{ position: "absolute", top: "5%", left: "84%" }}
      />
      <div
        className="contenedor1Login"
        style={{ position: "absolute", top: "10%", left: "25%" }}
      >
        <div
          className="contenedor2Login"
          style={{
            position: "absolute",
            top: "5%",
            left: "3%",
            width: "750px",
            height: "50px",
            paddingTop: "8px",
            textAlign: "center",
          }}
        >
          <label className="labelLogin" style={{ fontSize: "22px" }}>
            !Bienvenido¡
          </label>
          <img
            src="./menu.png"
            onClick={() => {
              Inf({ inf, setInf });
            }}
            className="imagen2Login"
            style={{
              position: "absolute",
              top: "0%",
              left: "90%",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <label
          className="labelLogin"
          style={{
            position: "absolute",
            top: "85%",
            left: "80%",
            color: "rgb(146, 121, 90)",
            fontSize: "50px",
          }}
        >
          Login
        </label>
        <input
          className="inputLogin"
          value={id_empleado}
          onChange={(e) => setId_empleado(e.target.value)}
          placeholder="ID"
          style={{ position: "absolute", top: "25%", left: "39%" }}
        />
        <form>
          <input
            type="password"
            autoComplete="off"
            className="inputLogin"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Contreseña"
            style={{ position: "absolute", top: "45%", left: "39%" }}
          />
        </form>

        <button
          className="botonLogin"
          onClick={() => {
            Ingresar({ id_empleado, contraseña, navigate });
          }}
          style={{ position: "absolute", top: "62%", left: "41%" }}
        >
          Ingresar
        </button>
      </div>
      {inf && (
        <div className="contenedor3Login">
          <div
            className="contenedor4Login"
            style={{ position: "absolute", top: "20%", left: "40%" }}
          >
            <div
              className="contenedor2Login"
              style={{
                position: "absolute",
                top: "5%",
                left: "3%",
                width: "370px",
                height: "40px",
                paddingTop: "8px",
                paddingLeft: "30px",
              }}
            >
              <label className="labelLogin" style={{ fontSize: "16px" }}>
                Informacion
              </label>
              <img
                src="./cancelar.png"
                onClick={() => {
                  Inf({ inf, setInf });
                }}
                className="imagen2Login"
                style={{
                  position: "absolute",
                  top: "18%",
                  left: "87%",
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "18%",
                width: "300px",
              }}
            >
              <label className="labelLogin" style={{ fontSize: "20px" }}>
                {Informacion}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
