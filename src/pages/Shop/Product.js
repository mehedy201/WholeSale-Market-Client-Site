import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    
    const navigate = useNavigate();
    const navigateSingleProduct = (id) => {
        navigate(`/product/${id}`);
    }

    const { _id, name, des, img, price, quantity} = product;

    return (
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-[250px] w-[100%]" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{des}</p>
                  <p>Quantity: {quantity}</p>
                  <div className="card-actions justify-end">
                    <label 
                        onClick={() => navigateSingleProduct(_id)} 
                        className="btn modal-button capitalize">Added Orders</label>
                  </div>
                </div>
            </div>
    );
};

export default Product;