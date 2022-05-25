import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    console.log(products);
    return (
        <>
        <h3 className="text-2xl text-center font-bold">Shop</h3>
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                    ></Product>)
                }
            </div>
        </>
    );
};

export default Shop;