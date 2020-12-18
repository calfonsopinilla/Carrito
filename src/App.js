import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
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
  const [productos, setProductos] = useState([
    {id:1,nombre:"Xiamo Redmi Note 9S",precio:769900},
    {id:2,nombre:"Xiamo Redmi Note 9",precio:639000},
    {id:3,nombre:"Huawie Y9 Prime",precio:679900},
    {id:4,nombre:"Huawue P30 lite",precio:782900}
  ]);
  return (
    <Fragment>
      <Header
        carrito={carrito}
      />
      <div className="container">
        <div className="row p-2">
          <div className="col-md-7">
            {productos.map(producto=>(
              <Producto
                  key={producto.id}
                  producto={producto}
                  productos={productos}
                  carrito={carrito}
                  agregarCarrito={agregarCarrito}
                />
            ))}
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