import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner/Spinner';

const RequirAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Spinner></Spinner>
    }
    if(!user){
        return <Navigate to="/log-in" state={{ from: location }} replace />;
    }
    return children;
};

export default RequirAuth;