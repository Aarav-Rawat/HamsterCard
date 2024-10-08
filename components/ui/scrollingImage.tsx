
import React from 'react';
import { motion } from 'framer-motion';

const ScrollingImage: React.FC = () => {

    const images = [
        "/hamsterCombatLogo.jpeg",
        "/gemzLogo.jpeg",
        "/MuskEmpireLogo.jpeg",
        "/mafiaDaoLogo.webp",
        "/pixelVerseLogo.png",
        "/rockyRabbitLogo.png",
        "/grandCombat.webp",
        "/tapCoins.jpeg",
        "/blumLogo.png",
        "/tomarketLogo.png"
    ]


    return (
        <div className="relative overflow-hidden sm:w-full h-16 w-full rounded-full flex items-center justify-center">
            <motion.div
                className="flex sm:gap-5 gap-2 flex-shrink-0"
                initial={{ x: '0' }}
                animate={{ x: '-100%' }}
                transition={{
                    ease: 'linear',
                    duration: 35,
                    repeat: Infinity,
                }}
                style={{ whiteSpace: 'nowrap' }} 

            >
                {[...images,...images].map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt="Scrolling"
                        className="h-10 sm:h-14 object-cover rounded-full inline-block"
                    />
                ))}
            </motion.div>
            <motion.div
                className="ml-2 flex sm:gap-5 gap-2 flex-shrink-0"
                initial={{ x: '0' }}
                animate={{ x: '-100%' }}
                transition={{
                    ease: 'linear',
                    duration: 35,
                    repeat: Infinity,
                }}
                style={{ whiteSpace: 'nowrap' }} 

            >
                {[...images,...images].map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt="Scrolling"
                        className="h-10 sm:h-14 object-cover rounded-full inline-block"
                    />
                ))}
            </motion.div>

     
           
        </div>
    );
};

export default ScrollingImage;
