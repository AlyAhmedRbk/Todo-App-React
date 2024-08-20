import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-950 text-white px-16 py-4 '>  
    <div className="logo">
        <span className='font-bold text-2xl cursor-pointer'>ITask App</span>
    </div>
      <ul className="flex gap-8 items-center">
        <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
