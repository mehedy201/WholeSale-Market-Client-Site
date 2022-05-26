import React from 'react';

const User = ({index, user}) => {
    console.log(user);
    return (
            <tr>
              <th>{index}</th>
              <td>{user.email}</td>
              <td><button className='btn btn-sm capitalize text-white'>Make Admin</button></td>
              <td><button className='btn btn-sm capitalize text-white'>Delete User</button></td>
            </tr>
                
    );
};

export default User;