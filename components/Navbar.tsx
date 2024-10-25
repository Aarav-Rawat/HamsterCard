"use client"
// import Image from 'next/image'
import React from 'react'
import { BounceLetter } from './ui/bounceWord'
// import ScrollingImage from './ui/scrollingImage'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'


const Navbar = () => {
  const letters = ['D', 'a', 'i', 'l', 'y', 'C', 'o', 'm', 'b', 'o', 's'];
  return (
    <header className='h-5w flex flex-col justify-between border-b-[1px] border-white'>
      <InfiniteMovingCards direction={"right"} speed={"slow"} />
      <nav className="flex items-center justify-center h-full text-center mt-4 ml-1">

        {/* <Image src="/logo.png" width={45} height={45} alt="Logo" className='rounded-[50%] mt-1 ' /> */}

        <div className='text-[#ffb83e] text-2xl sm:text-4xl  font-semibold text-center'>
          {letters.map((letter, index) => (
            <BounceLetter key={index} letter={letter} delay={index * 0.1} className={index > 4 ? "text-[#ffb83e]" : "text-white"}
            />
          ))}
        </div>
      </nav>

      {/* <div className='sm:w-[30vw] w-[48vw] rounded-full'>
        <ScrollingImage />
      </div> */}



    </header>
  )
}

export default Navbar