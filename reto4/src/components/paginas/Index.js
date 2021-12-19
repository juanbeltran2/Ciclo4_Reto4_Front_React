import React from "react";
import { Routes, Route } from 'react-router';

import Ordenes from './Ordenes';
import Usuarios from './Usuarios';
import Productos from './Productos';


import DetalleOrdenes from "./DetalleOrdenes";
import DetalleUsuarios from "./DetalleUsuarios";
import DetalleProductos from './DetalleProductos';

import ActualizarProducto from './ActualizarProducto';

import Sidebar from '../ui/Sidebar';


const Index = () => {
   return (
      <>

         <div className="md:flex min-h-screen" >
            <Sidebar />
            <div className="md:w-2/5 xl:w-4/5 p-6">


            </div>
         </div>
      </>
   );
}

export default Index;