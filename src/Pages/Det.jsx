import React from 'react'
import vid2 from '../assets/vid2.mp4'
import vid from '../assets/vid.mp4'

export default function Det() {
  return (
    


    <section className='py-10'>


        <div className='flex-wrap flex justify-center gap-5'>

            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>
                <h1 className='mb-2'>Living Room</h1>
                <div className=' mb-3'>
                <img className=' md:w-[580px] w-full h-[380px]' src="https://st.hzcdn.com/simgs/pictures/living-rooms/modern-living-room-debra-ackerbloom-interiors-llc-img~c971036c0bdc4f53_14-9822-1-a92e8d5.jpg" alt="" />
                </div>
            </div>


            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>
                <h1 className='mb-2'>Room</h1>
                <div className=' mb-3'>
                <img className=' md:w-[580px] w-full h-[380px]' src="https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Standard-Room1-e1464286427430.jpg" alt="" />
                </div>
            </div>


            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>
                <h1 className='mb-2'>Kitchen</h1>
                <div className=' mb-3'>
                <img className=' md:w-[580px] w-full h-[380px]' src="https://cdn.prod.website-files.com/64886deb8d480dcaed316cb3/65d73bc5d947bcec2ccc2e33_unveiling-the-perfect-fit-what-are-the-dimensions-of-a-kitchen-island.webp" alt="" />
                </div>
            </div>

            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>
                <h1 className='mb-2'>Family </h1>
                <div className=' mb-3'>
                <img className=' md:w-[580px] w-full h-[380px]' src="https://intdesigners.com/wp-content/uploads/2023/01/average-living-room-size-1-1.png" alt="" />
                </div>
            </div>

            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>
                <h1 className='mb-2'>Roof Top</h1>
                <div className=' mb-3'>
                <img className=' md:w-[580px] w-full h-[380px]' src="https://st.hzcdn.com/simgs/6c41a4b50905a7d8_14-1744/_.jpg" alt="" />
                </div>
            </div>

            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>
                <h1 className='mb-2'>Bathroom</h1>
                <div className=' mb-3'>
                <img className=' md:w-[580px] w-full h-[380px]' src="https://cdn.habitusliving.com/wp-content/uploads/2024/02/1.bathroomfeat.jpg" alt="" />
                </div>
            </div>

            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>

             <img src={vid} alt="" />
            </div>



            <div className='lg:w-[600px] md:w-[390px] Buy  flex flex-col items-center bg-slate-300 md:px-2 px-3 md:mx-0 mx-2'>
                <img src={vid2} alt="" />

            </div>

              
              

            
        </div>
    </section>
  )
}
