import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {

    // Use React hooks form  --------------
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        
        fetch('https://wholesale-server.onrender.com/user-review',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.success){
                toast('Added Your Review')
                reset();
            }
                
        })
    };
    



    return (
        <div className='my-12'>
            <h2 className='text-3xl'>Please add your Review!!!!</h2>
            <p>Your Review is very importent for my Shop.</p>
            <div className="flex justify-center items-center my-6">
                <div className="card w-[50%] bg-base-100 shadow-xl border ">
                  <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Your Importent Review!</h2>
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-control w-full">
                              {/* ------------------ Name Field ------------------ */}
                               <input 
                                  type="text" 
                                  name='photoUrl'
                                  placeholder="Please pest your Photo URL" 
                                  className="input input-bordered w-full"
                                  {...register("photoUrl", { required: true })} 
                                  />
                               <label className="label">
                                  {errors.email?.type === 'name' && <span className="text-red-500">{errors.name.message}</span> }
                               </label> 
                              {/* ------------------ Email Field ------------------ */}
                               <textarea 
                                  type="text" 
                                  name='description'
                                  placeholder="Please Type your Review" 
                                  className="input input-bordered w-full textarea h-24"
                                  {...register("description", { required: true })} 
                                  />
                               <label className="label">
                                  {errors.email?.type === 'required' && <span className="text-red-500">{errors.email.message}</span> }
                               </label> 

                               {/* ------------------ Submit Button ------------------ */}
                               <input className="btn w-[50%] mx-auto" type="submit" value={'Add Review'}/>
                          </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;