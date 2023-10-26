import React from 'react'

import { BiCopy } from 'react-icons/bi';
import { FaBirthdayCake } from 'react-icons/fa';
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import Navbar from './components/Navbar';
import { useAuthUser } from "react-auth-kit";
import { toast, Toaster } from 'react-hot-toast'
import Logout from './components/Logout';

const Dashboard = () => {
    const auth = useAuthUser();
    const data = auth().data;


    const handleCopy = () => {
        const textToCopy = data.userName;
        navigator.clipboard.writeText(textToCopy)
            .then(() => toast.success('Text to be copied'))
            .catch(err => toast.error('Something went wrong'));
    }
    return (
        <div className='container mx-auto'>
            <div className='p-1 bg-[#0894E3] rounded-full max-w-max mx-auto mt-10'>
                <div className='p-2 bg-[#fff] rounded-full max-w-max'>
                    <img className='rounded-full w-[300px] h-[300px]' src={`/api/image/${data.file}`} alt="profile" />
                </div>
            </div>

            <div onClick={handleCopy} className='mx-auto text-center px-3 py-2 rounded-md bg-[#DCDCDC] max-w-max flex justify-center items-center space-x-2 cursor-pointer mt-5 hover:shadow-md'>
                <span >{data.userName}</span>
                <span><BiCopy /></span>
            </div>

            <h1 className='text-center text-6xl font-josefin mt-7 text-[#2b2b2b] capitalize'>{`${data.firstName} ${data.middleName} ${data.lastName}`}</h1>
            <p className='text-center text-4xl font-poppins mt-4 text-[#2b2b2b] font-light capitalize'>{data.hobby}</p>

            <div className='flex justify-center items-center flex-col mt-10 space-y-4'>

                <div className='flex justify-center items-center space-x-2 text-2xl'>
                    <FaBirthdayCake /> <span>{data.age.split("T")[0]}</span>
                </div>
                <div className='flex justify-center items-center space-x-2 text-2xl'>
                    {data.gender === "male" ? <div className='flex justify-center items-center space-x-2'><BiMaleSign /> <span>Male</span></div> : <div className='flex justify-center items-center space-x-2'><BiFemaleSign /> <span>Female</span></div>}
                </div>
            </div>
            <Logout />
            <Navbar />
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

export default Dashboard