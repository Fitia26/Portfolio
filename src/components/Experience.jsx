import React from 'react'

const Experience = () => {
  const experiences = [
  {
    title: "Web development intern",
    company: "Orange Madagascar",
    companyColor: "#FF6600",
    period: "May 2025 – Aug 2025",
    description: "Designed and developed a BPM (Business Process Management) web application to centralize business processes and improve collaborative work across departments.",
    bullets: [
      "Built RESTful APIs with Java Quarkus including full CRUD operations",
      "Developed dynamic frontend interfaces with Angular",
      "Designed and managed the MySQL database schema",
      "Collaborated with business stakeholders to gather and formalize requirements"
    ],
    tags: ["Java", "Quarkus", "TypeScript", "Angular", "MySQL"]
  }
]
  return (
    <section id='experience' className='w-full min-h-screen px-30 pt-24'>
      <h1 className='text-white text-5xl'>Work Experience</h1>
      {
        experiences.map(
            (experience) => (
                <div key={experience.title} className='w-full border border-primary/20 border-l-12 border-l-primary px-5 mt-5 py-5 rounded-lg'>
                    <div className='flex justify-between items-start mb-2'>
                        <div>
                            <h2 className='text-white text-xl font-semibold'>{experience.title}</h2>
                            <p style={{ color: experience.companyColor }}>{experience.company}</p>
                        </div>
                        <span className='text-text-muted text-sm'>{experience.period}</span>
                    </div>
                    <p className='text-text-muted'>
                        {experience.description}
                    </p>
                    <ul>
                        {
                            experience.bullets.map(
                                (bullet) => (
                                    <li key={bullet} className='text-text-muted'>
                                        <span className='text-primary mr-2'>→</span>{bullet}
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className='flex gap-2 mt-2'>
                        {
                            experience.tags.map(
                                (tag) => (
                                    <div key={tag} className='border border-white/10 text-primary text-sm px-3 py-1 rounded-full'>
                                        {tag}
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            )
        )
      }
    </section>
  )
}

export default Experience
