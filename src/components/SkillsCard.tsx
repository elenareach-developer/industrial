import {SkillsCardProps} from "../config/projects"
import React from 'react'

export const SkillsCard = (props:SkillsCardProps)=>{
    return (

        <section id={props.id}>
        <h3 className="pb-3 pt-5 text-xl font-semibold">{props.title}</h3>
        <p>{props.description}</p>
      </section>
        
    )
}



export const SkillsMenu = (props:SkillsCardProps)=>{
  return(
    <li className="py-1">
    <a
      data-te-nav-link-ref
      data-te-nav-link-active
      className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
      href={"#"+props.id}
      >{props.title}</a>
  </li>
  )


}
