import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { CompanyProps } from '../config/projects'




const Company = (props:CompanyProps ) =>{
  return (
    <>
      <a
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded shadow transition transform hover:shadow-md hover:-translate-y-1 relative overflow-hidden"
    >
    
                    <figure className="bg-slate-500 rounded-xl p-8 dark:bg-slate-800">
                      <img className=" mx-auto" src={props.img} alt="" width="150" height="150" />
                      <div className="pt-6 space-y-4">
                        <blockquote>
                          <p className="text-lg font-medi">
                          {props.description}
                          </p>
                            <div className="grid grid-cols-3 gap-4  justify-items-center">
                            {props?.skills?.map((el,index)=> <button key={`$el+$index`} className="rounded-none bg-green-300 p-1 ">{el}</button>)}
                            </div>
                        </blockquote>
                        <figcaption>
                          <div>
                            {props.title}
                          </div>
                        </figcaption>
                      </div>
                    </figure>
        </a>
    </>
  )
}


export default Company
