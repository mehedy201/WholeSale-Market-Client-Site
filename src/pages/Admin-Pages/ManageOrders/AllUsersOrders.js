import React from 'react';

const AllUsersOrders = ({data, index, handleDelete}) => {
    const {img, name, userEmail, _id} = data;
    return (
        <tr>
            <th>{index}</th>
            <td><img className='h-8 w-8' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{userEmail}</td>
            <td><button className='btn btn-sm capitalize text-white'>Update Status</button></td>
            <td><button onClick={()=> handleDelete(_id)} className='btn btn-sm capitalize text-white'>Delete</button></td>
        </tr>
    );
};

export default AllUsersOrders;