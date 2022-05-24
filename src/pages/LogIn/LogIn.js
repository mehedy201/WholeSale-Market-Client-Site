import React from "react";
import googleIcon from '../../images/social-icon/google.png'
import githubIcon from '../../images/social-icon/github.png'
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from "../../shared/Spinner/Spinner";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";


const LogIn = () => {
    // Use Navigate --------------
    const navigate = useNavigate()

    // Login by email and password using Firebase hooks --------------
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    // Google Sign In --------------
    const [signInWithGoogle, goUser, goLoading, goError] = useSignInWithGoogle(auth);

    // Use React hooks form  --------------
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        signInWithEmailAndPassword(data.email, data.password)
        reset();
    };

    // Use location 
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    
    //   Condition User, Loading and Error --------------
    let load;
    if(loading || goLoading){
        load = <Spinner></Spinner>
    }
    if(user || goUser){
        return navigate(from, { replace: true });
    }
    let logInError;
    if(error || goError){
        logInError = <p className="text-red-500">{error?.message} {goError?.message}</p>;
    }

    // Sing Up Button Navigate 
    const singUpButton = () => {
        navigate('/sign-up')
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
                         <input className="btn rounded-full w-[50%] mx-auto" type="submit" value={'Log In'}/>
                    </div>
                </form>
                {/* ------------------ Navigate sign up handle ------------------ */}
                <p>Don't have account Please <button 
                    onClick={singUpButton} 
                    className="btn btn-sm text-blue-500 btn-link py-0"
                    >Sign Up</button></p>
                    {/* Load Spinner and Error Meassge  */}
                {load}
                {logInError}
              <div className="divider">OR</div>
              {/* ------------------ Social Sing In ------------------ */}
              {/* Google Sign In  */}
                <button 
                    onClick={() => signInWithGoogle()} 
                    className="btn w-[90%] mx-auto btn-sm bg-secondary border-none rounded-full">
                    <span><img width={22} className='h-auto mx-4' src={googleIcon} alt="" /></span>
                    Continue to Google</button>
                {/* GitHUb Sign In  */}
                <button 
                    className="btn w-[90%] mx-auto btn-sm bg-secondary border-none rounded-full">
                    <span><img width={22} className='h-auto mx-4' src={githubIcon} alt="" /></span> 
                    Continue to GitHub</button>
            </div>
        </div>
      </div>
  );
};

export default LogIn;
