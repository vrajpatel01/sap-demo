import React from 'react'
import Navbar from './components/Navbar'
import { useAuthUser } from "react-auth-kit";
import { toast, Toaster } from 'react-hot-toast'

import { BiSolidHomeHeart } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import Logout from './components/Logout';

const Contentme = () => {
    const auth = useAuthUser();
    const data = auth().data;

    const handleCopy = (text) => {
        const textToCopy = text;
        navigator.clipboard.writeText(textToCopy)
            .then(() => toast.success('Text to be copied'))
            .catch(err => toast.error('Something went wrong'));
    }
    return (
        <div className="max-w-[800px] mx-auto">
            <div className="mt-10 flex justify-start items-center space-y-5 flex-col">
                <img className="w-16 h-16 rounded-full ring-4" src={`/api/image/${data.file}`} alt="profile" /> <span className="capitalize text-2xl font-josefin text-[#2b2b2b]">{data.firstName} {data.lastName}</span>
            </div>

            <div className='flex justify-center items-center flex-col gap-3 mt-10'>
                <div className='flex justify-center items-center space-x-2 text-2xl p-3 rounded-md bg-slate-200 whitespace-nowrap'>
                    <BiSolidHomeHeart /> <span>{data.address}</span>
                </div>
                <div onClick={() => handleCopy(data.email)} className='flex justify-center items-center space-x-2 text-2xl p-3 bg-slate-200 rounded-md max-w-min whitespace-nowrap first-letter cursor-pointer'>
                    <MdEmail /> <span>{data.email}</span>
                </div>
                <div onClick={() => handleCopy(data.phone)} className='flex justify-center items-center space-x-2 text-2xl p-3 bg-slate-200 rounded-md max-w-min whitespace-nowrap cursor-pointer'>
                    <AiTwotonePhone /> <span className='tracking-wide'>{data.phone}</span>
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

export default Contentme