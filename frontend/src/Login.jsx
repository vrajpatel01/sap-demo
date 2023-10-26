import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

import { HiOutlineMail } from 'react-icons/hi';
import { CgLastpass } from 'react-icons/cg';
import { toast, Toaster } from 'react-hot-toast'


const Login = () => {

    const signIn = useSignIn();
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = await fetch(`/api/login?email=${email}&password=${password}`)
        const res = await data.json();
        // toast.success(response.data.message);

        if (res.login === true) {
            signIn({
                expiresIn: 360,
                authState: {
                    data: res.data,
                },
            });
            navigate("/", { replace: true });
        } else {
            toast.error(res.message);
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='bg-white p-6 rounded-md shadow-md divide-y space-y-8'>
                <form onSubmit={handleFormSubmit} className="flex justify-center items-center flex-col space-y-4">
                    <h1 className='text-3xl text-[#2b2b2b] font-medium text-center mb-4'>Login</h1>
                    <div className='space-y-2'>
                        <div className='flex justify-start items-center space-x-2'>
                            <HiOutlineMail />
                            <p className='text-[#2b2b2b]'>Email Address</p>
                        </div>
                        <input onChange={(e) => setEmail(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm px-4 py-3 min-w-[350px]' type="email" name="email" id="email" placeholder='example@example.com' />
                    </div>
                    <div className='space-y-2'>
                        <div className='flex justify-start items-center space-x-2'>
                            <CgLastpass />
                            <p className='text-[#2b2b2b]'>Password</p>
                        </div>
                        <input onChange={(e) => setPassword(e.target.value)} className='outline-none ring-2 bg-slate-50 rounded-sm my-4 px-4 py-3 min-w-[350px]' type="password" name="pass" id="pass" placeholder='enter 8 character or more' />
                    </div>

                    <input className='px-4 py-3 rounded-sm bg-blue-400 w-full cursor-pointer font-bold text-white' type="submit" value="Sign in" />
                </form>

                <h2 className='pt-5 text-center'>if you don't have account please <Link className='text-blue-700 font-medium' to="/signup">sign up</Link> first</h2>

            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#fff',
                        color: '#2b2b2b',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
    )
}

export default Login