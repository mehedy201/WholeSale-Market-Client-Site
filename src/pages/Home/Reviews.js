import { Rate } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const Reviews = ({review}) => {
    const {photoUrl, description} = review;
    return (
        <div className=''>
            <img className='h-24 w-24 p-2 shadow rounded-full border mx-auto outline-1 outline-green-500' src={photoUrl} alt="" />
            <h2 className="text-sm text-center mt-2">Demo Name</h2>
            <span className='flex justify-center'><Rate value={5} /></span>
            <p className='text-center p-4 shadow rounded-xl mt-2'>{description}</p> 
        </div>
    );
};

export default Reviews;