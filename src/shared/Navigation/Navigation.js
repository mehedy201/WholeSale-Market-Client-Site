import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { signOut } from 'firebase/auth';
import './Navigation.css'
import useAdmin from '../../hooks/useAdmin'

const Navigation = () => {
  // Use Navigate 
  const navigate = useNavigate(auth);

  const logoClick = () => {
    navigate('/')
  }
  // Get data use auth state
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
  if(loading){
    return <Spinner></Spinner>
  }  
  
  console.log(admin)
  // Sign Out button 
  const singOutButton = () => {
    signOut(auth);
    navigate('/')
  }

  
 

    // Navigation Items
    const menuItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/shop'}>Shop</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
         {
           admin?<>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
          </>
           :
           <>
            {
              user && <>
              <li><Link to={'/my-orders'}>My Orders</Link></li>
              <li><Link to={'/add-review'}>Add a Review</Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
              </>
            }
            </>
         }
        {
          user? <li><button onClick={singOutButton}>Sing Out</button></li>
          :
          <li><Link to={'/log-in'}>Log In</Link></li>
        }
    </>
    // Use Navigate from Reack router
    // const navigate = useNavigate();
    // // Logo Click handlar 
    // const logoClick = () =>{
    //     navigate('/');
    // }

        
    
    return (
        <div className="navbar p-0 bg-base-100 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[90%] mx-auto">
            <div className="navbar p-0">
              <div className="dropdown lg:hidden">
                <label tabIndex="0" className="btn btn-ghost lg:hidden border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItems}
                </ul>
              </div>
              <div>
              <button onClick={logoClick} className="btn btn-ghost normal-case text-xl border border-slate-100">Whole<span className='text-neutral'>S</span>ale<span className='text-neutral'>.</span><span><small className='text-xs'>shop</small></span></button>
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