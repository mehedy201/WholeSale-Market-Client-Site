import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='my-12'>
        <h3 className="text-xl font-semibold text-center">Admin Dashboard</h3>
            <div className='md:flex lg:flex '>
                <div className='p-4 border m-2 w-64'>
                    <button className='md:bolck lg:block my-2 py-1 w-[100%] rounded-sm font-semibold border capitalize'>All User</button>
                    <button className='md:bolck lg:block my-2 py-1 w-[100%] rounded-sm font-semibold border capitalize'>Add Product</button>
                    <button className='md:bolck lg:block my-2 py-1 w-[100%] rounded-sm font-semibold border capitalize'>Manage Orders</button>
                    <button className='md:bolck lg:block my-2 py-1 w-[100%] rounded-sm font-semibold border capitalize'>Manage Products</button>
                </div>
                <div className='grow p-4 border m-2'>Second Div</div>
            </div>
        </div>
    );
};

export default Dashboard;