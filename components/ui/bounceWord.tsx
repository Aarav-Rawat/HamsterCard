"use client"
import { motion } from 'framer-motion';

export  const BounceLetter = ({ letter, delay,className }: { letter: string, delay: number, key:number, className:string }) => {
    return (
      <motion.span
        style={{ display: 'inline-block', marginRight: '2px' }}
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          repeatDelay: 2,
          repeat: Infinity,
          delay: delay,
        }}
        className={className}
      >
        {letter}
      </motion.span>
    );
  };