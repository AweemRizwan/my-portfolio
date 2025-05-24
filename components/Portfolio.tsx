"use client"
import Image from 'next/image'
import project1 from '@/public/proj_1.png'
import Solarsystem from '@/public/Solarsystem.png'
import project2 from '@/assets/proj_2.png'
// import project3 from '@/assets/proj_3.png'
import Link from 'next/link'

const projects = [
  {id: 1, name: 'Project 1', title:'i-Notebook', image: project1, link: 'https://i-notebook-mbbnt4o8q-aweemrizwans-projects.vercel.app/signup'},
  {id: 2, name: 'Project 2', title:'3D Model', image: project2, link: 'https://3-d-model-iota.vercel.app/'},
  {id: 3, name: 'Project 3', title:'Solar System', image: Solarsystem, link: 'https://solar-system-1g1r.vercel.app/'},
  {id: 4, name: 'Project 4', title:'News Monkey', image: project1, link: 'https://news-monkey-plum.vercel.app/'},
  // {id: 3, name: 'Project 3', title:'i-Notebook', image: project3, link: 'https://i-notebook-mbbnt4o8q-aweemrizwans-projects.vercel.app/signup'},
];

function Portfolio() {
  return (
    <div id='portfolio' className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-5xl font-bold text-center mt-8'>Projects</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
        {projects.map((project) => (
          <div key={project.id} className='relative group'>
            <Link href={project.link} target='_blank'>
              <Image src={project.image} alt={project.name} className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105' />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-white text-xl font-semibold'>{project.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Portfolio
