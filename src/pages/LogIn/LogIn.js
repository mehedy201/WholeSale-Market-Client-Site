import React from "react";
import googleIcon from '../../images/social-icon/google.png'
import githubIcon from '../../images/social-icon/github.png'
import auth from "../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from "../../shared/Spinner/Spinner";
import { useForm } from "react-hook-form";


const LogIn = () => {
    // Google Sign In
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);




    // Use React hooks form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);





    if(user){
        console.log(user);
    }
    let load;
    if(loading){
        load = <Spinner></Spinner>
    }
    let logInError;
    if(error){
        logInError = <p className="text-neutral">{error.message}</p>;
    }
  return (
      <div className="flex h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl border ">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Log In!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
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
                         <input onClick={onSubmit} className="btn" type="submit" value={'Log In'}/>
                    </div>
                </form>

                {load}
                {logInError}
              <div className="divider">OR</div>
              {/* ------------------ Social Sing In ------------------ */}
              {/* Google Sign In  */}
                <button 
                    onClick={() => signInWithGoogle()} 
                    className="btn btn-sm bg-secondary border-none rounded-full">
                    <span><img width={22} className='h-auto mx-4' src={googleIcon} alt="" /></span>
                    Continue to Google</button>
                {/* GitHUb Sign In  */}
                <button 
                    className="btn btn-sm bg-secondary border-none rounded-full">
                    <span><img width={22} className='h-auto mx-4' src={githubIcon} alt="" /></span> 
                    Continue to GitHub</button>
            </div>
        </div>
      </div>
  );
};

export default LogIn;
