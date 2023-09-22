import { BeakerIcon } from '@heroicons/react/outline'
import React from 'react'
import Company from '../components/Company'
import {  projectsLena } from '../config/projects'

const projectCards =  projectsLena.map(p => (
  <Company   title={p.title} description={p.description} img={p.img} skills={p.skills} />
))

const Projects = () => {
  return (
    <div className="bg-slate-400  min-h-screen lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <BeakerIcon className="mr-4 w-6 h-6" />
        <div>Projects</div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{projectCards}</div>
    </div>
  )
}

export default Projects
