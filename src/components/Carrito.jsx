import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito,agregarCarrito}) =>(
    <div className="card border-dark">
        <h5 className="card-header text-center text-white bg-dark">Tu carrito de compras</h5>
        {carrito.length === 0
        ?<div className="m-0 alert alert-info" role="alert">
        ¡No hay productos agregados!
        </div>
        :<table className="table m-0 border-dark table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">Pedidos</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map(producto=>(
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarCarrito={agregarCarrito}
                  />
                ))}
            </tbody>
        </table>}
    </div>
);
 
export default Carrito;