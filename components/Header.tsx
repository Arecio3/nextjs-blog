import Link from 'next/link'
import React from 'react'
const logo = "../assets/logo.png"

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      {/* Left Sice (Parent must be flex to have it all on the same line) */}
        <div className='flex items-center space-x-5'>
          <Link href="/">
            <img className="w-32 object-contain cursor-pointer rounded-full m-1" src='https://www.nicepng.com/png/detail/57-571836_gangsta-logo-by-mariobli-alien-logo-png.png'/>
          </Link>
          <div className='hidden md:inline-flex items-center space-x-5 mb-16'>
            <h1 className='font-extrabold italic text-3xl'>Theories</h1>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className='text-white bg-green-600 px-4 rounded-full'>Follow</h3>
          </div>
        </div>
        {/* Right Side */}
        <div className='flex items-center space-x-5 mb-16'>
          <h3 className='text-blue-600 px-4 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition duration-300 ease-in-out'>Blue Pill</h3>
          <h3 className='text-white bg-red-600 px-4 rounded-full border border-red-600 hover:bg-white hover:text-red-600 cursor-pointer transition duration-300 ease-in-out'>Red Pill</h3>
        </div>
    </header>
  )
}

export default Header