import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllUsersOrders from './AllUsersOrders';

const ManageOrders = () => {
    // Use Navigate
    const navigate = useNavigate()
    // UseState for orderd Data
    const [orderdData, setOrderdData] = useState([]);

    // https://glacial-beyond-96799.herokuapp.com/user-orderd-data
    fetch('https://glacial-beyond-96799.herokuapp.com/user-orderd-data', {
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
    .then(data => setOrderdData(data));

    
    return (
        <div>
            <div>
                <h2 className='text-2xl font-semibold mb-2'>All Users Orders</h2>
              <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th className='font-semibold capitalize'>Product Image</th>
                        <th className='font-semibold capitalize'>Product Name</th>
                        <th className='font-semibold capitalize'>Client Email</th>
                        <th className='font-semibold capitalize'>Update Status</th>
                        <th className='font-semibold capitalize'>Delete Order</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            orderdData.map((data, index) => <AllUsersOrders 
                                key={data._id} 
                                data={data}
                                index={index}
                            ></AllUsersOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;