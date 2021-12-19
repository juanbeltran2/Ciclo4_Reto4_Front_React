import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioUsuarios from '../ui/FormularioUsuarios';
import Sidebar from '../ui/Sidebar';

const Usuarios = () => {

      const [usuarios, guardarUser] = useState([]);

      fetch("http://localhost:81/api/user/all")
            .then((res) => res.json())
            .then((data) => {
                  //console.log(data);
                  guardarUser(data);
            });

      return (
            <>
                  <div className="md:flex min-h-screen" >
                        <Sidebar />
                        <div className="md:w-2/5 xl:w-4/5 p-6">
                              <h1 className="text-3xl font-light mb-4">Usuarios</h1>
                              <Link to="/nuevo-usuario" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                    Agregar Usuario
                              </Link>

                              {usuarios.map(usuario => (
                                    <FormularioUsuarios
                                          key={usuario.reference}
                                          usuario={usuario}
                                    />
                              ))}
                        </div>
                  </div>
            </>
      );
}
export default Usuarios;
