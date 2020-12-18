import React from 'react';
import carritoaddimg from '../assets/img/carrito-compra.svg';
import borrarimg from '../assets/img/borrar.svg';

const Producto = ({producto,productos,carrito,agregarCarrito}) => {

    const {id,nombre,precio} = producto;

    const realizarCompra = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarCarrito([
            ...carrito,
            producto
        ]);
    }

    const eliminarProducto = id => {
        const productos = carrito.filter(producto=> producto.id !== id);
        agregarCarrito(productos);
    }
    
    return (
        <div className="card m-3">
            <div className="card-header d-flex justify-content-between">
                <h5 class="card-title mb-0">Producto: {nombre}</h5>
                <div>
                    {productos
                    ?(<button
                        className="btn btn-success btn-sm"
                        type="button"
                        onClick={()=>realizarCompra(id)}
                    ><img src={carritoaddimg} width="20px" alt=""/>
                    </button>)
                    :(<button 
                        className="btn btn-danger btn-sm"
                        type="button"
                        onClick={()=>eliminarProducto(id)}
                    ><img src={borrarimg} width="20px" alt=""/>
                    </button>)
                    }
                </div>
            </div>
            <div className="card-body">
                <p className="card-text"><b>Precio: </b><small className="text-muted">$ {precio} COP</small></p>
            </div>
        </div>
    );
}
 
export default Producto;