import React from 'react'
import { FaFacebook, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export default function Fot() {
  return (
   

    <footer className='py-10 md:px-20' >
        <h1 className='text-center mb-5 font-extrabold text-5xl'>Q-esate</h1>

        <div className='flex font-thin justify-between md:px-20 px-5 mb-5'>

            
               
                <ul className='flex flex-col gap-2'>
                    <h1 className='text-2xl'>Quick Links</h1>
                    <l1><NavLink to="/">Home</NavLink></l1>
                <l1><NavLink to="about">About</NavLink></l1>
                <l1><NavLink to="bookings">Bookings</NavLink></l1>
               <l1><NavLink to="contact">Contact</NavLink></l1>
                <l1><NavLink to="signin">Sign in</NavLink></l1>
               <l1><NavLink to="signup">sign up</NavLink></l1>
            
                </ul>

                <ul className='flex flex-col ga-2'>
                    <h1 className='text-2xl'>ADS</h1>
                    <li>Advertise</li>
                    <li>privacy Notice</li>
                    <li>Avoid Scams</li>
                    <li>Rent Calculator</li>
                    <li>SitMap</li>
                </ul>
                


            


        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>Socials</h1>
            <div className='flex items-center gap-1'>
              <FaFacebook />
              <h1>Facebook</h1>
            </div>
         <div className='flex items-center gap-1'>
         <FaXTwitter />
         <h1>X</h1>
         </div>
       <div className='flex items-center gap-1'>
       <FaSquareInstagram />
       <h1>Instagram</h1>
       </div>
        <div className='flex items-center gap-1'>
        <FaYoutube />
        <h1>Youtube</h1>
        </div>
       <div  className='flex items-center gap-1'>
       <FaTelegram />
       <h1>Telegram</h1>
       </div>
        <div className='flex items-center gap-1'>
        <FaTiktok />
        <h1>Tiktok</h1>
        </div>
        </div>
        </div>


        <div className='xl:w-[1250px] w-full'>
            <hr />
        </div>

        <div className='text-center'>
            <h1>© 2024 Q-estate</h1>
        </div>
    </footer>
  )
}
