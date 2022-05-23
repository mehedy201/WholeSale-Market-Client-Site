import React from 'react';
import './Navigation.css'

const Navigation = () => {

    const menuItems = <>
        <li><a>Home</a></li>
        <li><a>Shop</a></li>
        <li><a>Blog</a></li>
        <li><a>My Orders</a></li>
        <li><a>Add A Review</a></li>
        <li><a>Profile</a></li>
        <li><a>Dashboard</a></li>
        <li><button>Log In</button></li>
    </>
        
    
    return (
        <div className="navbar p-0 bg-base-100 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[90%] mx-auto">
            <div className="navbar p-0">
              <div className="dropdown lg:hidden">
                <label tabindex="0" className="btn btn-ghost lg:hidden border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItems}
                </ul>
              </div>
              <div>
              <a className="btn btn-ghost normal-case text-xl border border-slate-100">WholeSale.<span><small className='text-xs'>shop</small></span></a>
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                  {menuItems}
              </ul>
            </div>
    </div>
    );
};

export default Navigation;