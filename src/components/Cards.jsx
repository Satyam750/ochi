import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-20 gap-5'>
        <div className="cardcontainer h-[60vh]  w-1/2">
              <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center'>
                 <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                 <button className='absolute left-8 bottom-5 rounded-full px-4 py-2 border-[2px] border-[#CDEA68] text-[#CDEA68] font-medium text-[1vw]'>&copy;2019-2024</button>
              </div>
              
        </div>
        <div className="cardcontainer h-[60vh] flex gap-5 w-1/2">
        <div className='card relative rounded-xl w-full h-full bg-[#212121]  flex justify-center items-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-8 bottom-5 rounded-full px-4 py-2 border-[2px] border-zinc-200 text-zinc-200  font-medium text-[1vw] uppercase'>Rating 5.0 on clutch</button>
        </div>
        <div className='card relative rounded-xl w-full h-full bg-[#212121]  flex justify-center items-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-8 bottom-5 rounded-full px-4 py-2 border-[2px] border-zinc-200 text-zinc-200 font-medium text-[1vw] uppercase'>Business Bootcamp Alumin</button>
        </div>
        </div>
    </div>
  )
}

export default Cards