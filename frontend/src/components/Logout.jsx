import React from 'react'
import { useSignOut } from 'react-auth-kit'
import { IoMdLogOut } from 'react-icons/io'

const Logout = () => {
    function deleteAllCookies() {
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        window.location.replace("/login");
    }
    return (
        <div onClick={() => deleteAllCookies()} className='absolute top-10 right-10 text-3xl p-2 rounded-full bg-red-400 text-white cursor-pointer'><IoMdLogOut /></div>
    )
}

export default Logout
