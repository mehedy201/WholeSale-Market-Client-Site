import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner/Spinner';

const Profile = () => {

    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Spinner></Spinner>
    }

    return (
        <div className='my-12'>
            <h2 className="text-2xl font-bold text-center">My Profile</h2>
            <h2 className=" font-bold">Full Name</h2>
            <p>{user?.displayName}</p>
            <h2 className=" font-bold">Email</h2>
            <p>{user.email}</p>

        </div>
    );
};

export default Profile;