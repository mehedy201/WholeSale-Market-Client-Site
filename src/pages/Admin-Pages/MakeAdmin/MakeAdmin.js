import React, { useEffect, useState } from 'react';
import User from './User';

const MakeAdmin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])
    return (
            <div>
                <h2 className='text-2xl font-semibold text-center mb-2'>All Users</h2>
              <table class="table table-compact w-full">
                <thead>
                    <tr>
                      <th></th>
                      <th>User Email</th>
                      <th>Make Admin</th>
                      <th>Delete User</th>
                    </tr>
                </thead>
                    {
                        users.map((user, index) => <User 
                            key={user._id} 
                            index={index} 
                            user={user}
                        ></User>)
                    }
                </table>
            </div>
    );
};

export default MakeAdmin;