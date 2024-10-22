import React from 'react'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { newz } from '@/data'
import Image from 'next/image'
import { Button } from './ui/movingBorder'


const Newz = () => {
  return (
    <div id="newz" className='min-h-[100vh]'>
      <h3>
        <TextGenerateEffect words={"New'z"} className='text-center pb-4 pt-2 text-3xl font-semibold text-[#C36E22]' />
      </h3>

      <div className='text-white text-center   '>
        {
          newz.map((item, index) => (
            <div key={index} className=' flex flex-col  justify-center mb-8'>

              <div className='relative w-full max-w-[1100px]  h-[200px] sm:h-[400px] md:mx-[83px]'>
                <Image
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="center"
                  className='rounded-md'
                />
              </div>


              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <div className='mt-2 text-2xl'>{item.title}</div>
                  <AccordionTrigger className='flex items-center justify-center'>
                    {<Button as="div" > Click to Read </Button>}
                    
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Newz