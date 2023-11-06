import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {


  return (
    <>

      <div className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white">
        <div className="w-full p-4 text-center bg-gray-800 text-gray-400">
          <div className="container mx-auto">
          <div>React Tutorial</div>
          </div>
        </div>
        <div className="w-full p-4 text-center text-gray-400">
        <Hero />
        </div>
        <Footer />
     </div>

    </>
  )
}

export default App
