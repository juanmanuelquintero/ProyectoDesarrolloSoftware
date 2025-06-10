import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./view/View_login";
import Inventario from "./view/view_inv";
import Pg_principal from "./view/View_pg_principal";
import Pg_principalAdmin from "./view/View_pg_principal-Admin";
import Venta from "./view/view_venta";
import Cliente from "./view/view_cliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/paginaPrincipal" element={<Pg_principal />} />
        <Route path="/paginaPrincipalAdmin" element={<Pg_principalAdmin />} />
        <Route path="/ventas" element={<Venta />} />
        <Route path="/clientes" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
