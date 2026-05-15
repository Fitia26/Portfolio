import React from 'react'
import Card from './Card'

const Projects = () => {
  const projects = [
    {
      title: "DevTool Kit 1",
      description: "A RESTful API built with Flask — no frontend, pure backend. Provides a collection of developer utilities accessible via clean HTTP endpoints.",
      images: [
        "/Projects/devtoolkit_terminal.png"
      ],
      tags: ["Python", "Flask", "REST API", "Json"],
      sourceCode: "https://github.com/Fitia26/"
    },
    {
      title: "Habit Analyzer",
      description: "Web application, featuring secure user authentication, complete CRUD functionality, and an interactive analytics dashboard powered by Chart.js for habit progress visualization.",
      images: [
        "/Projects/Habit analyser 1.png",
        "/Projects/Habit analyser 2.png",
        "/Projects/Habit analyser 3.png"
      ],
      tags: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Chart.js"],
      sourceCode: "https://github.com/Fitia26/"
    },
    // {
    //   title: "DevTool Kit 3",
    //   description: "A RESTful API built with Flask — no frontend, pure backend. Provides a collection of developer utilities accessible via clean HTTP endpoints.",
    //   images: [
    //     "/Projects/devtoolkit_terminal.png"
    //   ],
    //   tags: ["Python", "Flask", "REST API", "Json"],
    //   sourceCode: "https://github.com/Fitia26/"
    // }
  ]
  return (
    <section id="projects" className='w-full min-h-screen px-6 lg:px-30 pt-24'>
      <h1 className='font-bold text-white text-3xl lg:text-5xl'>What I have built</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {
          projects.map(
            (project) => (
              < Card 
                key={project.title}
                title={project.title}
                description={project.description}
                images={project.images}
                tags={project.tags}
                sourcecode={project.sourceCode}
              />
            )
          )
        }
      </div>
    </section>
  )
}

export default Projects
