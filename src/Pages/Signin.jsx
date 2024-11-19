import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Signin() {
  return (






    <section className='in py-20'>

    <h1 className='text-center text-3xl font-semibold pb-16'>Sign In</h1>

    <div className='flex flex-col items-center gap-5 mb-3'>
      <div className='w-[90%] md:w-[700px]'>
      <label className='block' htmlFor="email or phone">Email Or Phone</label>
      <input className='border border-gray-400 w-full  h-12 rounded-md' type="text" name="" id="" />
      </div>

      <div className='w-[90%] md:w-[700px]'>
      <label className='block ' htmlFor="password">Password</label>
      <input className='border border-gray-400 w-full h-12  rounded-md' type="password" name="" id="" />
      </div>
    </div>

    
    <button className='block m-auto bg-blue-900 w-[150px] h-12 rounded-md text-white mb-3'>Login</button>
    


      <div className='text-center'>
    <h1 className='text-black text-lg'><span className='text-lg font-extralight text-gray-400'>Don't have an account? </span></h1>
    <l1><NavLink className='text-black text-lg'  to="/signup">sign up</NavLink></l1>
    </div>

    <div className='text-center'>
    <h1 className='text-black text-lg'><span className='text-lg font-extralight text-gray-400'>Forgot you password?</span> Reset here</h1>
    </div>

  </section>
  )
}

