import { useState } from "react"
export default function Navbar(){
    const [activeLink, setActiveLink] = useState("home");
    const links = [
        { label: "Home", href: "#" , id: "home"},
        { label: "About", href: "#about", id: "about" },
        { label: "Experience", href: "#experience", id: "experience" },
        { label: "Project", href: "#project", id: "project" },
        { label: "Contact", href: "#contact", id: "contact" }
    ]
    return(  
        <nav className="fixed top-0 bg-dark w-full text-text-muted px-12 py-5 z-50">
            <ul className="flex justify-end gap-8">
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.href}
                            onClick={() => setActiveLink(link.id)}
                            className={activeLink === link.id? "text-white underline decoration-primary decoration-2 underline-offset-8" : "text-text-muted"}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}