import React, { useState } from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import {logo} from './assets'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { Home,CreatePost } from './pages'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <BrowserRouter> 
    <div className={darkMode?"dark":""}>

    <header className='dark:bg-gray-900 dark:border-cyan-900 w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      <Link to="/">
        <img src={logo} alt="logo" className='dark:invert w-28 object-contain' />
      </Link>
      <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='absolute top-5 dark:invert cursor-pointer text-2xl' /></li>
      <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded md'>
      Create
      </Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)] dark:bg-black'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-post' element={<CreatePost/>}/>
    </Routes>
    </main>
    </div>
    </BrowserRouter>
  )
}

export default App