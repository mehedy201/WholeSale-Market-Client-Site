import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
// import PurcessModal from './PurcessModal';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://wholesale-server.onrender.com/products')
            .then(data => setProducts(data.data))
    }, [])

    return (
        <>
        <h3 className="text-2xl text-center font-bold">Shop</h3>
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    products.map(product => <Product 
                        key={product._id} 
                        product={product}
                    ></Product>)
                }
            </div>
        </>
    );
};

export default Shop;