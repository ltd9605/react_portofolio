import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function WelcomePreloader({ isReady, onEnter }) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (isReady) {
            const timer = setTimeout(() => {
                setShowButton(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isReady]);

    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative z-10 flex flex-col items-center"
            >
                <motion.h1
                    className="text-7xl md:text-9xl p-3 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent font-bold tracking-wider"
                    style={{ fontFamily: 'var(--font-momo)' }}
                    initial={{ scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    Silvester
                </motion.h1>
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2"
                />
            </motion.div>

            <div className="mt-12 h-[60px] relative z-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {!showButton ? (
                        <motion.p
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-lg font-medium text-purple-300 animate-pulse tracking-widest"
                            style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                            INITIALIZING...
                        </motion.p>
                    ) : (
                        <motion.button
                            key="enter"
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={onEnter}
                            className="px-8 py-3 rounded-full bg-transparent border border-purple-500/50 text-purple-300 font-semibold tracking-widest hover:bg-purple-500/10 hover:text-white transition-all duration-300 cursor-pointer"
                            style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                            ENTER PORTFOLIO
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}