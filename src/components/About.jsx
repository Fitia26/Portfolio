import React from 'react';
import profilImg from '../assets/Profile portfolio.png'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const About = () => {
    const techStack = [
     { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C"] },
     { label: "Frontend", items: ["React", "Angular", "HTML5", "CSS3", "TailwindCSS"] },
     { label: "Backend", items: ["Flask", "FastAPI", "Quarkus"] },
     { label: "Database", items: ["MySQL", "PostgreSQL", "SQLite"] },
     { label: "Tools", items: ["Git", "GitHub", "Figma"] },
   ]
  return (
    <section id='about' className='w-full min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-between px-6 lg:px-30 pt-24'>
        <div className='relative border border-white/50 rounded-xl overflow-hidden'>
            <img src={profilImg} className='relative w-full lg:w-[500px] h-[400px] lg:h-[500px] object-cover rounded-xl'/>
        </div>
        <div className='w-full lg:w-[600px]'>
            <h1 className='text-3xl lg:text-5xl mb-4'><span className='text-white'>Junior by title.</span> <span className='text-primary'>Serious by nature</span></h1>
            <p className='text-justify text-text-muted mb-6'>
                I build modern, scalable and user-friendly web applications that solve real-world problems. <br />
                Junior Web Developer based in Antananarivo, Madagascar, with a background in Computer Science & Telecommunications. I have hands-on experience
                in both frontend and backend development through academic projects and internships. <br />
                I enjoy designing clean interfaces and building efficient backend systems capable of handling real traffic.
            </p>
            <h3 className='text-white mb-4 font-semibold'>Tech stack</h3>
            {
                techStack.map(
                    (tech) => (
                     <p key={tech.label} className='mb-1'>
                        <span className='text-emerald-400'>{tech.label}:</span>
                        {
                            tech.items.map(
                                (t) => (
                                    <span key={t} className='text-white ml-3'>{t}</span>
                                )
                            )
                        }
                     </p>   
                    )
                )
            }
            <div className='flex mt-3 gap-5'>
                <a href="https://github.com/Fitia26" target="_blank">
                    <FaGithub className='mt-2 text-2xl text-white hover:scale-125 transition-transform duration-300'/>
                </a>
                <a href="https://www.linkedin.com/in/fitiavana-rolland-katar-raherinirina" target="_blank">
                    <FaLinkedin className='mt-2 text-2xl text-white hover:scale-125 transition-transform duration-300'/>
                </a>
                <a 
                    href="/CV_Fitiavana.pdf" 
                    download="CV_Fitiavana.pdf"
                    className='flex items-center gap-2 border border-primary text-text-dark bg-primary px-4 py-2 rounded-lg cursor-pointer hover:bg-dark hover:text-primary transition-all duration-300'
                >
                    <FaDownload /> 
                    Download CV
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
