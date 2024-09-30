"use client"
import React from 'react'
import { cn } from "@/lib/utils";

const card = (
  { img , className}
    : {
      img: string
      className: string
    }
) => {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-28 h-28 cursor-pointer overflow-hidden relative card  rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 ",
          " bg-cover bg-right bg-no-repeat  ",
          `${className}`

        )}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="text relative z-50">

          <p className="font-normal text-base text-gray-50 relative my-4">

          </p>
        </div>
      </div>
    </div>
  )
}

export default card