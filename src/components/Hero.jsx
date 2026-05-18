import React from 'react'
import { useState, useEffect } from 'react'
import profilImg from '../assets/profil.png'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Hero = () => {
    const texts = ['web interfaces', 'unique experiences', 'clean, readable code']
    const [currentText, setCurrentText] = useState(0)  
    const [displayed, setDisplayed] = useState('')       
    const [isDeleting, setIsDeleting] = useState(false)
    const ref = useScrollAnimation()

    useEffect(() => {
        const fullText = texts[currentText]
        const interval = setInterval(() => {
            if (!isDeleting) {
                // Écriture lettre par lettre
                setDisplayed((prev) => fullText.slice(0, prev.length + 1))
                
                // Texte complet → commence à effacer après une pause
                if (displayed === fullText) {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                // Effacement lettre par lettre
                setDisplayed((prev) => prev.slice(0, -1))
                
                // Texte vide → passe au suivant
                if (displayed === '') {
                    setIsDeleting(false)
                    setCurrentText((i) => i === texts.length - 1 ? 0 : i + 1)
                }
            }
        }, isDeleting ? 50 : 100) // effacement plus rapide que l'écriture

        return () => clearInterval(interval)
    }, [displayed, isDeleting, currentText])

    
    return (
        <section id='home' ref={ref} className='animate-hidden w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-30 pt-24'>
            <div className='order-2 lg:order-1 mb-7 lg:mb-0'>
                <p className='text-text-muted text-sm mb-3'>📍 Antananarivo, Madagascar</p>
                <h1 className='text-white text-3xl lg:text-5xl font-bold mb-0 lg:mb-1'>HI, I am</h1>
                <h1 className='bg-gradient-to-r from-[#34D399] to-[#23A7B9] bg-clip-text text-transparent text-3xl lg:text-5xl font-bold mb-0 lg:mb-1'>RAHERINIRINA</h1>
                <h1 className='bg-gradient-to-r from-[#38BDF8]/59 to-[#38BDF8] bg-clip-text text-transparent text-3xl lg:text-5xl font-bold mb-0 lg:mb-1'>Fitiavana</h1>
                <p className='mb-1 text-text-muted'>
                    I build{' '}
                    <span className='text-white font-bold'>
                        {displayed}
                        <span className='animate-pulse text-primary'>|</span>
                    </span>   
                </p>
                <div className='mt-3 flex gap-4'>
                    <button className='bg-primary text-text-dark px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-dark hover:text-primary hover:border hover:border-primary transition-all duration-300'>View my projects</button>
                    <button className='border border-white/70 text-white/90 px-6 py-3 rounded-lg cursor-pointer hover:text-primary hover:border-none transition-all duration-300'>Contact me</button>
                </div>
            </div>
            <div className='order-1 lg:order-2 relative flex items-center justify-center mt-10 lg:mt-0 overflow-visible px-10'>
                <div className="absolute w-72 h-72 bg-primary rounded-full blur-xl opacity-20"></div>
                <img src={profilImg}  className='relative rounded-full w-60 h-60 object-cover animate-pulse-glow'/>
                <div className='absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-dark border border-green-400/30 px-3 py-1 rounded-full'>
                    <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
                    <span className='text-green-400 text-xs font-medium whitespace-nowrap'>Open to work</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
