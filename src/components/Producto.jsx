import React from 'react';
import carritoaddimg from '../assets/img/carrito-compra.svg';
import borrarimg from '../assets/img/borrar.svg';

const Producto = ({producto,productos,carrito,agregarCarrito}) => {
    /**Destructuracion del parametro producto con Object destructuring */
    const {id,nombre,precio} = producto;
    /**Arrow function para realizar la compra del producto por medio del id */
    const realizarCompra = id => {
        /**Realiza una busqueda en la lista de los productos, filtrandolo por el codigo 
         * Retorna un array, en la pos 0 se encuentra el ojeto */
        const producto = productos.filter(producto => producto.id === id)[0];
        /**Agregamos al carrito el producto comprado,
        realizando una copia del carrito y el producto a agregar*/
        agregarCarrito([
            ...carrito,
            producto
        ]);
    }
    /**Arrow function para eliminar un producto del carrito por medio del id */
    const eliminarProducto = id => {
        /**Realiza una busqueda en el carrito donde retorna un arreglo con los elementos
         * NO seleccionados por el usuario */
        const productos = carrito.filter(producto=> producto.id !== id);
        /**Modifica el carrito con el array generado por productos */
        agregarCarrito(productos);
    }
    return (
        <div className="card m-3">
            <div className="card-header d-flex justify-content-between">
                <div class="card-title mb-0">
                    <p><b>Producto:</b> {nombre}</p>
                </div>
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