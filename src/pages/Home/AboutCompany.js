import React from 'react';
import CountUp from 'react-countup';
import './AboutCompany.css'


const AboutCompany = () => {
    return (
        <div className='for_background_image my-4'>
            <div className='for_background_overly py-16'>
                <p className='text-4xl font-bold text-center text-green-500'>Our Company Achievement</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 rounded-lg mt-8'>
                    <div>
                        <span className='flex justify-center font-bold text-2xl text-green-500'><CountUp duration={2.75} className='font-bold text-6xl text-white' end={1000} />+</span>
                        <p className='text-2xl mt-2 font-semibold text-center text-white'>Customers</p>
                    </div>
                    <div>
                    <span className='flex justify-center font-bold text-2xl text-green-500'><CountUp duration={2.75} className='font-bold text-6xl text-white' end={100} />K+</span>
                        <p className='text-2xl mt-2 font-semibold text-center text-white'>Reviews</p>
                    </div>
                    <div>
                        <span className='flex justify-center font-bold text-2xl text-green-500'><CountUp duration={2.75} className='font-bold text-6xl text-white' end={1000} />+</span>
                        <p className='text-2xl mt-2 font-semibold text-center text-white'>Products</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;