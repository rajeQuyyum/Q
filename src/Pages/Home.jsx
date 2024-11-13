import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    
    <section className='good py-10'>
        <div className='flex flex-col  items-center gap-5 mb-5'>
        <h1 className='text-5xl font-extrabold text-red-500'>welcome</h1>
        <h1 className='md:w-[500px] text-4xl md:px-0 px-2 font-medium text-white'>Discover Your New Home</h1>
        <p className='md:w-[700px] w-full md:px-0 px-2  text-2xl font-bold text-white'>making it easy for Nigerian, Find their perfect fit, Get ready.</p>
        </div>

      

        <div className='flex flex-col md:flex-row gap-5 justify-center mb-5'>
        <div className='px-4 md:px-0'>
        <label className='text-2xl  text-white  px-2' htmlFor="location">Location</label>
        <select className='md:w-[250px] w-[400px]   h-10 border border-transparent' name="" id="">
                <option value="">Abuja</option>
                <option value="">Lagos</option>
                <option value="">Akure</option>
                <option value="">PH</option>
                <option value="">Benin</option>
                <option value="">Enugu</option>
                <option value="">Kano</option>
                <option value="">Asaba</option>
                <option value="">Jos</option>

                
                
            </select>
            </div>

            <div className='px-4 md:px-0'>
                <button className='md:bg-red-500 text-white py-2 px-3 md:w-[150px] w-[400px] bg-green-400 rounded-md'>Search</button>
            </div>
            </div>


            <div className='list-none flex gap-3 justify-center'>
        <li><NavLink className="text-white bg-red-500 px-3 py-2 rounded-md w-60" to="buy">Buy</NavLink></li>
        <li><NavLink className="text-white bg-red-500 px-3 py-2 rounded-md" to="sell">Sell</NavLink></li>
        <li><NavLink className="text-white bg-red-500 px-3 py-2 rounded-md" to="rent">Rent</NavLink></li>
        </div>


    </section>
  )
}
