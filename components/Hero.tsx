"use client"
import React from 'react'
import { ExpandableCardDemo } from './ui/expandableCard'

const Hero = () => {
  return (
    <>
      <div className='w-full flex items-center flex-col justify-center'>
        <p></p>
     
        <span className='text-center pb-4 pt-2 text-2xl font-semibold text-[#C36E22]'>Tap on Reveal <br /> to get today's <br /> Combos & Riddle solution</span>
      </div>
      <div className='flex items-center justify-center mb-10 w-full'>

        <ExpandableCardDemo />
        
    
      </div>
    </>
  )
}

export default Hero