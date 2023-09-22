import React from 'react'

import wave from '../assets/wave.png'


const Home = () =>{
  return (
    <>
     <figure className="md: flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <div className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2  p-0">
            <span>
                 Elena Reach
                </span>
           </div>
            <div className="pt-6 md: p-8 text-center md:text-left space-y-4">

              <blockquote>
                  <p className="text-lg font-medium">
                  As a developer with 6 years of experience, I have honed my skills in writing code, creating comprehensive unit tests, and actively participating in testing and debugging processes. My experience spans various technologies, including React, Angular, and Vue, as well as backend technologies like Node and Python. I have a proven track record of delivering frontend and backend solutions with meticulous attention to detail and code quality.
                  </p>
              </blockquote>
              <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    Elena Reach
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Software Engineer, Denver
                  </div>
              </figcaption>
            </div>
     </figure >
    </>
  )
}


export default Home
