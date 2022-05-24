import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <button className="btn bg-secondary btn-square loading"></button>
        </div>
    );
};

export default Spinner;