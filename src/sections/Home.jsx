import { motion } from 'motion/react';
export function Home() {
    return (
        <section className="h-screen max-w-full flex items-center justify-center px-4 text-xl">
            <div className=" mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                >
                    <div
                        className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20"
                    >
                        <p className="text-purple-400">Welcome to my portfolio</p>
                    </div>

                    <h1
                        className="mb-6"
                    >
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Le Tien Duc
                        </span>
                    </h1>

                    <h2
                        className="mb-6 text-muted-foreground"
                    >
                        Software engineering & Full Stack Developer
                    </h2>

                    <p
                        className="mb-8 text-muted-foreground max-w-2xl mx-auto"
                    >
                        I craft beautiful, functional web experiences with a focus on clean code,
                        user experience, and modern technologies. Let's build something amazing together.
                    </p>
                    <div className="flex gap-4 justify-center items-center flex-wrap">
                        <div className="flex gap-4">
                            <div className="flex gap-4">
                                <div className="flex gap-4">
                                    <a href="#contact" className="bg-purple-600 text-white px-3 py-1 rounded-lg text-base font-medium border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 transition-colors duration-300">
                                        Get in Touch
                                    </a>
                                    <a href="#projects" className="border-2 border-purple-600 text-purple-600 px-3 py-1 rounded-lg text-base font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300">
                                        View Projects
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="flex gap-4 justify-center mt-8">

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
