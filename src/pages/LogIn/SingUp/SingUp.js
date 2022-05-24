import React from 'react';
import Spinner from "../../../shared/Spinner/Spinner";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const SingUp = () => {
    // Use Navigate --------------
    const navigate = useNavigate();

    // Create User using Email and Password -------------
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    // Update Profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // Use React hooks form  --------------
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit =async data =>{
        const {email, password, name} = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        reset();
    };


    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    //   Condition User, Loading and Error --------------
    let load;
    if(loading || updating){
        load = <Spinner></Spinner>
    }
    if(user){
        navigate(from, { replace: true });
    }
    let logInError;
    if(error || updateError){
        logInError = <p className="text-red-500">{error?.message} {updateError?.message}</p>;
    }

    // Sing Up Button Navigate 
    const logInButton = () => {
        navigate('/log-in')
    }

    return (
    <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl border ">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Please Sign Up!</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">
                      {/* ------------------ Name Field ------------------ */}
                       <input 
                          type="name" 
                          placeholder="Type Your Name" 
                          className="input input-bordered w-full max-w-xs"
                          {...register("name", { required: true })} 
                          />
                       <label className="label">
                          {errors.email?.type === 'name' && <span className="text-red-500">{errors.name.message}</span> }
                       </label> 
                      {/* ------------------ Email Field ------------------ */}
                       <input 
                          type="email" 
                          placeholder="Type Your Email" 
                          className="input input-bordered w-full max-w-xs"
                          {...register("email", { required: true })} 
                          />
                       <label className="label">
                          {errors.email?.type === 'required' && <span className="text-red-500">{errors.email.message}</span> }
                       </label> 
                       {/* ------------------ Password Field ------------------ */}
                       <input 
                          type="password" 
                          placeholder="Type Your Password" 
                          className="input input-bordered w-full max-w-xs"
                          {...register("password", {
                               required: true,
                               minLength: {
                                  value: 6,
                                  message: 'Must be 6 chracters longer'
                              }
                          })}
                          />
                       <label className="label">
                          {errors.password?.type === 'required' && <span className="text-red-500">{errors.password.message}</span>}
                          {errors.password?.type === 'minLength' && <span className="text-red-500">{errors.password.message}</span>}
                       </label>
                       {/* ------------------ Submit Button ------------------ */}
                       <input className="btn" type="submit" value={'Sign Up'}/>
                  </div>
              </form>
              {/* ------------------ Navigate sign up handle ------------------ */}
              <p>If have account Please <button 
                  onClick={logInButton} 
                  className="btn btn-sm text-blue-500 btn-link py-0"
                  >Please Log In</button></p>
                  {/* Load Spinner and Error Meassge  */}
              {load}
              {logInError}
            
          </div>
      </div>
    </div>
    );
};

export default SingUp;