import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Inf({ inf, setInf }) {
  setInf(!inf);
}

export function Ingresar({ id_empleado, contraseña, navigate }) {
  if (id_empleado && contraseña) {
    axios
      .get(`http://127.0.0.1:8000/api/empleados/?id_empleado=${id_empleado}`)
      .then((Response) => {
        const usuario = Response.data[0];
        if (contraseña == usuario.contraseña) {
          if (usuario.cargo_empleado == "Usuario") {
            navigate("/paginaPrincipal", {
              state: {
                usuario: {
                  nombre: usuario.nombre1,
                  codigo: usuario.id_empleado,
                },
              },
            });
          } else {
            navigate("/paginaPrincipalAdmin", {
              state: {
                usuario: {
                  nombre: usuario.nombre1,
                  codigo: usuario.id_empleado,
                },
              },
            });
          }
        } else {
          alert("contraseña incorrecta");
        }
      })
      .catch((Error) => {
        console.log("error", Error);
      });
  } else {
    alert("llene los campos");
  }
}
