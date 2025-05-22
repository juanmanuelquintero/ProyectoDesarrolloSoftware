import { useEffect, useState } from "react"
import axios from "axios";
import './venta.css'


function Venta () {
    const [codigo, setCodigo] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [precioU, setPrecioU] = useState('')
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState('')
    const [lista1, setLista1] = useState([])
    const [lista2, setLista2] = useState([])
    const [lista3, setLista3] = useState([])

useEffect(() => {
    const preciou = parseFloat(precioU || 0)
    const Cantidad = parseFloat(cantidad || 0)
    const resultado = Cantidad * preciou

    setSubtotal(resultado.toFixed(2))
}, [cantidad, precioU])

useEffect(() => {
    setTotal(lista2.reduce((acumular, valor) => acumular + parseFloat(valor), 0))
}, [lista2])

    function Buscar () {
        if (codigo) {
            axios.get(`http://127.0.0.1:8000/api/productos/${codigo}`)
                .then((Response) => {
                    const producto = Response.data
                    setLista1(producto)
                    setCantidad(1)
                    setPrecioU(parseFloat(producto.precio_venta_cu))
                })
                .catch((Error) => {
                    console.log(Error)
                    alert("error")
                })  
        } else {
            alert("no se encontro el codigo")
        }
        
    }

    function Añadir () {
        const productoCantidad = {...lista1, Cantidad: parseFloat(cantidad), Subtotal: subtotal}
        setLista2([...lista2, subtotal])
        setLista3([...lista3, productoCantidad])
        setCodigo('')
        setCantidad(0)
        setPrecioU('')
    }

    function nose () {
        console.log(lista2)
    }

    return(
        <div className="contenedor1Venta" style={{position: 'absolute', top: '5%', left: '15%'}}>
            <input className="inputVenta" type='number' value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Codigo" style={{position: 'absolute', top: '8%', left: '2%'}}/>
            <input className="inputVenta" type='number' value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad" style={{position: 'absolute', top: '23%', left: '2%'}}/>
            <input className="inputVenta" type='number' value={precioU} onChange={(e) => setPrecioU(e.target.value)} placeholder="Precio U" style={{position: 'absolute', top: '38%', left: '2%'}}/>
            <input className="inputVenta" type='number' value={subtotal} readOnly placeholder="Subtotal" style={{position: 'absolute', top: '68%', left: '2%'}}/>
            <input className="inputVenta" type="number" value={total} readOnly placeholder="Total Compra" style={{position: 'absolute', top: '64%', left: '66%'}}/>
            <button className="botonVenta" onClick={nose} style={{position: 'absolute', top: '80%', left: '70%', backgroundColor: 'rgba(110, 255, 62, 0.68)', border: 'rgb(64, 255, 0) 4px solid'}}>Registrar</button>  
            <button className="botonVenta" onClick={Buscar} style={{position: 'absolute', top: '8%', left: '25%', backgroundColor: 'rgba(100, 100, 100, 0.59)', border: 'rgb(35, 35, 35) 4px solid'}}>Buscar</button>      
            <button className="botonVenta" onClick={Añadir} style={{position: 'absolute', top: '68%', left: '25%', backgroundColor: 'rgba(72, 228, 255, 0.65)', border: 'rgb(0, 217, 255) 4px solid'}}>Añadir</button>
            <img className="imagenRefrescar" src="./actualizar.png"style={{position: 'absolute', top: '11%', left: '78%', width: '40px', height: '40px'}}/>
            <div className="tablaVenta-container" style={{position: 'absolute', top: '25%', left: '25%'}}>
               <table className="tablaVenta">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Subtotal</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {lista3.map((productos, index) =>
                        <tr key={index}>
                            <td>{productos.id_producto}</td>
                            <td>{productos.nombre}</td>
                            <td>{productos.Subtotal}</td>
                            <td>{productos.marca}</td>
                            <td>{productos.categoria}</td>
                            <td>{productos.Cantidad}</td>
                        </tr>
                    )}
                     
                </tbody>
            </table> 
            </div>
            
        </div>
    )

}

export default Venta;