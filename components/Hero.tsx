"use client"
import React from 'react'
import { ExpandableCardDemo } from './ui/expandableCard'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import { coins } from '@/data'

const Hero = () => {
  return (
    <>
      <div className='flex items-center flex-col justify-center'>

        <TextGenerateEffect className='text-center mb-2 text-3xl font-semibold text-white' words={`Tap On Reveal`} />

        <div className='flex flex-wrap items-center justify-center w-72 text-white text-center'>
          {
            coins.map((coin,index) => (
              <h2 key={index} className=''>{coin.title},</h2>
            ))
          }
        </div>

      </div>
      <div className='flex items-center justify-center mb-10 w-full'>

        <ExpandableCardDemo />


      </div>
    </>
  )
}

export default Hero