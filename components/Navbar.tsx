import React from 'react'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  return (
    <nav className='h-14w-full flex items-center ml-5 gap-4'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <TextGenerateEffect className='text-[#DB9316] text-4xl' words={"Daily Comboz"} />

      {/* <h2 className='text-[#DB9316] text-4xl font-semibold text-center'>Daily Combos</h2> */}

    </nav>
  )
}

export default Navbar