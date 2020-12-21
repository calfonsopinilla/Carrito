import React from 'react';
import carritoaddimg from '../assets/img/carrito-compra.svg';
import borrarimg from '../assets/img/borrar.svg';

const Producto = ({producto,productos,carrito,agregarCarrito,setProductos}) => {
    /**Destructuracion del parametro producto con Object destructuring */
    const {id,nombre,precio,cantidad} = producto;
    /**Arrow function para realizar la compra del producto por medio del id */
    const realizarCompra = id => {
        /**Realiza una busqueda en la lista de los productos, filtrandolo por el codigo 
         * Retorna un array, en la pos 0 se encuentra el ojeto */
        const productoNuevo = productos.filter(producto => producto.id === id)[0];
        /**Agregamos al carrito el producto comprado,
        realizando una copia del carrito y el producto a agregar*/
        //productoNuevo.cantidad = 24;
        agregarCarrito([
            ...carrito,
            productoNuevo
        ]);
        //validar que el producto no este en el carrito
        
    }
    /**Funcion para borrar productos registrados en la tienda
     * Realiza una busqueda del producto a eliminar de la
     * lista de productos */
    const borrarProducto = id =>{
        const listadoProductos = productos.filter(producto => producto.id !== id);
        setProductos(listadoProductos);
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
        <tr>
            <td>{cantidad}</td>
            <td>{nombre}</td>
            <td>$ {precio} COP</td>
            <td>{productos
                ?(<div className="row">
                    <div className="col-md-6 d-grid mx-auto">
                        <button
                            className="btn btn-success btn-sm"
                            type="button"
                            onClick={()=>realizarCompra(id)}
                        ><img src={carritoaddimg} width="20px" alt=""/></button>
                    </div>
                    <div className="col-md-6 d-grid mx-auto">
                        <button
                            className="btn btn-danger btn-sm"
                            type="button"
                            onClick={()=>borrarProducto(id)}
                        ><img src={borrarimg} width="20px" alt=""/></button>
                    </div>
                </div>)
                :(<button 
                    className="btn btn-danger btn-sm"
                    type="button"
                    onClick={()=>eliminarProducto(id)}
                ><img src={borrarimg} width="20px" alt=""/></button>)
                }
            </td>
        </tr>
    );
}
 
export default Producto;