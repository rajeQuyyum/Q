import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
    const [display, setDisplay] = useState(false)
  return (
    

    <nav className='flex justify-between py-5 px-5  items-center bg-[#dfdfdf] '>
        <div>
            <h1 className='font-bold  lg:text-2xl text-4xl  px-0 italic lg:px-10  w-[200px]'><span className='text-red-400'>Q-</span>estate</h1>
        </div>
        <ul className={`flex flex-col md:w-[700px]  w-full justify-between px-5   md:bg-transparent bg-white font-normal md:flex-row items-center gap-2 top-20 py-6 md:py-0 absolute md:static transition-all delay-75 duration-75 ease-in-out ${display ? 'left-0' : 'left-[-100%]'}`}>
            <l1 onClick={() => setDisplay(prev => !prev)}><NavLink className='hover:bg-red-400' to="/">Home</NavLink></l1>
            <l1 onClick={() => setDisplay(prev => !prev)}><NavLink className='hover:bg-red-400' to="about">About</NavLink></l1>
            <l1 onClick={() => setDisplay(prev => !prev)}><NavLink className='hover:bg-red-400' to="bookings">Bookings</NavLink></l1>
            <l1 onClick={() => setDisplay(prev => !prev)}><NavLink className='hover:bg-red-400' to="contact">Contact</NavLink></l1>
            <l1 onClick={() => setDisplay(prev => !prev)}><NavLink className='hover:bg-red-400' to="signin">Sign in</NavLink></l1>
            <l1 onClick={() => setDisplay(prev => !prev)}><NavLink className='hover:bg-red-400' to="signup">sign up</NavLink></l1>
            
            
            
        </ul>
        <div className='px-10'>
        <input className='w-[200px] hidden lg:block rounded-full h-[40px] pl-2 bg-transparent text-black  border border-gray-500' type="text" placeholder='Search' />
        </div>

        <i className='md:hidden text-4xl' onClick={() => setDisplay(prev => !prev)}><FaBars /></i>
    </nav>
  )
}
