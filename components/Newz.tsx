import React from 'react'
import { TextGenerateEffect } from './ui/textGenerateEffect'

const Newz = () => {
  return (
    <div id="newz" className='min-h-[100vh]'>
      <h3>
        <TextGenerateEffect words={"New'z"} className='text-center pb-4 pt-2 text-3xl font-semibold text-[#C36E22]' />
      </h3>

      <div>
        {/* <StickyScroll content={[
          {
            title: "Hamster",
            description: "Season 2 is out",
          },
          {
            title: "Hamster",
            description: "Season 2 is out",
          },
          {
            title: "Hamster",
            description: "Season 2 is out",
          },
          {
            title: "Hamster",
            description: "Season 2 is out",
          },
         
        ]
        } /> */}
      </div>

    </div>
  )
}

export default Newz