import React from 'react'

export default function Signup() {
  return (
    


    <div className="up flex justify-center py-12">
        <form action="" className='w-[90%] md:w-[700px]'>
            <h1 className="text-center font-semibold text-2xl mb-5">Sign <span className='text-orange-600'>Up</span></h1>

            <input type="Name" name=""  id="" placeholder=' Name' required className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="Email" name="" id="" placeholder='Email' required className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="text" name="" id="" placeholder='User name' required className="w-full h-10 border rounded-md mb-3 px-2" />
            <input type="text" name="user_lastName"  id="" placeholder='Last Name' required className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="text" name="user_otherName"  id="" placeholder='Other Name' required className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="text" name="user_phoneNo"  id="" placeholder='Phone No' required className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="text" name="user_country"  id="" placeholder='Country' required className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="text" name="user_state"  id="" placeholder='State' required className="w-full h-10 border rounded-md mb-3 px-2"  />
           
           
           
            <div>
              <input type="checkbox" name="user_agree"  id="" required />
              <label htmlFor="">Accept terms and conditions</label>
            </div>
            <button className='text-white bg-black block mx-auto mt-8 px-4 py-1 rounded-md hover:scale-105' >Sign up</button>
        </form>
    </div>
  )
}
