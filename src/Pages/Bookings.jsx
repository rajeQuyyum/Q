import React from 'react'

export default function Bookings() {
  return (
    

    <section className='bg-slate-300 py-5'>

        <h1 className='text-center text-4xl text-green-900 pb-10'>Bookings</h1>

       
            <h1 className='text-center py-5 text-3xl font-normal'>Rent Options</h1>
            <div className='flex flex-col md:flex-row justify-center md:gap-48 mb-5 md:mx-2 mx-2'>

            <div className='flex gap-8 mb-5 '>

    <div className='flex gap-1 items-center'>
             
        <label htmlFor="Round trip">Rent</label>
        <input type="radio" name='lang' value='round trip' id='round trip' required />
    </div>

    <div className='flex gap-1 items-center'>
              <input type="checkbox" name="user_agree"  id="" required />
              <label htmlFor="">Accept terms and conditions</label>
            </div>

    </div>

    <div className='mb-5'>
        <label className='block' htmlFor="destination">Loction</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="" required>

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


    <div className='mb-5'>
        <label className='block' htmlFor="destination">Duration</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="">

        <option value="">5 Days</option>
                <option value="">1 Month</option>
                <option value="">3 Months</option>
                <option value="">6 Months</option>
                <option value="">9 Months</option>
                <option value="">1 Year</option>
                <option value="">2 Years</option>
                <option value="">3 Years</option>
                <option value="">4 Years</option>
                
            </select>
    </div>

    

            


        </div>





        <h1 className='text-center py-5 text-3xl font-normal'>Sell Options</h1>
            <div className='flex flex-col md:flex-row justify-center md:gap-48 mb-5 md:mx-2 mx-2'>

            <div className='flex gap-8 mb-5 '>
            

    <div className='flex gap-1 items-center'>
             
        <label htmlFor="Round trip">Sell</label>
        <input type="radio" name='lang' value='round trip' id='round trip' />
    </div>


    <div className='flex gap-1 items-center'>
              <input type="checkbox" name="user_agree"  id="" required />
              <label htmlFor="">Accept terms and conditions</label>
            </div>
    </div>

    <div className='mb-5'>
        <label className='block' htmlFor="destination">Loction</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="" required>

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


    <div className='mb-5'>
        <label className='block' htmlFor="destination">Houses</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="">

        <option value="">Selfcon</option>
                <option value="">Duplex</option>
                <option value="">Detached Duplex</option>
                <option value="">1 Bedroom</option>
                <option value="">2 Bedroom</option>
                <option value="">3 Bedroom</option>
                <option value="">5 Bedroom</option>
                <option value="">Bungalow</option>
                <option value="">Bq</option>
                
            </select>
    </div>

    

            


        </div>



        <h1 className='text-center py-5 text-3xl font-normal'>Buy Options</h1>
            <div className='flex flex-col md:flex-row justify-center md:gap-48 mb-5 md:mx-2 mx-2'>

            <div className='flex gap-8 mb-5 '>
            <div className='flex gap-1 items-center'>
             
        <label htmlFor="one way">Buy</label>
        <input type="radio" name='lang' value='one way' id='one way' required />
    </div>

    

    <div className='flex gap-1 items-center'>
              <input type="checkbox" name="user_agree"  id="" required />
              <label htmlFor="">Accept terms and conditions</label>
            </div>

    </div>

    <div className='mb-5'>
        <label className='block' htmlFor="destination">Loction</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="">

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


    <div className='mb-5'>
        <label className='block' htmlFor="destination">Houses</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="">

        <option value="">Selfcon</option>
                <option value="">Duplex</option>
                <option value="">Detached Duplex</option>
                <option value="">1 Bedroom</option>
                <option value="">2 Bedroom</option>
                <option value="">3 Bedroom</option>
                <option value="">5 Bedroom</option>
                <option value="">Bungalow</option>
                <option value="">Bq</option>
                
            </select>
    </div>

    

            


        </div>



        <button className='block m-auto bg-black text-white w-20 h-10 rounded-md'>Submit</button>





    </section>
  )
}
