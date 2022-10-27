import { useEffect, useState } from 'react';
import User from './User';

const MakeAdmin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://glacial-beyond-96799.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'autherization': `Baerer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    console.log(users)

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `https://glacial-beyond-96799.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'autherization': `Baerer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                const remain = users.filter(user => user._id !== id);
                // console.log(data, products);
                setUsers(remain);
            })
        }
    }




    return (
            <div>
                <h2 className='text-2xl font-semibold mb-2'>All Users</h2>
              <table className="table table-compact w-full">
                <thead>
                    <tr>
                      <th>No:</th>
                      <th className='font-semibold capitalize'>User Email</th>
                      <th className='font-semibold capitalize'>Make Admin</th>
                      <th className='font-semibold capitalize'>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <User 
                            key={user._id} 
                            index={index} 
                            user={user}
                            handleDelete={handleDelete}
                        ></User>)
                    } 
                </tbody>
              </table>
            </div>
    );
};

export default MakeAdmin;