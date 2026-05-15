import React from 'react'
import profilImg from '../assets/profil.png'

const Hero = () => {
  return (
    <section id='home' className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-30 pt-24'>
        <div className='order-2 lg:order-1 mb-7 lg:mb-0'>
            <h1 className='text-white text-3xl lg:text-5xl font-bold mb-0 lg:mb-1'>HI, I am</h1>
            <h1 className='bg-gradient-to-r from-[#34D399] to-[#23A7B9] bg-clip-text text-transparent text-3xl lg:text-5xl font-bold mb-0 lg:mb-1'>RAHERINIRINA</h1>
            <h1 className='bg-gradient-to-r from-[#38BDF8]/59 to-[#38BDF8] bg-clip-text text-transparent text-3xl lg:text-5xl font-bold mb-0 lg:mb-1'>Fitiavana</h1>
            <p className='mb-1 text-text-muted'>I build <span className='text-white font-bold'>web interfaces</span></p>
            <div className='mt-3 flex gap-4'>
                <button className='bg-primary text-text-dark px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-dark hover:text-primary hover:border hover:border-primary transition-all duration-300'>View my projects</button>
                <button className='border border-white/70 text-white/90 px-6 py-3 rounded-lg cursor-pointer hover:text-primary hover:border-none transition-all duration-300'>Contact me</button>
            </div>
        </div>
        <div className='order-1 lg:order-2 relative flex items-center justify-center mt-10 lg:mt-0'>
            <div className="absolute w-72 h-72 bg-primary rounded-full blur-xl opacity-20"></div>
            <img src={profilImg}  className='relative rounded-full w-60 h-60 object-cover'/>
        </div>
    </section>
  )
}

export default Hero
