import React from 'react'

export default function Contact() {
  return (
    
     <section className='py-10'>
        <h1 className='text-4xl text-center text-red-400'>Contact Us</h1>
    <div className='bg-white lg:w-[1250px] w-full block m-auto rounded-md py-10 mb-10'>
    <div className='lg:w-[1200px] w-full mb-10 m-auto block'>
    <hr />
    </div>

    <div className='lg:w-[1200px] w-full flex flex-col gap-2 m-auto px-2 mb-10' >
      <input className='border boder h-20 rounded-md px-2' type="text" placeholder='First Name' />
      <input className='border boder h-20 rounded-md px-2' type="text"  placeholder='Last Name'/>
      <input className='border boder h-20 rounded-md px-2' type="text" placeholder='Email' />
      <textarea className='border boder h-40 rounded-md resize-none px-2' name="" id="" placeholder='Message'></textarea>
    </div>

    <button className='bg-blue-600 block m-auto lg:w-[1200px] w-[100px] h-14   rounded-md text-white'>Submit</button>
  </div>
  </section>

  )
}
