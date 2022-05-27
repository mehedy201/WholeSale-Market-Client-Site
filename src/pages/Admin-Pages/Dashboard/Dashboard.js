import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='my-12'>
        <h3 className="text-4xl mb-2 font-semibold text-center text-primary">Admin Dashboard</h3>
            <div className='md:flex lg:flex h-auto'>
                <div className='p-4 border m-2 w-64 rounded-lg bg-primary'>
                    <Link to={'all-users'} className='px-4 border-white text-slate-700  md:bolck lg:block my-2 py-1 w-[100%] rounded-md font-semibold border capitalize'>All User</Link>
                    <Link to={'add-product'} className='px-4 border-white text-slate-700  md:bolck lg:block my-2 py-1 w-[100%] rounded-md font-semibold border capitalize'>Add Product</Link>
                    <Link to={'manage-order'} className='px-4 border-white text-slate-700  md:bolck lg:block my-2 py-1 w-[100%] rounded-md font-semibold border capitalize'>Manage Orders</Link>
                    <Link to={'manage-product'} className='px-4 border-white text-slate-700  md:bolck lg:block my-2 py-1 w-[100%] rounded-md font-semibold border capitalize'>Manage Products</Link>
                </div>
                <div className='overflow-auto grow p-4 border m-2 h-[400px] rounded-lg shadow-lg'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;