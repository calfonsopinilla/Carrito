import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  const fecha = new Date().getFullYear();

  const [carrito, agregarCarrito] = useState([]);

  const [productos, setProductos] = useState([
    {id:1,nombre:"Chocolate",precio:500},
    {id:2,nombre:"Arroz",precio:2000},
    {id:3,nombre:"Shampo",precio:700},
    {id:4,nombre:"Pan",precio:200}
  ]);
  return (
    <Fragment>
      <Header
        carrito={carrito}
      />
      <div className="container">
        <div className="row p-2">
          <div className="col-md-8">
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
          <div className="col-md-4">
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