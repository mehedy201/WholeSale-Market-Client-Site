import React, { useEffect, useState } from 'react';
import Product from './Product';
// import PurcessModal from './PurcessModal';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [addedForModal, setAddedForModal] = useState(null);

    useEffect(() => {
        // http://localhost:5000/products
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
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


            {/* For Modal 
            {
            addedForModal && <PurcessModal 
                key={addedForModal._id}
                addedForModal={addedForModal}
            ></PurcessModal>
            } */}
        </>
    );
};

export default Shop;