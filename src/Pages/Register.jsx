import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
    const {createUser,updateUserProfile,user,setUser,handleGoogleUser}=use(AuthContext)
    const [passwordError, setPasswordError] = useState('');
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const {email,password,name,photo}=Object.fromEntries(formData.entries())
        setPasswordError("")
        // password validation start
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (passwordPattern.test(password) == false) {
            setPasswordError("Password Length must be at least 6 characters And Must have an Uppercase and a Lowercase letter");
            return;
        }
        // password validation end
        // FIREBASE USER 
        createUser(email,password)
        .then((result)=>{
            alert("user created")
            console.log(result);
            //update profile here
            updateUserProfile({displayName:name,photoURL:photo})
            .then(()=>{
                setUser({...user,displayName:name,photoURL:photo})
            })
            .catch((error)=>{
                alert("updated error")
                console.log(error);
            })

        })
        .catch((error)=>{
            alert("error occured")
            console.log(error);
        })
    }
    const handleGoogleRegister=()=>{
         handleGoogleUser()
        .then((result)=>{
            alert("google user logged in")
            console.log("google info",result);
        })
        .then((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error,errorCode,errorMessage);
        })
    }
    return (
        <div>
            <div className='py-24 bg-gradient-to-b from-[#000626] to-[#0e315b]'>
            {/* <div className="dynamic-title">
                <Helmet>
                    <title>Register</title>
                </Helmet>
            </div> */}
            <div className="container mx-auto">
                <div className="title text-center space-y-2 py-6">

                    <h1 className='text-3xl font-bold text-[#c0b4d1]'>Register Your Account Now</h1>
                    <h5 className='text-xl font-semibold text-gray-300 my-6'>Please enter your details to Register.</h5>
                </div>
                <div className="card bg-[#000728] w-full max-w-7xl mx-auto shrink-0 shadow-2xl py-16">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className='flex flex-col justify-center items-center'>
                            <label className="w-9/12 text-left label text-xl text-pink-300">Name</label><br />
                            <input name='name' type="text" className=" input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Name" /><br />
                            <label className="w-9/12 text-left label text-xl text-pink-300">Photo Url</label><br />
                            <input name='photo' type="text" className=" input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Photo Url" /><br />
                            <label className="w-9/12 text-left label text-xl text-pink-300">Email</label><br />
                            <input name='email' type="email" className=" input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Email" /><br />

                            <label className="w-9/12 text-left label text-xl text-pink-300">Password</label><br />
                            <input name='password' type="password" className="input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Password" />
                            <div className='pt-3 w-9/12'>
                                <a className="text-left text-[16px] link link-hover text-pink-300">Forgot password?</a>
                            </div>
                            {/* password error */}
                             <div className='py-2 w-9/12'>
                                {
                                    passwordError && <h2 className='text-red-600 text-xl '>{passwordError}</h2>
                                }
                            </div> 
                            <button className="btn w-9/12 bg-[#011133] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">Register</button>
                        </form>
                        {/* social login start */}
                        <div className="border-t border-[#fce7f350] py-3 mt-5 social-login w-full flex flex-col items-center justify-center">
                            <h2 className='border-b border-[#fce7f350] w-full text-center border[#fce7f350] pb-5 text-2xl font-bold text-gray-300'>Or</h2>
                            {/* Google */}
                            <button onClick={handleGoogleRegister} className="mt-5 w-9/12 mx-auto btn bg-white text-black border-[#e5e5e5] text-xl p-8 rounded-xl">
                                <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>
                        </div>
                        {/* DONT HAVE ACCOUNT START HERE*/}
                        <div>
                            <h5 className='w-9/12 mx-auto text-xl text-gray-300'>Already have an account? <Link to='/auth/login' className='text-pink-600 font-bold'>Login</Link> Here</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;