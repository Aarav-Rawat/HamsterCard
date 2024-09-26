"use client"
import React from 'react'
import { ExpandableCardDemo } from './ui/expandableCard'


const Hero = () => {
  return (
    <>
      <div className='w-full flex items-center flex-col justify-center'>
        <p></p>
        <span className='text-center pb-4 pt-2 text-xl'>Tap on Reveal <br /> to get date <br /> Combos & Riddle solution</span>
      </div>
      <div className='flex items-center justify-center mb-10 w-full'>

        <ExpandableCardDemo />
    
      </div>
    </>
  )
}

export default Hero