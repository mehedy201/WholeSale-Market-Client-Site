import React from 'react';
import forbiddenImg from '../../images/forbiden.png'

const Forbidden = () => {
    return (
        <div className='flex items-center justify-center my-12'>
            <div>
                <img className='rounded-xl' src={forbiddenImg} alt="" />
            </div>
        </div>
    );
};

export default Forbidden;