"use client"
import React from 'react'
import { ExpandableCardDemo } from './ui/expandableCard'
import { TextGenerateEffect } from './ui/textGenerateEffect'

const Hero = () => {
  return (
    <>
      <div className='w-full flex items-center flex-col justify-center'>
        <p></p>
     
     <TextGenerateEffect className='text-center pb-4 pt-2 text-2xl font-semibold text-[#C36E22]'  words= {`Tap on Reveal to get Combos & Riddle solution`}/>
      
      </div>
      <div className='flex items-center justify-center mb-10 w-full'>

        <ExpandableCardDemo />
        
    
      </div>
    </>
  )
}

export default Hero