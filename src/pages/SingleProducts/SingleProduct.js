import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurcessModal from '../Shop/PurcessModal';

const SingleProduct = () => {
    // Use Params
    const {id} = useParams();
    // Get User Data from authState 

    // Get Single Product data from server using id 
    const [products, setProducts] = useState({});
    const [modalProducts, setModalProducts] = useState({})
    // Load Data
    useEffect(() => {
        fetch(`https://wholesale-server.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])

    // Use Effect for modal
    useEffect(() => {
        fetch(`https://wholesale-server.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => setModalProducts(data));
    },[])

    // Distructuring Data
    const {name, img, des, quantity, price} = products;



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
            {/* ---------Modal------------  */}
            <PurcessModal 
                key={modalProducts._id} 
                modalProducts={modalProducts} 
                setModalProducts={setModalProducts}
             ></PurcessModal>
        </div>
    );
};

export default SingleProduct;