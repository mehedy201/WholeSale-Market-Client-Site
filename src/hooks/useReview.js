import { useEffect, useState } from "react"

const useReview =()=> {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/user-review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews];

}

export default useReview;