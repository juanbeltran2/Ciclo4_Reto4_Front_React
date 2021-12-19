import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioProductos from '../ui/FormularioProductos';
import Sidebar from '../ui/Sidebar';

const Ordenes = () => {
      
      const [productos, guardarProductos] = useState([]);

      return (
            <>

                  <div className="md:flex min-h-screen" >
                        <Sidebar />
                        <div className="md:w-2/5 xl:w-4/5 p-6">
                              <h1 className="text-3xl font-light mb-4">Ordenes</h1>
                              <Link to="/nueva-orden" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                    Agregar Orden Prueba
                              </Link>

                        </div>
                  </div>

            </>
      );
}

export default Ordenes;