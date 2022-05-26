import React from 'react';
import unAuthorizedImg from '../../images/Unauthorize.jpg'

const UnAuthorized = () => {
    return (
        <div className='flex items-center justify-center my-12'>
            <div>
                <img className='rounded-xl' src={unAuthorizedImg} alt="" />
            </div>
        </div>
    );
};

export default UnAuthorized;