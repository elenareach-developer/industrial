import React from 'react';

const Footer = () =>{
    const currentYear: number = new Date().getFullYear()
    return (
        <>
        <footer className=" fixed inset-x-0 bottom-0 w-full text-center bg-red-800 text-gray-400 p-4">
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
    </>
    )
}
export default Footer;