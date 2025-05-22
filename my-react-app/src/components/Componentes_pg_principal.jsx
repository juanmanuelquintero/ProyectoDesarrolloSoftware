import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './paginaPrincipal.css'

function Pg_principal() {
    const [inf, setInf] = useState(false)
    const { state } = useLocation()
    const { usuario } = state
    const navigate = useNavigate()

    function Navegar (navega) {
        navigate(navega)
    }

    function Inf () {
        setInf(!inf)
    }

    return(
        <div>
            <img src="./logo.png" className="imagenLogin" style={{position: 'absolute', top: '5%', left: '84%'}}/>
            <div className='contenedor1PaginaPrincipal' style={{position: 'absolute', top: '10%', left: '25%'}}>
                <div className='contenedor2PaginaPrincipal'>
                    <img src='./perusoft.png' className='imagenPaginaPrincipal' style={{position: 'absolute', top: '4%', left: '45%', width: '80px', height: '50px'}}/>
                    <label className='labelPaginaPrincipal' style={{position: 'absolute', top: '5%', left: '5%', fontSize: '20px'}}>Perusoft</label>
                    <div className={inf ? 'contenedorINF-2PaginaPrincipal' : 'contenedorINFPaginaPrincipal'}>
                        <div className={inf ? 'contenedor3PaginaPrincipal' : 'none'}>
                            <label className={inf ? 'label2PaginaPrincipal' : 'none'} style={{position: 'absolute', top: '8%', left: '25%'}}>Empleado {usuario}</label>
                        </div>
                        <div className='contenedor4PaginaPrincipal' onClick={() => {Navegar('/')}} style={{position: 'absolute', top: '40%', left: '0%', paddingTop: '15px'}}>
                            <label className='labelPaginaPrincipal'>Volver al Login</label>
                        </div>
                    </div>
                    <img src='./avatar.png' onClick={Inf} className='imagen2PaginaPrincipal' style={{position: 'absolute', top: '4%', left: '90%', width: '50px', height: '50px', zIndex: '1'}}/>
                </div>
                <button className='botonPaginaPrincipal' onClick={() => {Navegar('/Inventario')}} style={{position: 'absolute', top: '30%', left: '25%'}}>Inventario</button>
                <button className='botonPaginaPrincipal' style={{position: 'absolute', top: '30%', left: '55%'}}>Venta</button>
            </div>
        </div>
    )
}

export default Pg_principal;