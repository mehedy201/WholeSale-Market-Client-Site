import { useEffect, useState } from "react"

const useReview =()=> {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('https://wholesale-server.onrender.com/user-review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews];

}

export default useReview;