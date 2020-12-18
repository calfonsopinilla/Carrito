import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito,agregarCarrito}) => (
    <div className="card border-dark">
        <h3 className="card-header text-center text-white bg-dark">Tu carrito de compras</h3>
        {carrito.length === 0
        ?<div className="m-2 alert alert-info" role="alert">
        ¡No hay productos agregados!
        </div>
        :carrito.map(producto=>(
            <Producto
                key={producto.key}
                producto={producto}
                carrito={carrito}
                agregarCarrito={agregarCarrito}
            />
        ))}
    </div>
);
 
export default Carrito;