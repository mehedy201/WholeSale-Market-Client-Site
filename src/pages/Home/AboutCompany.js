import React from 'react';

const AboutCompany = () => {
    return (
        <>
        <p className='text-4xl font-bold text-center text-accent'>Our Company Achievement</p>
        <div className='my-12 grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <div>
                <p className='text-4xl font-bold text-center text-primary '>1000+</p>
                <p className='text-3xl font-semibold text-center'>Customers</p>
            </div>
            <div>
                <p className='text-4xl font-bold text-center text-primary '>50k +</p>
                <p className='text-3xl font-semibold text-center'>Reviews</p>
            </div>
            <div>
                <p className='text-4xl font-bold text-center text-primary '>100+</p>
                <p className='text-3xl font-semibold text-center'>Products</p>
            </div>
        </div>
        </>
    );
};

export default AboutCompany;