import React from 'react';
import { MdOutlineRunCircle } from 'react-icons/md';
import { AiOutlineSafety } from 'react-icons/ai';
import { RiEmotionHappyLine } from 'react-icons/ri';

const AfterHero = () => {
    return (
        <div className='flex justify-around mt-4'>
            <div className='bg-gradient-to-r from-blue-500 p-4 flex items-center transition-all duration-1000 hover:-translate-y-6 hover:rounded-lg hover:shadow'>
                <AiOutlineSafety className='w-24 h-24 text-white'/>
                <div className='pl-2'>
                    <h2 className='text-white'>Secure information</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at!</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-sky-500 p-4 flex items-center transition-all duration-1000 hover:-translate-y-6 hover:rounded-lg hover:shadow'>
                <MdOutlineRunCircle className='w-24 h-24 text-white'/>
                <div className='pl-2'>
                    <h2 className='text-white'>Fast Delevary</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, magni!</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-green-500 p-4 flex items-center transition-all duration-1000 hover:-translate-y-6 hover:rounded-lg hover:shadow'>
                <RiEmotionHappyLine className='w-24 h-24 text-white'/>
                <div className='pl-2'>
                    <h2 className='text-white'>Happy Client</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ad.</p>
                </div>
            </div>
        </div>
    );
};

export default AfterHero;