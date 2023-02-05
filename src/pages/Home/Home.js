import React, { useEffect, useState } from 'react';
import './Home.css'
import heroImg from '../../images/heroimg.jpeg'
import Product from '../Shop/Product';
import { useNavigate } from 'react-router-dom';
import AboutCompany from './AboutCompany';
import useReview from '../../hooks/useReview';
import Reviews from './Reviews';
import axios from 'axios';
import AfterHero from './AfterHero';

const Home = () => {
    // useState for product
    const [products, setProducts] = useState([]);
    // Use effect and fetch product
    useEffect(() => {
        axios.get('https://wholesale-server.onrender.com/products')
            .then(data => {
                setProducts(data.data)
                console.log(data)
            });
    }, []);

    // Navigate Shop page
    const navigate = useNavigate();

    // Get User Review
    const [reviews] = useReview();   

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="flex-1">
                      <img src={heroImg} className="rounded-lg" alt='Hero_image'/>
                  </div>
                  <div className='flex-1 pe-12'>
                    <h1 className="text-5xl font-bold">Best Glue gun <span className='text-primary'>2022</span>!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button onClick={() => navigate('/shop')} className="btn text-white capitalize bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Buy Now</button>
                  </div>
                </div>
            </div>
            <AfterHero></AfterHero>
            <div>
                <h2 className="text-4xl font-bold text-center mt-16 mb-6 text-primary">Shop</h2>
                <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                        products.slice(0,3).map(product => 
                            <Product
                                key={product._id}
                                product={product}
                                ></Product>
                        )
                    }
                </div>
                <button onClick={() => navigate('/shop')} className='btn mb-12 block mx-auto capitalize bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none'>All Products</button>
            </div>
            <AboutCompany></AboutCompany>
            <div>
                <h2 className="text-4xl font-bold text-center mt-16 mb-6 text-primary">Our Company Reviews</h2>
                <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                    {
                        reviews.slice(0,3).map(review => <Reviews
                            key={review._id}
                            review={review}
                        ></Reviews>)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className='btn mb-12 block mx-auto capitalize bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none'>All Reviews</button>
            </div>
            
        </div>
    );
};

export default Home;