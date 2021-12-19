import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';


const DetalleProductos = () => {

   // Hook para redireccionar
   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         reference: "",
         brand: "",
         category: "",
         materiales: "",
         description: "",
         availability: "",
         price: "",
         quantity: "",
         photography: "",
         dimensiones: "",
      },
      onSubmit: datos => {
         Swal.fire({
            title: 'Continuar con la creación?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar'
         }).then((result) => {
            if (result.isConfirmed) {
               try {
                  console.log(datos);
                  fetch(`http://localhost:81/api/cookware/new`, {
                     method: "POST",
                     body: JSON.stringify(datos),
                     headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                     },
                  })
                     .then((res) => res.json())
                     .then((data) => {
                        //console.log(data);             
                     });

                  Swal.fire(

                     'Se creo correctamente.',
                     'ok'
                  );
                  navigate('/productos');
               } catch (error) {
                  console.log(error)
               }

            }
         })

      }
   });

   return (
      <>
         <div className="md:flex min-h-screen" >
            <Sidebar />
            <div className="md:w-2/5 xl:w-4/5 p-6">

               <h1 className="text-3xl font-light mb-4">Agregar productos</h1>
               <div className="flex justify-center mt-10">
                  <div className="w-full max-w-3xl">
                     <form
                        onSubmit={formik.handleSubmit}
                     >
                        <div className="mb-4">

                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">REFERENCIA</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="reference"
                              type="text"
                              placeholder="reference"
                              value={formik.values.reference}
                              onChange={formik.handleChange}
                           />
                        </div>
                        <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MARCA</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="brand"
                              type="text"
                              placeholder="brand "
                              value={formik.values.brand}
                              onChange={formik.handleChange}
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Category</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="category"
                              type="text"
                              placeholder="category"
                              value={formik.values.category}
                              onChange={formik.handleChange}
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MATERIALES</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="materiales"
                              type="text"
                              placeholder="materiales"
                              value={formik.values.materiales}
                              onChange={formik.handleChange}
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DIMENSION</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="dimensiones"
                              type="text"
                              placeholder="dimensiones"
                              value={formik.values.dimensiones}
                              onChange={formik.handleChange}
                           />
                        </div>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                        <select
                           className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                           id="availability"
                           value={formik.values.availability}
                           onChange={formik.handleChange}
                        >
                           <option value="true">Disponible</option>
                           <option value="false">No Disponible</option>
                        </select>

                        <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">PRECIO</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="price"
                              type="number"
                              placeholder="Precio"
                              value={formik.values.price}
                              onChange={formik.handleChange}
                           />
                        </div>


                        <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CANTIDAD</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="quantity"
                              type="number"
                              placeholder="Cantidad"
                              value={formik.values.quantity}
                              onChange={formik.handleChange}
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FOTOGRAFIA</label>
                           <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="photography"
                              type="text"
                              placeholder="Fotografia"
                              value={formik.values.photography}
                              onChange={formik.handleChange}
                           />
                        </div>
                        <input

                           type="submit"
                           className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                           value="Agregar Producto"
                        />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default DetalleProductos;