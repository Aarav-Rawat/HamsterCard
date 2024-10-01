
import React from 'react';
import { motion } from 'framer-motion';
import { coins } from '@/data';

const ScrollingImage: React.FC = () => {
    return (
        <div className="relative overflow-hidden sm:w-[28vw] w-[42vw] h-16 rounded-full flex items-center justify-center">
            <motion.div
                className="flex gap-5"
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }} 
                transition={{
                    ease: 'linear',
                    duration: 5, 
                    repeat: Infinity, 
                }}
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