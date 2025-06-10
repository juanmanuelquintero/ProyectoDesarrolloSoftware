export function NavegarV({ navigate, usuario }) {
  navigate("/ventas", { state: { usuario } });
}

export function Navegar({ navigate, navega }) {
  navigate(navega);
}

export function Inf({ setInf, inf }) {
  setInf(!inf);
}
