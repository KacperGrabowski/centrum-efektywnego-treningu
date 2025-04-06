import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export interface CertificateType {
    trainingName: string;
    participantName: string;
    instructors: string[];
    dateIssued: string;
    logos: string[];
    certificateImage: string;
}

const Certificate: React.FC<{ certificate: CertificateType }> = ({ certificate }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-8 bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative flex flex-col items-center text-center ring-4 ring-gray-300">

            <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                Certyfikat uczestnictwa
            </h2>

            <h3 className="text-2xl font-semibold text-gray-700 mb-6 italic">
                {certificate.trainingName}
            </h3>

            <p className="text-3xl text-gray-900 font-serif font-bold mb-6 border-b border-gray-300 pb-2">
                {certificate.participantName}
            </p>

            <div className="w-full flex flex-col sm:flex-row justify-between items-center text-gray-600">
                <div className="text-sm sm:text-left mb-4 sm:mb-0">
                    <ul className="list-disc ml-4 mt-1">
                        {certificate.instructors.map((instructor, index) => (
                            <li key={index}>{instructor}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-sm sm:text-right">
                    <p className="font-medium">Data wystawienia:</p>
                    <p className="mt-1 font-semibold">{certificate.dateIssued}</p>
                </div>
            </div>

            <div className="w-full flex justify-center gap-6 items-center mt-auto">
                {certificate.logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="h-16 object-contain transition-transform duration-300 hover:scale-110"
                    />
                ))}
            </div>

            <button
                onClick={openModal}
                className="absolute top-4 right-4 px-5 py-2 bg-gradient-to-r from-[#1a1a2e] to-[#3a0ca3] text-white font-semibold rounded-full hover:from-[#0f0f1c] hover:to-[#5f0fcd] transition-all duration-300 shadow-lg transform hover:scale-105"
            >
                Zobacz zdjęcie
            </button>

            {isModalOpen && (
                <motion.div
                    className="inset-0 fixed bg-black bg-opacity-60 flex justify-center items-center z-100"
                    onClick={closeModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative bg-white p-6 rounded-lg shadow-xl max-h-[90vh] max-w-3xl w-full overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-red-500 p-3 rounded-full hover:bg-red-600 transition-all duration-200 z-10"
                        >
                            X
                        </button>
                        <img
                            src={certificate.certificateImage}
                            alt="Certificate"
                            className="w-full max-w-3xl h-auto object-contain min-h-[400px]"
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Certificate;
