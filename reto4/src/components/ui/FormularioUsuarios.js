import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormularioUsuarios = ({ usuario }) => {

    const { id, identification, name, address, cellPhone, email, zone, type } = usuario;

    const borrarUsuario = id =>{

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
                    //console.log(id);
                    fetch(`http://localhost:81/api/user/${id}`,{
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
                    
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className="font-bold text-2xl text-yellow-600 mb-4">{identification} </p>
                        <p className="text-gray-600 mb-4">{name} </p>
                        <p className="text-gray-600 mb-4">{address} </p>
                        <p className="text-gray-600 mb-4">{cellPhone} </p>
                        <p className="text-gray-600 mb-4">{email} </p>
                        <p className="text-gray-600 mb-4">{zone} </p>
                        <p className="text-gray-600 mb-4">{type} </p>
                        
                        <button
                            onClick={ () => borrarUsuario(usuario.id)}
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold "
                            > 
                            Borrar                            
                        </button>

                        <Link to={`/actualizar-usuario/${usuario.id}`} className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold">
                                Actualizar Usuario
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );   
}
export default FormularioUsuarios;