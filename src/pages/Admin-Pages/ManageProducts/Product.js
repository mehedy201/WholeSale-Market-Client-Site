import React from 'react';

const Product = ({product}) => {
    const {img, name} = product
    return (
            <div className='flex items-center justify-between border p-2 rounded-lg'>
                <div className='flex items-center'>
                    <img src={img} className='h-16 w-16 rounded-full border' alt="" />
                    <h3 className="font-semibold pl-4">{name}</h3>
                </div>
                <div>
                    <button className='btn btn-sm text-white capitalize'>Update Product</button>
                    <button className='btn btn-sm ml-2 bg-red-900 text-white capitalize'>Delete Product</button>
                </div>
            </div>
    );
};

export default Product;