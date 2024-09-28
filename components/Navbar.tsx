import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='h-14w-full flex items-center justify-start ml-5'>

      <Image src="/logo.png" width={80} height={80} alt="Logo"  />


      {/* <h2 className='text-[#DB9316] text-4xl w-full font-semibold text-left mb-2'>Daily Combos</h2> */}

    </nav>
  )
}

export default Navbar