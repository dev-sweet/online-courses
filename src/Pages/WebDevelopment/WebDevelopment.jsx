import React from 'react'
import web from '../../assets/web-development.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css.avif'
import js from '../../assets/js.png'
import bootstrap from '../../assets/bootstrap.webp'
import react from '../../assets/react.webp'
import next from '../../assets/next-js.webp'
const WebDevelopment = () => {
  return (
    <div className=' p-16 lg:p-16'>
      <section className="grid lg:grid-cols-2 gap-2 lg:gap-4">
        <div className='flex flex-col justify-center items-start text-[#1e3a8a]'>
          <h4 className='text-xl'>DISCOVER RESEARCH</h4>
          <h1 className='lg:text-6xl md:text-5xl text-5xl my-6'>Start your journy in web development with us</h1>
          <div className="flex gap-2 py-5">
            <div className="w-16">
              <img className='w-full' src={html} alt="" />
            </div>
            <div className="w-16">
              <img className='w-full' src={css} alt="" />
            </div>
            <div className="w-16">
              <img src={js} alt="w-full h-full" />
            </div>
            <div className="w-16 mx-1 p-1">
              <img className='w-full' src={bootstrap} alt="" />
            </div>
            <div className="w-16 mx-1 p-1">
              <img className='w-full' src={react} alt="" />
            </div>
            <div className="w-16">
              <img className='w-full' src={next} alt="" />
            </div>
          </div>
          <button className='btn btn-lg bg-[#06b6d4] text-white px-12 py-5 text-xl font-bold'>ENROLL NOW</button>
        </div>
        <div>
          <img className='w-full' src={web} alt="" />
        </div>
        </section>

    </div>
  )
}

export default WebDevelopment;