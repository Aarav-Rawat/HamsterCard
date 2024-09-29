"use client"
import Image from 'next/image'
import React from 'react'
import { BounceLetter } from './ui/bounceWord'

const Navbar = () => {
  const letters = ['D', 'a', 'i', 'l', 'y', 'C', 'o', 'm', 'b', 'o'];
  return (
    <nav className='h-14w flex items-center justify-center md:justify-start'>

      <Image src="/logo.png" width={80} height={80} alt="Logo" />

      <h1 className='text-[#ffb83e] text-4xl  font-semibold mb-2'>
        {letters.map((letter, index) => (
          <BounceLetter key={index} letter={letter} delay={index * 0.1} />
        ))}
      </h1>

     

    </nav>
  )
}

export default Navbar