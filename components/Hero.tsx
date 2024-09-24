"use client"
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'


const Hero = () => {
  return (
    <>
      <div>

        <h2>Daily Kombos</h2>
        <p></p>
        <span>Tap on the Game & get your Combos</span>
      </div>
      <div className='flex items-center justify-center'>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
                  <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                    <Image src="/hamster.png" alt="A cute hamster"  className='absolute'  layout='fill' />
                  </div>
            </AccordionTrigger>
            <AccordionContent>
               <div>Your kombo</div>
              
            </AccordionContent>

          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>
                  <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                    <Image src="/hamster.png" alt="A cute hamster"  className='absolute'  layout='fill' />
                  </div>
            </AccordionTrigger>
            <AccordionContent>
               <div>Your kombo</div>
              
            </AccordionContent>

          </AccordionItem>


          <AccordionItem value="item-3">
            <AccordionTrigger>
                  <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                    <Image src="/hamster.png" alt="A cute hamster"  className='absolute'  layout='fill' />
                  </div>
            </AccordionTrigger>
            <AccordionContent>
               <div>Your kombo</div>
              
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
                  <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                    <Image src="/hamster.png" alt="A cute hamster"  className='absolute'  layout='fill' />
                  </div>
            </AccordionTrigger>
            <AccordionContent>
               <div>Your kombo</div>
              
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
                  <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                    <Image src="/hamster.png" alt="A cute hamster"  className='absolute'  layout='fill' />
                  </div>
            </AccordionTrigger>
            <AccordionContent>
               <div>Your kombo</div>
              
            </AccordionContent>

          </AccordionItem>

        </Accordion>

      </div>
    </>
  )
}

export default Hero