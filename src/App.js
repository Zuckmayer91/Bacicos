
import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import { Fragment } from 'react';

function App() {

  
  const [productos, guardarProductos]= useState([
    {id: 1, nombre:'camisa onefunneldesign', precio: 50},
    {id: 2, nombre:'pantalon onefunneldesign', precio: 140},
    {id: 3, nombre:'chaqueta onefunneldesign', precio: 130},
    {id: 4, nombre:'botas onefunneldesign', precio: 320},
    {id: 5, nombre:'locion onefunneldesign', precio: 110},
  ]
  );

  const[carrito, agregarProducto] = useState([]);
  const fecha= new Date().getFullYear();

  return (
    <Fragment>
     <Header 
     titulo="Tienda Virtual"
     />

     <h2>Lista de productos</h2>
     {productos.map(producto => (<Producto
     
     key={producto.id}
     producto={producto}
     carrito={carrito}
     productos={productos}
     agregarProducto={agregarProducto}
     />))}
     <Carrito
     carrito ={carrito}
     agregarProducto={agregarProducto}
     />
     <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
