import { ExternalLinkIcon, MenuIcon} from '@heroicons/react/outline'
import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Skills from './views/Skills'
import Wheel from './views/Wheel'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Projects from './views/Projects'
import avatar from './assets/avatar.png'

const App = () => {
  const currentYear: number = new Date().getFullYear()
  const [showMenu, setShowMenu] = useState(false)

  // TO-DO: this should be refactored
  const menuRef = useRef<any>(null)
  const buttonRef = useRef<any>(null)

  const closeMenu = () => {
    setShowMenu(false)
  }
  const handleToggleMenu = (e: MouseEvent) => {
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      return
    }
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      closeMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleToggleMenu)
    return () => {
      document.removeEventListener('click', handleToggleMenu)
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white ">
      <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="container mx-auto px-6 flex-grow">
          <nav className="mt-4 flex flex-row justify-between ">
            <Link
              className="flex lg:p-2 py-2 rounded items-center lg:hover:bg-gray-100 lg:dark:hover:bg-gray-800"
              to="/"
            >
              
            </Link>

            {/* Navigation on desktop devices */}
            <div className="hidden md:block">
            <Link
                className="text-blue-700 dark:text-yellow-400 p-2 mr-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-blue-700 dark:text-yellow-400 p-2 mr-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800"
                to="/projects"
              >
                Projects
              </Link>
          
              <Link
                className="text-blue-700 dark:text-yellow-400 p-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800"
                to="/skills"
              >
                Skills
              </Link>
              <Link
                className="text-blue-700 dark:text-yellow-400 p-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800"
                to="/features"
              >
                Feature
              </Link>
              <img className="w-24 h-24 md:w-48 md:h-auto md:founded-none rounded-full mx-auto" src={avatar} alt="" width="384" height="384"/>
            </div>

            {/* Navigation on mobile devices (dropdown menu) */}
            <button
              className="md:hidden p-2"
              ref={buttonRef}
              onClick={() => {
                setShowMenu(true)
              }}
            >
              <MenuIcon className="w-5 h-5" />
            </button>
            <CSSTransition in={showMenu} timeout={300} classNames="menu" unmountOnExit nodeRef={menuRef}>
              <div className="absolute top-0 right-0" ref={menuRef}>
                <div className="flex flex-col space-y-4 m-3 p-4 rounded bg-white dark:bg-gray-800 shadow-xl">
                <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                  <Link to="/projects" onClick={closeMenu}>
                    Projects
                  </Link>
                  <Link to="/skills" onClick={closeMenu}>
                    Skills
                  </Link>
                  <Link to="/features" onClick={closeMenu}>
                    Features
                  </Link>
                  <a className="flex items-center" href="mailto:spencer.wushangbo@gmail.com" onClick={closeMenu}>
                    <span className="mr-2">Get in touch</span>
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CSSTransition>
          </nav>

          <div >
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/features">
                <Wheel />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>

        <footer className="w-full text-center bg-gray-800 text-gray-400 p-4">
          <div className="container mx-auto">
            <div>
              Powered by{' '}
              <a className="hover:text-white" href="https://reactjs.org/">
                React
              </a>
              ,{' '}
              <a className="hover:text-white" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>
              ,{' '}
              <a className="hover:text-white" href="https://vitejs.dev/">
                Vite
              </a>{' '}
              and{' '}
              <a className="hover:text-white" href="https://www.typescriptlang.org/">
                TypeScript.
              </a>
            </div>
            <div>Elena Reach © 2022-{currentYear}</div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
