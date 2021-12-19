import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioProductos from '../ui/FormularioProductos';
import Sidebar from '../ui/Sidebar';

const Productos = () => {
      const [productos, guardarProductos] = useState([]);

      fetch("http://localhost:81/api/cookware/all")
            .then((res) => res.json())
            .then((data) => {
                  //console.log(data);
                  guardarProductos(data);
            });
      return (
            <>
                  <div className="md:flex min-h-screen" >
                        <Sidebar />
                        <div className="md:w-2/5 xl:w-4/5 p-6">
                              <h1 className="text-3xl font-light mb-4">Productos</h1>
                              <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                    Agregar Producto
                              </Link>
                              {productos.map(producto => (
                                    <FormularioProductos
                                          key={producto.reference}
                                          producto={producto}
                                    />
                              ))}
                        </div>
                  </div>
            </>
      );
}
export default Productos;