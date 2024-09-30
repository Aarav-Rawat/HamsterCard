"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { coins } from "@/data";
import Card from "./Card"

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof coins)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            {/* opended card */}

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="max-w-[420px]  min-w-[350px]  sm:max-w-[700px] sm:w-auto sm:min-w-[600px] sm:min-h-[95vh] min-h-[85vh] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl relative"
            >

              <div className="flex justify-center items-center p-2 text-center">

                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-neutral-700 dark:text-neutral-200 text-4xl"
                >
                  {active.title}
                </motion.h3>



              </div>

              <motion.div className="flex flex-col items-center justify-between" layoutId={`image-${active.title}-${id}`}>
                <h4 className="text-2xl font-semibold dark:text-neutral-400">{active.cardTitle}</h4>
                <div className={`${active.cardsClassName ? active.cardsClassName : " gap-2"} flex justify-between items-center mt-2 `}>

                  {
                    active.cards.map((card, index) => (
                      <Card img={card.img} key={index} className={active.cardClassName || "w-20 h-20 sm:w-32 sm:h-32"} />
                    ))
                  }
                </div>




              </motion.div>

              <div className="relative">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 h-full  flex flex-col items-center  dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] mt-8"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>

            </motion.div>

          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {coins.map((coin, index) => (
          <motion.div
            layoutId={`coin-${coin.title}-${id}`}
            key={index}
            onClick={() => setActive(coin)}
            className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row ">
              <motion.div layoutId={`image-${coin.title}-${id}`}>
                <Image
                  src={coin.src}
                  width={100}
                  height={100}
                  alt={coin.title}
                  className="h-14 w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${coin.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-left"
                >
                  {coin.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${coin.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left"
                >
                  {coin.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${coin.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#f68700] hover:text-white text-black mt-0"
            >
              {coin.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};


