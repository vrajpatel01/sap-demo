import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0894E3] p-3 px-2 rounded-full space-x-3'>
            <NavLink activeclassname="active" className='py-2 px-5 rounded-full text-white' to='/'>Home</NavLink>
            <NavLink activeclassname="active" className='py-2 px-5 rounded-full text-white' to='/about'>About</NavLink>
            <NavLink activeclassname="active" className='py-2 px-5 rounded-full text-white' to='/contact'>Contact</NavLink>
        </div>
    )
}

export default Navbar