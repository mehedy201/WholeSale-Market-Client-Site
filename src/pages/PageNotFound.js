import React from 'react';
import notFoundImg from '../images/99776312_s (1).webp'

const PageNotFound = () => {
    return (
        <div className='flex items-center justify-center my-12'>
            <div>
                <img className='rounded-xl' src={notFoundImg} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;