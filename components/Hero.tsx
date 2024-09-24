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
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
                  <div>
                    <Image src="/hamster.png" alt="A cute hamster" width={100} height={100}/>
                  </div>
            </AccordionTrigger>

            <AccordionContent>
              
            </AccordionContent>

          </AccordionItem>
        </Accordion>

      </div>
    </>
  )
}

export default Hero