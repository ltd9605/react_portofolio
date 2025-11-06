import { motion } from 'motion/react';

export function WelcomePreloader() {
    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ backgroundColor: 'var(--dark-bg)' }}
        >
            <motion.div
                initial={{ opacity: 0.7, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                }}
            >
                <h1
                    className="text-6xl p-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--logo-font)' }}
                >
                    Silvester
                </h1>
            </motion.div>
            <p className="mt-4 text-lg font-medium text-purple-300 animate-pulse">
                Initializing...
            </p>
        </div>
    );
}