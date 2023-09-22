import { FingerPrintIcon } from '@heroicons/react/outline'
import React from 'react'
import {SkillsCard, SkillsMenu} from '../components/SkillsCard'
import {skillsSections,skills } from"../services/constants"

const SkillsList = skills.map(el=>
  <SkillsCard
    id={el.id}
    title={el.title}
    description={el.description}
  />
)
const SkillsMenuList = skills.map(el=>

    <SkillsMenu
    id={el.id}
    title={el.title}
    description={el.description}
    />
  

)

const Skills = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <FingerPrintIcon className="mr-4 w-6 h-6" />
        <div>Skills</div>
      </div>

      <div className="leading-relaxed mt-12">

      <div className="grid grid-cols-3">
  <div className="col-span-2">
    <div
      data-te-spy="scroll"
      data-te-target="#scrollspy1"
      data-te-offset="200"
      className="relative h-48 overflow-auto">
     {SkillsList}
    </div>
  </div>

  <div>
    <div id="scrollspy1" className="sticky-top pl-3 text-sm">
      <ul data-te-nav-list-ref>
      {SkillsMenuList}
      </ul>
    </div>

  </div>
</div>
      
      </div>

      <div className="leading-relaxed mt-2">My skills grow every day</div>
    </div>
  )
}

export default Skills
