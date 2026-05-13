import React from 'react'
import profilImg from '../assets/profil.png'

const Hero = () => {
  return (
    <section className='w-full min-h-screen flex items-center justify-between px-30 pt-24'>
        <div>
            <h1 className='text-white text-5xl font-bold mb-1'>HI, I am</h1>
            <h1 className='bg-gradient-to-r from-[#34D399] to-[#23A7B9] bg-clip-text text-transparent text-5xl font-bold mb-1'>RAHERINIRINA</h1>
            <h1 className='bg-gradient-to-r from-[#38BDF8]/59 to-[#38BDF8] bg-clip-text text-transparent text-5xl font-bold mb-1'>Fitiavana</h1>
            <p className='mb-1 text-text-muted'>I build <span className='text-white font-bold'>web interfaces</span></p>
            <div className='mt-3 flex gap-4'>
                <button className='bg-emerald-400 text-text-dark px-6 py-3 rounded-lg font-semibold cursor-pointer'>View my projects</button>
                <button className='border border-white text-white px-6 py-3 rounded-lg cursor-pointer'>Contact me</button>
            </div>
        </div>
        <div className='relative flex items-center justify-center'>
            <div className="absolute w-72 h-72 bg-primary rounded-full blur-xl opacity-20"></div>
            <img src={profilImg}  className='relative rounded-full w-60 h-60 object-cover'/>
        </div>
    </section>
  )
}

export default Hero
