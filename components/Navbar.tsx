"use client"
import Image from 'next/image'
import React from 'react'
import { BounceLetter } from './ui/bounceWord'
import ScrollingImage from './ui/scrollingImage'


const Navbar = () => {
  const letters = ['D', 'a', 'i', 'l', 'y', 'C', 'o', 'm', 'b', 'o','s'];
  return (
    <nav className='h-10w flex justify-between'>
      <div className="flex items-center justify-center h-full">
        <Image src="/logo.png" width={60} height={60} alt="Logo" />

        <h1 className='text-[#ffb83e] text-[1.35rem] sm:text-4xl  font-semibold'>
          {letters.map((letter, index) => (
            <BounceLetter key={index} letter={letter} delay={index * 0.1} className={index > 4 ? "text-[#ffb83e]" : "text-white"}
            />
          ))}
        </h1>
      </div>
      <div className='sm:w-[30vw] w-[40vw]'>
        <ScrollingImage />
      </div>
    </nav>
  )
}

export default Navbar