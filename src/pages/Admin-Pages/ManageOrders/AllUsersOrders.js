import React from 'react';

const AllUsersOrders = ({data, index}) => {
    const {img, name, userEmail} = data;
    return (
        <tr>
            <th>{index}</th>
            <td><img className='h-8 w-8' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{userEmail}</td>
            <td><button className='btn btn-sm capitalize text-white'>Update Status</button></td>
            <td><button className='btn btn-sm capitalize text-white'>Delete</button></td>
        </tr>
    );
};

export default AllUsersOrders;