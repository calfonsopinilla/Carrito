import React from 'react';
import carritoimg from '../assets/img/carrito.svg';

const Header = ({carrito}) => {
    /**Realizar un total del precio de los productos agregados al carrito
     * por medio de la funcion reduce */
    let total = carrito.reduce((precioTotal,producto)=>{
        return precioTotal + producto.precio;
    },0);
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Carrito de compras</span>
                <div className="d-flex text-white">
                    <button type="button" class="btn btn-dark">
                        
                        <img src={carritoimg} width="30px" alt=""/> 
                        <span class="badge bg-primary">{carrito.length}</span> 
                        <span class="badge bg-dark">${total} COP</span>
                    </button>
                    
                </div>
            </div>
            
        </nav>
    );
}

export default Header;