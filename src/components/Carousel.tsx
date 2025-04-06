import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Certificate, { CertificateType } from './Certificate';
import { certificates } from './certificates.ts';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextCertificate = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    };

    const prevCertificate = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
        );
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <div className="relative w-full mx-auto py-8">
            <div className="flex items-center w-full">
                <AnimatePresence custom={direction} mode="wait" >
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        layout
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <Certificate certificate={certificates[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <button
                onClick={prevCertificate}
                className="absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-3 rounded-full hover:scale-110 transition-all shadow-lg z-10"
            >
                &#8249;
            </button>
            <button
                onClick={nextCertificate}
                className="absolute -right-6 md:-right-10 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-3 rounded-full hover:scale-110 transition-all shadow-lg z-10"
            >
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
