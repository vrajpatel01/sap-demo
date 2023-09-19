import React from 'react'
import { useSignOut } from 'react-auth-kit'
import { IoMdLogOut } from 'react-icons/io'

const Logout = () => {
    const signOut = useSignOut();
    return (
        <div onClick={() => signOut()} className='absolute top-10 right-10 text-3xl p-2 rounded-full bg-red-400 text-white cursor-pointer'><IoMdLogOut /></div>
    )
}

export default Logout