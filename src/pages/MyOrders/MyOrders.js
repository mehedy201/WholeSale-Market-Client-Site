import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrder from './MyOrder';

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const [myOrderd, setMyOrderd] = useState([]);
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/user-orderd-data?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrderd(data))
        }
    },[user]);
    return (
        <div className='my-12'>
            {
                myOrderd.map(orderdItem => <MyOrder key={orderdItem._id} orderdItem={orderdItem}></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;