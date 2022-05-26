import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])
    return (
        <div>
            {users.length}
        </div>
    );
};

export default MakeAdmin;