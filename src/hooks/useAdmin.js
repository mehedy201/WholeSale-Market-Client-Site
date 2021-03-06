import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`https://glacial-beyond-96799.herokuapp.com/admin/${email}`, {
                mehtod: 'GET',
                headers: {
                    headers: {
                        'content-type': 'application/json',
                    }
                }
            })
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
        }
    },[user])
    return [admin]
}

export default useAdmin;