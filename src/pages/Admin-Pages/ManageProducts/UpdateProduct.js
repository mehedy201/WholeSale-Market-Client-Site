import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();

    const [updatedProducts , setUpdatedProducts] = useState([]);

    useEffect(() => {
        fetch(`https://glacial-beyond-96799.herokuapp.com/products/${id}`,{
            method: 'GET',
            headers: {
            'autherization': `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res => res.json())
        .then(data => setUpdatedProducts(data))
    },[]);

    const {name, price, img, des, quantity} = updatedProducts;



    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        if(errors){
            console.log('error')
        }
        // Send Product Data to server
        console.log(data);
    };
    return (
        <div className="md:px-12 xl:px-12">
        <h2 className="text-2xl font-semibold my-2">You Can Update Information</h2>
            <div className='w-full'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full">
                      {/* ------------------ Product Name ------------------ */}
                        <span className='mb-1'>Title</span>
                       {
                           updatedProducts?.name && <input 
                           type="text" 
                           name='name'
                           defaultValue={name}
                           placeholder="Title" 
                           className="input input-bordered w-full h-10 mb-4 rounded-md"
                           {...register("name", { required: true })} 
                           />
                       }
                      {/* ------------------ Product Price ------------------ */}
                        <span className='mb-1'>Price</span>
                       {
                           updatedProducts?.name && <input 
                           type="number" 
                           name='price'
                           defaultValue={price}
                           placeholder="Product Price" 
                           className="input input-bordered w-full h-10 mb-4 rounded-md"
                           {...register("price", { required: true })} 
                           />
                       }
                       {/* ------------------ Product Quantity ------------------ */}
                       <span className='mb-1'>Quantity</span>
                       {
                           updatedProducts?.name && <input 
                           type="number"
                           name='quantity' 
                           defaultValue={quantity}
                           placeholder="Product Quantity (Min: 100)" 
                           className="input input-bordered w-full h-10 mb-4 rounded-md"
                           {...register("quantity", {required: true,})}
                           />
                       }
                       {/* ------------------ Product Image Link ------------------ */}
                       <span className='mb-1'>Product image link</span>
                       {
                           updatedProducts?.name && <input 
                           type="text"
                           name='img'
                           defaultValue={img} 
                           placeholder="Product Image Link" 
                           className="input input-bordered w-full h-10 mb-4 rounded-md"
                           {...register("img", {required: true,})}
                           />
                       }
                       {/* ------------------ Product Description ------------------ */}
                       <span className='mb-1'>description</span>
                       {
                           updatedProducts?.name && <textarea 
                           type="textarea"
                           name='des' 
                           defaultValue={des}
                           placeholder="Product Description" 
                           className="textarea  input-bordered w-full h-24 mb-4"
                           {...register("des", {required: true,})}
                           />
                       }
                       {/* ------------------ Submit Button ------------------ */}
                       <input className="btn btn-sm text-white block w-32" type="submit" value={'Update'}/>
                  </div>
              </form>
        </div>
    </div>
    );
};

export default UpdateProduct;