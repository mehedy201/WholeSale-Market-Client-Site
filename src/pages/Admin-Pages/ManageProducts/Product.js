import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product, handleDelete}) => {
    const navigate = useNavigate();

    const {_id, img, name} = product;

    const updatProductButton = (id) => {
        navigate(`/dashboard/update-product/${id}`)
        console.log(id)
    }
    return (
            <div className='flex items-center justify-between border p-2 rounded-lg'>
                <div className='flex items-center'>
                    <img src={img} className='h-16 w-16 rounded-full border' alt="" />
                    <h3 className="font-semibold pl-4">{name}</h3>
                </div>
                <div>
                    <button onClick={() => updatProductButton(_id)} className='btn btn-sm text-white capitalize'>Update Product</button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-sm ml-2 bg-red-900 text-white capitalize'>Delete Product</button>
                </div>
            </div>
    );
};

export default Product;