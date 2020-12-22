import React from 'react';
import carritoaddimg from '../assets/img/carrito-compra.svg';
import borrarimg from '../assets/img/borrar.svg';

const Producto = ({producto,productos,carrito,agregarCarrito,setProductos}) => {
    const {id,nombre,precio,cantidad} = producto;
    //Funcion para realizar la commpra del producto
    const realizarCompra = id => {
        const productoNuevo = productos.filter(producto => producto.id === id)[0];
        if(productoNuevo.cantidad===0){
            console.log('no hay productos disponibles');
        }else{
            productoNuevo.cantidad = productoNuevo.cantidad - 1;
            const listaProductos = productos.filter(producto => producto.id !== id);
            setProductos([...listaProductos,productoNuevo]);
            const productoCarrito = {...productoNuevo};
            productoCarrito.cantidad = 1;
            agregarCarrito([...carrito,productoCarrito]);
        }
    }
    //Funcion para eliminar productos de la tienda
    const borrarProducto = id =>{
        const listadoProductos = productos.filter(producto => producto.id !== id);
        setProductos(listadoProductos);
    }
    //Funcion para eliminar productos del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto=> producto.id !== id);
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