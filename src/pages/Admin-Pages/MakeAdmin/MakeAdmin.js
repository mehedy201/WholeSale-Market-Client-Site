import { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
// import Spinner from '../../../shared/Spinner/Spinner';
// import { useQuery } from 'react-query';
import User from './User';

const MakeAdmin = () => {


    // const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://glacial-beyond-96799.herokuapp.com/user',{
    //     method: 'GET',
    //         headers: {
    //         'autherization': `Bearer ${localStorage.getItem('token')}`
    //     }
    // }).then(res => res.json()))

    

   
    // if(isLoading){
    //     return <Spinner></Spinner>
    // }

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://glacial-beyond-96799.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'autherization': `Baerer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

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