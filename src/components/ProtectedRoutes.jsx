import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
 const greeting= useSelector(state=>state.name)
		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    //if(greeting){ ACTIVAR AL TERMINAR
    if(true){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;