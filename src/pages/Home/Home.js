import React, { useEffect, useState } from 'react';
import './Home.css'
import heroImg from '../../images/heroimg.jpeg'
import Product from '../Shop/Product';
import PurcessModal from '../Shop/PurcessModal';
import { useNavigate } from 'react-router-dom';
import AboutCompany from './AboutCompany';

const Home = () => {
    // useState for product
    const [products, setProducts] = useState([]);
    const [addedForModal, setAddedForModal] = useState(null);
    // Use effect and fetch product
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // Navigate Shop page
    const navigate = useNavigate();
   

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="flex-1">
                      <img src={heroImg} className="rounded-lg" alt='Hero_image'/>
                  </div>
                  <div className='flex-1 pe-12'>
                    <h1 className="text-5xl font-bold">Best Glue gun 2022!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-center mt-12 mb-6">Shop</h2>
                <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                        products.slice(3).map(product => 
                            <Product
                                key={product.id}
                                product={product}
                                setAddedForModal={setAddedForModal}
                                ></Product>
                        )
                    }
                </div>
                <button onClick={() => navigate('/shop')} className='btn mb-12 block mx-auto capitalize'>All Products</button>
                {
                    addedForModal && <PurcessModal 
                    key={addedForModal.id}
                    addedForModal={addedForModal}
                ></PurcessModal>
            }
            </div>
            <AboutCompany></AboutCompany>
        </div>
    );
};

export default Home;