"use client"
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import Card from './ui/Card'


const Hero = () => {
  return (
    <>
      <div className='w-full flex items-center flex-col justify-center'>

        <h2 className='text-[#DB9316] text-4xl font-semibold'>Daily Combos</h2>
        <p></p>
        <span className='text-center py-4 text-xl'>Tap on the Game <br/> to reveal <br/> Combos & Riddle solution</span>
      </div>
      <div className='flex items-center justify-center mb-10'>
        
        <Accordion type="single" collapsible className='flex flex-col gap-10 ml-24'>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                <Image src="/hamster.png" alt="A cute hamster" className='absolute' layout='fill' />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex items-center flex-col gap-5 w-[50vw] h-[80vh] py-5'>
                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Daily Combo</h3>
                  <div>Date</div>
                </div>
                <div className='flex gap-5'>
                  <Card />
                  <Card />
                  <Card />
                </div>

                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Riddle Solution </h3>
                  <div>Solution</div>
                </div>

              </div>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                <Image src="/hamster.png" alt="A cute hamster" className='absolute' layout='fill' />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex items-center flex-col gap-5 w-[50vw] h-[80vh] py-5'>
                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Daily Combo</h3>
                  <div>Date</div>
                </div>
                <div className='flex gap-5'>
                  <Card />
                  <Card />
                  <Card />
                </div>

                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Riddle Solution </h3>
                  <div>Solution</div>
                </div>

              </div>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                <Image src="/hamster.png" alt="A cute hamster" className='absolute' layout='fill' />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex items-center flex-col gap-5 w-[50vw] h-[80vh] py-5'>
                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Daily Combo</h3>
                  <div>Date</div>
                </div>
                <div className='flex gap-5'>
                  <Card />
                  <Card />
                  <Card />
                </div>

                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Riddle Solution </h3>
                  <div>Solution</div>
                </div>

              </div>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                <Image src="/hamster.png" alt="A cute hamster" className='absolute' layout='fill' />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex items-center flex-col gap-5 w-[50vw] h-[80vh] py-5'>
                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Daily Combo</h3>
                  <div>Date</div>
                </div>
                <div className='flex gap-5'>
                  <Card />
                  <Card />
                  <Card />
                </div>

                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Riddle Solution </h3>
                  <div>Solution</div>
                </div>

              </div>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className='w-[50vw] relative overflow-hidden h-[40vh]'>
                <Image src="/hamster.png" alt="A cute hamster" className='absolute' layout='fill' />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex items-center flex-col gap-5 w-[50vw] h-[80vh] py-5'>
                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Daily Combo</h3>
                  <div>Date</div>
                </div>
                <div className='flex gap-5'>
                  <Card />
                  <Card />
                  <Card />
                </div>

                <div className='flex gap-2 flex-col text-2xl'>
                  <h3>Name Riddle Solution </h3>
                  <div>Solution</div>
                </div>

              </div>
            </AccordionContent>

          </AccordionItem>

        </Accordion>

       
      </div>
    </>
  )
}

export default Hero