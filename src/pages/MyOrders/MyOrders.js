import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrder from './MyOrder';

const MyOrders = () => {

    //Use Navigate
    const navigate = useNavigate();

    // Use Auth State
    const [user] = useAuthState(auth);
    // console.log(user)
    // Use state for get order data
    const [myOrderd, setMyOrderd] = useState([]);
    useEffect(() => {
        if(user){
            // http://localhost:5000/
            // https://glacial-beyond-96799.herokuapp.com
            fetch(`http://localhost:5000/userOrder?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'autherization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                if(res.status === 401){
                    return navigate('/unauthorized')
                }
                else if(res.status === 403){
                    return navigate('/forbidden')
                }
                else{
                    return res.json()
                }
            })
            .then(data => setMyOrderd(data))
        }
    },[user]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `http://localhost:5000/user-orderd-data/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remain = myOrderd.filter(item => item._id !== id);
                console.log(data, myOrderd);
                setMyOrderd(remain);
            })
        }
    }

    
    return (
        <div className='my-12'>
            {
                myOrderd.map(orderdItem => <MyOrder 
                    key={orderdItem._id} 
                    orderdItem={orderdItem} 
                    handleDelete={handleDelete}
                    ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;