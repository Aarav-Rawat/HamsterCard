"use client"
import React from 'react'
import { cn } from "@/lib/utils";

const card = () => {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-40 cursor-pointer overflow-hidden relative card h-40 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 ",
          "bg-[url('/gemz1.png')] bg-cover bg-right bg-no-repeat",
          
        )}
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