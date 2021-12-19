import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormularioProductos = ({ producto }) => {

    const { reference, brand, price, photography, category, quantity } = producto;

    const actualizarProducto = reference =>{
        console.log(reference);
    }

    const borrarProducto = reference =>{

        Swal.fire({
            title: '¿Continuar con la eliminación?',
            text: "Este cambio no es reversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar'
            }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(reference);
                    fetch(`http://localhost:81/api/cookware/${reference}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                        }).then((data) =>{
                            // console.log(data);
                        });   
                Swal.fire(
                'Eliminado',
                'Se borro correctamente.',
                'success'
                );
            } catch (error) {
                console.log(error)
            }
            
        }
        })
    }
    return (
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">

                        <img src={photography} alt=" imagen platillo " />
                        <div className="sm:flex sm:-mx-2 pl-2">

                        </div>
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className="font-bold text-2xl text-yellow-600 mb-4">{brand} </p>
                        <p className="font-bold text-2xl text-yellow-600 mb-4">{reference} </p>

                        <p className="text-gray-600 mb-4">{category} </p>

                        <p className="text-gray-600 mb-4">Precios: {''}
                            <span className="text-gray-700 font-bold">$ {price}</span>

                            <p className="text-gray-600 mb-4">Dirección: {''}
                                <span className="text-gray-700 font-bold">{quantity}</span>
                            </p>
                        </p>

                        <button
                            onClick={ () => borrarProducto(producto.reference)}
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold "
                            > 
                            Borrar                            
                        </button>
                        
                        <Link to={`/actualizar-producto/${producto.reference}`} className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold">
                                Actualizar Producto
                        </Link>
                        

                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormularioProductos;