import React from 'react';

const Reviews = ({review}) => {
    const {photoUrl, description} = review;
    return (
        <div>
            <img className='h-32 w-32 rounded-full border mx-auto' src={photoUrl} alt="" />
            <p className='text-center'>{description}</p>
        </div>
    );
};

export default Reviews;