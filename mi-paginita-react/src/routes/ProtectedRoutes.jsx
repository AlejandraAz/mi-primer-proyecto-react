
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children,estado}) => {
    const usuario = JSON.parse(localStorage.getItem('usuario')) || null;

    if(estado){
        return children
    }else{
        return <Navigate to="/" />;
    }

}

export default ProtectedRoutes;