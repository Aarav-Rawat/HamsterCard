
import React from 'react';
import { motion } from 'framer-motion';
import { coins } from '@/data';

const ScrollingImage: React.FC = () => {
    
    return (
        <div className="relative overflow-hidden sm:w-full h-16 w-full rounded-full flex items-center justify-center">
            <motion.div
                className="flex sm:gap-5 gap-2"
                initial={{ x: '0' }}
                animate={{ x: '-100%' }} 
                transition={{
                    ease: 'linear',
                    duration: 8, 
                    repeat: Infinity, 
                }}
              style={{ width: '200%' }}
            >
                {coins.map((coin, index) => (
            <motion.img
                key={index}
                src={coin.src}
                alt="Scrolling"
                className="h-10 sm:h-14 object-cover rounded-full"
            />
        ))}
            </motion.div>
        </div>
    );
};

export default ScrollingImage;
