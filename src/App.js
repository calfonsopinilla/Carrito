import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import AddProducto from './components/AddProducto';

function App() {

  let listadoProductos = JSON.parse(localStorage.getItem('productos'));
  if(!listadoProductos){
    listadoProductos = [];
  }
  /**Obtener la fecha, unicamente el año Ej: 2020 */
  const fecha = new Date().getFullYear();
  /**Hook useState para tener el carrito
   * carrito la variable que tendra el state actual
   * en este caso esta vacio useSate([])
   * agregarCarrito cambia el state carrito, ya que no se
   * puede modificar directamente */
  const [carrito, agregarCarrito] = useState([]);
  /**Hook useState para tener productos
   * productos tiene como state acual un arreglo de objetos*/
  const [productos, setProductos] = useState(listadoProductos);
  useEffect(() => {
    if(listadoProductos){
      localStorage.setItem('productos',JSON.stringify(productos));
    }else{
      localStorage.setItem('productos',JSON.stringify([]));
    }
  },[productos,listadoProductos]);
  
  const crearProducto = producto =>{
    setProductos([...productos,producto]);
  };
  return (
    <Fragment>
      <Header
        carrito={carrito}
      />
      <div className="container">
        <div className="row p-2">
          <div className="col-md-7">
            <AddProducto
              crearProducto={crearProducto}
            />
            <table className="table table-dark table-striped mt-1 text-center">
              <thead>
                  <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Añadir</th>
                  </tr>
              </thead>
              <tbody>
                {productos.map(producto=>(
                <Producto
                    key={producto.id}
                    producto={producto}
                    productos={productos}
                    carrito={carrito}
                    agregarCarrito={agregarCarrito}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-5">
            <Carrito
              carrito={carrito}
              agregarCarrito={agregarCarrito}
            />
          </div>
        </div>
      </div>
      <Footer
        fecha={fecha}
        nombre="Copyright"
      />
    </Fragment>
  );
}

export default App;