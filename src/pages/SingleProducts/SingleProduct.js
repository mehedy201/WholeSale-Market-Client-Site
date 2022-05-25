import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const SingleProduct = () => {
    // Use Params
    const {id} = useParams();
    // Get User Data from authState 
    const [user] = useAuthState(auth);


    // Get Single Product data from server using id 
    const [product, setProduct] = useState([]);
    // Load Data
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    },[])
    // Distructuring Data
    const {name, img, des, quantity, price} = product;

    return (
        <div>
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center'>
                <div className=''>
                    <img className='w-[100] h-auto xl:p-12' src={img} alt="" />
                </div>
                <div className='xl:p-8 border rounded-lg p-6 h-auto shadow-md'>
                    <h2 className="text-3xl font-semibold pb-4 md:pb-6 xl:pb-6">{name}</h2>
                    <p className='pb-2 md:pb-4 xl:pb-4'>{des}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price per Pich: ${price}</p>
                    <label 
                        htmlFor="wholeSale_modal" 
                        className="btn modal-button capitalize mt-2 shadow-md">Added Orders</label>
                </div>
            </div>

            <div>
                <input type="checkbox" id="wholeSale_modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box relative">
                    <label htmlFor="wholeSale_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h2 className='text-center text-2xl font-bold'>Please Added Product</h2>
                        <p className='text-center mb-4'>If You added product after that go to my order page and pay</p>
                        <form>
                            <input disabled type="text" value={name} className="input w-full input-bordered mb-2" readOnly required/>
                            <input disabled type="text" value={user?.displayName} className="input w-full input-bordered mb-2" required/>
                            <input disabled type="text" value={user?.email} className="input w-full input-bordered mb-2" required/>
                            <input type="number" placeholder="Type Quantity (minimum 100)" className="input w-full input-bordered mb-2" />
                            <input type="number" placeholder="Type Your Phone Number" className="input w-full input-bordered mb-2" />
                            <label htmlFor="wholeSale_modal" className="btn btn-sm capitalize float-right">Added</label>
                        </form>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;