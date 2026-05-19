import { useState, useEffect } from "react"

export default function Navbar(){
    const [activeLink, setActiveLink] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { label: "Home", href: "#" , id: "home"},
        { label: "About", href: "#about", id: "about" },
        { label: "Experience", href: "#experience", id: "experience" },
        { label: "Projects", href: "#projects", id: "projects" },
        { label: "Contact", href: "#contact", id: "contact" }
    ]
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id)
            }
            })
        }, { threshold: 0.5 })

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])
    return(  
        <nav className="fixed top-0 bg-dark w-full text-text-muted z-50">
            <div className="flex justify-between items-center px-12 py-5">
                <span className='text-white font-bold text-xl'>
                    RF<span className='text-primary'>.</span>
                </span>
                <ul className="hidden lg:flex justify-end gap-8">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.href}
                                onClick={() => setActiveLink(link.id)}
                                className={activeLink === link.id? "text-white underline decoration-primary decoration-2 underline-offset-8" : "text-text-muted hover:text-primary transition-all duration-300"}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    <li>
                        <a href="#contact"
                            onClick={() => setActiveLink('contact')}
                            className='bg-primary text-dark px-4 py-2 rounded-lg font-semibold text-sm hover:bg-transparent hover:text-primary border border-primary transition-all duration-300'>
                            Hire me
                        </a>
                    </li>
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white text-2xl cursor-pointer hover:text-primary transition duration-300">
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>
            
            
            {isOpen && (
                <ul className="lg:hidden flex flex-col gap-4 px-12 pb-6">
                    {
                        links.map(
                            (link) => (
                                <li key={link.id}>
                                    <a href={link.href}
                                     onClick={() => {setActiveLink(link.id); setIsOpen(false)}}
                                     className={activeLink === link.id ? "text-white underline decoration-primary decoration-2 underline-offset-8" : "text-text-muted hover:text-primary transition-all duration-300"}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            )
                        )
                    }

                    <li>
                        <a href="#contact"
                            onClick={() => { setActiveLink('contact'); setIsOpen(false) }}
                            className='inline-block bg-primary text-dark px-4 py-2 rounded-lg font-semibold text-sm'>
                            Hire me
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    )
}