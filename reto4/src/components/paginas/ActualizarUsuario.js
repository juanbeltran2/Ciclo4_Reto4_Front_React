import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';

const ActualizarUsuario = () => {

    // Hook para redireccionar
    const navigate = useNavigate();

    const { id } = useParams();

    const [usuarioActualizar, guardarUsuarioActualizar] = useState([]);

    fetch(`http://localhost:81/api/user/${id}`)
        .then((res) => res.json())
        .then((data) => {

            guardarUsuarioActualizar(data);
        });

        const { identification, name, address, cellPhone, email, zone, type } = usuarioActualizar;

        const formik = useFormik({
            initialValues: {
                id: id,
            
            },
            onSubmit: datos => {
                Swal.fire({
                    title: '¿Continuar con la actualzación?',
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
                            fetch(`http://localhost:81/api/user/update`, {
                                method: "PUT",
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
                                'Actualizado!',
                                'Se actualizo correctamente.',
                                'ok'
                            );
                            navigate('/usuarios');
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
                    <h1 className="text-3xl font-light mb-4">Actualizar Usuario</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>

                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">IDENTIFICACION</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="number"
                                        placeholder="identification "
                                        value={formik.values.identification || identification}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">NOMBRE</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="name"
                                        value={formik.values.name || name}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DIRECCION</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="address"
                                        value={formik.values.address || address}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CELULAR</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cellPhone"
                                        type="number"
                                        placeholder="cellPhone"
                                        value={formik.values.cellPhone || cellPhone}
                                        onChange={formik.handleChange}
                                    />
                                </div>                                

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-MAIL</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        placeholder="email"
                                        value={formik.values.email || email}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ZONA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="zone"
                                        type="text"
                                        placeholder="zone"
                                        value={formik.values.zone || zone}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TIPO</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="type"
                                        type="text"
                                        placeholder="type"
                                        value={formik.values.type || type}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Actualizar Usuario"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ActualizarUsuario;
