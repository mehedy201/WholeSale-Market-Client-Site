import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProducts = () => {
    // React Hooks Form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        // Send Product Data to server
        fetch('https://glacial-beyond-96799.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success('Thanks!! Post Completed ')
                reset();
            }
        })
    };


    return (
        <div className="md:px-12 xl:px-12">
            <h2 className="text-2xl font-semibold my-2">Post Product</h2>
            <div className='w-full'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control w-full">
                          {/* ------------------ Product Name ------------------ */}
                            <span className='mb-1'>Add Product Title</span>
                           <input 
                              type="text" 
                              name='name'
                              placeholder="Product Title" 
                              className="input input-bordered w-full h-10 mb-4 rounded-md"
                              {...register("name", { required: true })} 
                              />
                          {/* ------------------ Product Price ------------------ */}
                            <span className='mb-1'>Add Product Price</span>
                           <input 
                              type="number" 
                              name='price'
                              placeholder="Product Price" 
                              className="input input-bordered w-full h-10 mb-4 rounded-md"
                              {...register("price", { required: true })} 
                              />
                           {/* ------------------ Product Quantity ------------------ */}
                           <span className='mb-1'>Add Product Quantity</span>
                           <input 
                              type="number"
                              name='quantity' 
                              placeholder="Product Quantity (Min: 100)" 
                              className="input input-bordered w-full h-10 mb-4 rounded-md"
                              {...register("quantity", {required: true,})}
                              />
                           {/* ------------------ Product Image Link ------------------ */}
                           <span className='mb-1'>Please Put Product image link</span>
                           <input 
                              type="text"
                              name='img' 
                              placeholder="Product Image Link" 
                              className="input input-bordered w-full h-10 mb-4 rounded-md"
                              {...register("img", {required: true,})}
                              />
                           {/* ------------------ Product Description ------------------ */}
                           <span className='mb-1'>Describe product description</span>
                           <textarea 
                              type="textarea"
                              name='des' 
                              placeholder="Product Description" 
                              className="textarea  input-bordered w-full h-24 mb-4"
                              {...register("des", {required: true,})}
                              />
                           {/* ------------------ Submit Button ------------------ */}
                           <input className="btn btn-sm text-white block w-32" type="submit" value={'Post'}/>
                      </div>
                  </form>
            </div>
        </div>
    );
};

export default AddProducts;