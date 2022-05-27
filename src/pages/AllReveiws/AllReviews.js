import React from 'react';
import useReview from '../../hooks/useReview';
import Reviews from '../Home/Reviews';

const AllReviews = () => {
    const [reviews] = useReview();

    return (
        <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
            {
                reviews.map(review => <Reviews
                    key={review._id}
                    review={review}
                ></Reviews>)
            }
        </div>
    );
};

export default AllReviews;