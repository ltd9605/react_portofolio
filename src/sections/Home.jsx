import { motion } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';

export function Home() {
    return (
        <section className="min-h-screen max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel w-fit border-[var(--accent)] border-opacity-30"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
                        </span>
                        <span className="text-sm font-medium text-[var(--accent)]">Available for new opportunities</span>
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-outfit tracking-tight leading-tight">
                            Hi, I'm{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#06b6d4]">
                                Le Tien Duc
                            </span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text-secondary)] font-outfit">
                            Software Engineer
                        </h2>
                    </div>

                    <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                        I craft beautiful, functional web experiences with a focus on clean code,
                        user experience, and modern technologies. Let's build something amazing together.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 bg-[var(--accent)] rounded-xl hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:-translate-y-1 preserve-3d"
                        >
                            <span className="mr-2">View Projects</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 glass-panel rounded-xl hover:bg-[var(--glass-bg)] hover:shadow-lg hover:-translate-y-1 preserve-3d"
                        >
                            <span className="mr-2">Contact Me</span>
                            <Mail size={18} />
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-6">
                        <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Connect</p>
                        <div className="h-px bg-[var(--glass-border)] flex-grow max-w-[100px]"></div>
                        <div className="flex gap-4">
                            <a href="https://github.com/ltd9605" className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors hover:-translate-y-1 block"><i className="fa-brands fa-github text-2xl"></i></a>
                            <a href="https://www.linkedin.com/in/s1vester" className="p-2 text-[var(--text-secondary)] hover:text-[#0077b5] transition-colors hover:-translate-y-1 block"><i className="fa-brands fa-linkedin text-2xl"></i></a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: 3D Illustration/Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    className="hidden lg:flex justify-center items-center perspective-1000 relative h-full min-h-[500px]"
                >
                    {/* 3D Floating Card representing Developer Skills */}
                    <motion.div
                        className="glass-card w-[400px] h-[450px] rounded-2xl relative flex flex-col p-8 justify-between preserve-3d"
                        animate={{
                            rotateY: [-5, 5, -5],
                            rotateX: [5, -5, 5],
                            y: [-10, 10, -10]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-2xl" />

                        <div className="relative space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <span className="text-xs font-mono text-[var(--text-secondary)]">developer.jsx</span>
                            </div>

                            <div className="font-mono text-sm space-y-2 text-[var(--text-secondary)]">
                                <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                                <p className="pl-4">name: <span className="text-green-400">'Le Tien Duc'</span>,</p>
                                <p className="pl-4">role: <span className="text-green-400">'Full Stack'</span>,</p>
                                <p className="pl-4">skills: [<span className="text-green-400">'React.js'</span>, <span className="text-green-400">'Node.js'</span>],</p>
                                <p className="pl-4">passion: <span className="text-green-400">'Building'</span></p>
                                <p>{'};'}</p>
                            </div>
                        </div>

                        {/* Floating elements attached to card */}
                        <motion.div
                            className="absolute -right-12 top-1/4 glass-panel p-4 rounded-xl preserve-3d"
                            animate={{ z: [20, 50, 20] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                                <i className="fa-brands fa-react text-2xl text-white"></i>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -left-8 bottom-1/4 glass-panel p-4 rounded-xl preserve-3d"
                            animate={{ z: [30, 60, 30] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center shadow-lg">
                                <i className="fa-brands fa-node-js text-2xl text-white"></i>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Background glow for card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--accent)]/30 rounded-full blur-[80px] -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
