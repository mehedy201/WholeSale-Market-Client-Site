import React from 'react';
import { toast } from 'react-toastify';

const User = ({index, user, handleDelete}) => {

  const {email, role, _id} = user;

  const makeAdmin = () => {
    fetch(`https://wholesale-server.onrender.com/user/admin/${email}`,{
      method: 'PUT',
      headers: {
        autherization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      if(res.status === 403){
        toast.error('Faild to Make admin')
      }
      return res.json()
    })
    .then(data => {
      if(data.modifiedCount > 0){
        // refetch();
        toast.success('This Person NOW admin')
      }
    })
  }
  
  
    return (
            <tr>
              <th>{index}</th>
              <td>{email}</td>
              <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm capitalize text-white'>Make Admin</button>}</td>
              <td><button onClick={() => handleDelete(_id)} className='btn btn-sm capitalize text-white'>Delete User</button></td>
            </tr>   
    );
};

export default User;