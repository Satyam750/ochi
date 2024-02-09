import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='neu text-5xl leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech <br /> businesses that need to raise funds, sell prod­ucts, <br /> ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full border-t-[1px] mt-20 pt-20 border-[#252a17] flex gap-5'>
               <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More</button>
               </div>
               <div className="w-1/2 h-[60vh]" >
                <img className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
               </div>
        </div>
    </div>
  )
}


export default About