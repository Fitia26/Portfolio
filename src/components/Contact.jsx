import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const datas = [
        {
            title: "Email",
            info: "fitiaraherinirina@gmail.com"
        },
        {
            title: "Github",
            info: "github.com/Fitia26"
        },
        {
            title: "Phone",
            info: "+261 38 16 007 47"
        }
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handlesubmit(e) {
        e.preventDefault()
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            { name: formData.name, email: formData.email, message: formData.message },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => alert('Message envoyé !'))
        .catch(() => alert('Erreur, réessaie.'))
    }
    
    
  return (
    <section id='contact' className='w-full min-h-screen px-6 lg:px-30 pt-24'>
      <h1 className='text-white font-bold text-3xl lg:text-5xl'>
        Let's work together
      </h1>
      <p className='text-text-muted text-xs pt-5'>
        An opportunity, a question, or just want to say hello — I always reply.
      </p>
      <div className='flex flex-col lg:flex-row justify-between pt-5'>
        <form onSubmit={handlesubmit} className='flex flex-col w-full lg:w-[500px]'>
            <div className='flex flex-col gap-1 mb-4'>
                <label htmlFor="name" className='text-white text-sm mb-1'>Name</label>
                <input name='name' className='bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white w-full focus:outline-none focus:border-primary' id='name' type="text" value={formData.name} onChange={handleChange} placeholder='John Doe'/>
            </div>
            <div className='flex flex-col gap-1 mb-4'>
                <label htmlFor="email" className='text-white text-sm mb-1'>Email</label>
                <input name='email' className='bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white w-full focus:outline-none focus:border-primary' id='email' type="text" value={formData.email} onChange={handleChange} placeholder='John@gmail.com'/>
            </div>
            <div className='flex flex-col gap-1 mb-4'>
                <label htmlFor="message" className='text-white text-sm mb-1'>Message</label>
                <textarea name='message' value={formData.message} onChange={handleChange} 
                className='bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white w-full focus:outline-none focus:border-primary' rows={5} placeholder='Hi Fitiavana, I would like to...'/>
            </div>
            
            <button className='text-text-dark bg-primary border rounded-lg px-2 py-2 w-40 cursor-pointer hover:bg-dark hover:text-primary hover:border hover:border-primary transition-all duration-300'>
                Send message
            </button>
        </form>
        <div>
            {
                datas.map(
                    (data) => (
                        <p key={data.title} className='flex gap-10 pt-3 lg:pt-5'>
                            <span className='text-text-muted'>{data.title}</span>
                            <span className='text-white/90'>{data.info}</span>
                        </p>
                    )
                )
            }
        </div>
      </div>
    </section>
  )
}

export default Contact
