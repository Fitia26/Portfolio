import React from 'react'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const Card = ({title, description, images, tags, sourcecode}) => {
  const [currentImage, setCurrentImage] = useState(0)

  const prev = () => setCurrentImage((i) => i === 0 ? images.length - 1 : i - 1)
  const next = () => setCurrentImage((i) => i === images.length - 1 ? 0 : i + 1)
  return (
    <div className='border border-white/50 rounded-xl overflow-hidden flex flex-col p-4 gap-3'>
      <div className='relative'>
        <img src={images[currentImage]} className='w-full h-48 object-cover'/>
        <button onClick={prev} className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full'>←</button>
        <button onClick={next} className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full'>→</button>
      </div>
      <div className='p-4 flex flex-col gap-3'>
        <h3 className='text-white '>{title}</h3>
        <p className='text-text-muted'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <div key={tag} className='border border-white/10 text-primary text-sm px-3 py-1 rounded-full'>
              {tag}
            </div>
          ))}
        </div>
        <a href={sourcecode} target="_blank" className='flex items-center gap-2 text-text-muted hover:text-white'>
          <FaGithub /> source code
        </a>
      </div>
    </div>
  )
}

export default Card
