import { motion } from 'motion/react';
export function About() {
    return (
        <section className="h-screen max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-space-between gap-12 px-6 lg:px-12 text-xl">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                viewport={{ once: false }}
                className="flex-1 text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <p className="text-purple-400">Software Engineering</p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="mb-4 text-4xl font-bold">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Le Tien Duc
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="mb-6 text-lg text-muted-foreground">
                    Information Technology Student
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="text-base text-muted-foreground max-w-2xl text-center lg:text-left">
                    I’m a passionate developer who loves turning complex ideas into smooth,
                    user-friendly digital experiences. My focus is on writing clean, scalable
                    code and creating intuitive interfaces that deliver real value to users.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="text-base text-muted-foreground max-w-2xl text-center lg:text-left">
                    Outside of coding, I enjoy exploring new technologies, designing sleek UI layouts,
                    and constantly learning to improve my craft. My goal is to create products that
                    not only work well but also inspire users.
                </motion.p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center lg:justify-start flex-wrap mt-6">
                    <a
                        href='https://fjkxopxhkwngtwrykyhb.supabase.co/storage/v1/object/public/cv-files/Le-Tien-Duc-ITsupportCV.pdf'
                        target='_blank'
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-base font-medium border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                viewport={{ once: false }}
                className="flex-1 flex justify-center mt-10 lg:mt-0">
                <div className="relative w-74 h-74 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20 hover:scale-130 transition-transform duration-500">
                    <img
                        src="/avt_img.gif"
                        alt="Le Tien Duc"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 pointer-events-none" />
                </div>
            </motion.div>
        </section>
    );
}
