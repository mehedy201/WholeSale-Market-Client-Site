import React from 'react';
import CountUp from 'react-countup';
import './AboutCompany.css'
import { GiHumanTarget } from 'react-icons/gi';
import { MdOutlineReviews } from 'react-icons/md';
import { RiProductHuntLine } from 'react-icons/ri';



const AboutCompany = () => {
    return (
        <div className='for_background_image my-4'>
            <div className='for_background_overly py-16'>
                <p className='text-4xl font-bold text-center text-white'>Our Company Achievement</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 rounded-lg mt-8'>
                    <div>
                        <span className='flex justify-center'><GiHumanTarget className='h-16 w-16 p-2 text-green-500'/></span>
                        <span className='flex justify-center font-bold text-2xl text-green-500'><CountUp enableScrollSpy duration={2.75} className='font-bold text-6xl text-white' end={1000} />+</span>
                        <p className='text-2xl mt-2 font-semibold text-center text-white'>Customers</p>
                    </div>
                    <div>
                    <span className='flex justify-center'><MdOutlineReviews className='h-16 w-16 p-2 text-green-500'/></span>
                    <span className='flex justify-center font-bold text-2xl text-green-500'><CountUp enableScrollSpy duration={2.75} className='font-bold text-6xl text-white' end={100} />K+</span>
                        <p className='text-2xl mt-2 font-semibold text-center text-white'>Reviews</p>
                    </div>
                    <div>
                        <span className='flex justify-center'><RiProductHuntLine className='h-16 w-16 p-2 text-green-500'/></span>
                        <span className='flex justify-center font-bold text-2xl text-green-500'><CountUp enableScrollSpy duration={2.75} className='font-bold text-6xl text-white' end={1000} />+</span>
                        <p className='text-2xl mt-2 font-semibold text-center text-white'>Products</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;