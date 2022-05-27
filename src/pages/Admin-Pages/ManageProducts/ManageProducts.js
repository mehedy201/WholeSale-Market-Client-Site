import React, { useEffect, useState } from 'react';
import img from '../../../images/heroimg.jpeg'
import Product from './Product';

const ManageProducts = () => {

    // Use State for Products Data
    const [products, setProducts] = useState([])

    useEffect(() => {
        // http://localhost:5000/products
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'autherization': `Baerer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                const remain = products.filter(item => item._id !== id);
                console.log(data, products);
                setProducts(remain);
            })
        }
    }
    return (
        <div>
            <h2 className="text-2xl font-semibold my-4">Manage All Products</h2>
            {
                products.map(product => <Product 
                    key={product._id} 
                    product={product}
                    handleDelete={handleDelete}
                ></Product>)
            }
        </div>
    );
};

export default ManageProducts;