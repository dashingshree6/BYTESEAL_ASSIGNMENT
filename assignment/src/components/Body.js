import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Department from './Departments';
import About from './About';
import Contact from './Contact';

const Body = () => {
    const handleLightMode = () => {
        document.documentElement.classList.add('dark')
    }
    const handleDarkMode = () => {
        document.documentElement.classList.remove('dark')
    }
    return (
        <div>
            <div id="sidebar" className="m-0 p-0 w-full h-auto relative bg-gray-700 dark:bg-gray-200 overflow-auto md:w-52 md:h-full md:fixed">
                <a className="block text-xs text-slate-300 dark:text-gray-600 hover:text-slate-50 dark:hover:text-gray-900 p-4 no-underline text-center float-left sm:float-left md:float-none flex align-middle" href="/">  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                     <h2 className='ml-2'>Dashboard</h2>
                </a>
                <a className="block text-xs text-slate-300 dark:text-gray-600 hover:text-slate-50 dark:hover:text-gray-900 p-4 no-underline text-center float-left sm:float-left md:float-none flex align-middle" href="/department">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <h2 className='ml-2'>Departments</h2>
                </a>
                <a className="block text-xs text-slate-300 dark:text-gray-600 hover:text-slate-50 dark:hover:text-gray-900 p-4 no-underline text-center float-left sm:float-left md:float-none flex align-middle" href="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className='ml-2'>About Us</h2>
                </a>
                <a className="block text-xs text-slate-300 dark:text-gray-600 hover:text-slate-50 dark:hover:text-gray-900 p-4 no-underline text-center float-left sm:float-left md:float-none flex align-middle" href="/contact">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h2 className='ml-2'>Contact</h2>
                </a>
            </div>

            <div id="content" className="ml-1 pl-1 pr-4 md:ml-52">
                
              <Router>
                  <Routes>
                      <Route path='/' element={<Dashboard/>}/>
                      <Route path='/department' element={<Department/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/contact' element={<Contact/>}/>
                  </Routes>
              </Router>

            </div>
            <div className='fixed left-2 flex flex-row justify-center items-center bottom-6 z-50'>
                <button onClick={handleDarkMode} className="border bg-green-900 text-zinc-100 font-semibold rounded-xl p-2 text-xs">Dark Mode</button>
                <button onClick={handleLightMode} className="border bg-green-900 text-zinc-100 font-semibold rounded-xl p-2 text-xs">Light Mode</button>
            </div>
        </div>
    )
}

export default Body;