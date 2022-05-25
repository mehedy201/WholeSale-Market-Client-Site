import React from 'react';

const Product = ({product}) => {

    const {name, des, img, price, quantity} = product;
    return (

            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-[250px] w-[100%]" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{des}</p>
                  <p>Quantity: {quantity}</p>
                  <p>Price Per pich: {price}</p>
                  <div className="card-actions justify-end">
                    <label htmlFor="wholeSale_modal" class="btn modal-button capitalize">Added Orders</label>
                  </div>
                </div>
            </div>
    );
};

export default Product;