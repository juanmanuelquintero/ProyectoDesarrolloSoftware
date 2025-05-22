import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Componente_login';
import Inventario from './components/Componentes_inv';
import Pg_principal from "./components/Componentes_pg_principal";
import Pg_principalAdmin from "./components/Componentes_pg_principal-Admin";
import Venta from './components/componente_venta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Inventario" element={<Inventario/>} />
        <Route path='/paginaPrincipal' element={<Pg_principal/>} />
        <Route path='/paginaPrincipalAdmin' element={<Pg_principalAdmin/>} />
        <Route path='/ventas' element={<Venta/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
