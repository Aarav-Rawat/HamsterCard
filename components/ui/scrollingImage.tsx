
import React from 'react';
import { motion } from 'framer-motion';

const ScrollingImage: React.FC = () => {

    const images = [
        "/hamsterCombatLogo.jpeg",
        "/gemzLogo.jpeg",
        "/MuskEmpireLogo.jpeg",
        "/pixelVerseLogo.png",
        "/mafiaDaoLogo.webp",
        "/rockyRabbitLogo.png",
        "/grandCombat.webp",
        "/tapCoins.jpeg",
        "/blumLogo.png",
        "/tomarketLogo.png"
    ]


    return (
        <div className="relative overflow-hidden sm:w-full h-16 w-full  flex items-center justify-center">

            <motion.div
                className="flex sm:gap-5 gap-2 items-center w-full"
                initial={{ x: '0' }}
                animate={{ x: '-100%' }}
                transition={{
                    ease: 'linear',
                    duration: 15,
                    repeat: Infinity,
                }}
                style={{ whiteSpace: 'nowrap' }} 

            >

                {[...images,...images].map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt="Scrolling"
                        className="h-10 sm:h-14 sm:w-14 object-cover rounded-full inline-block w-10 "
                    />
                ))}

                {[...images,...images].map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt="Scrolling"
                        className="h-14 sm:h-14 sm:w-14 object-cover rounded-full inline-block w-14"
                    />
                ))}

            </motion.div>


        </div>
    );
};

export default ScrollingImage;
