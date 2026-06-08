import { motion } from 'motion/react';
import { Download, MapPin, Code2, GraduationCap } from 'lucide-react';

export function About() {
    return (
        <section className="min-h-screen py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 text-[var(--text-primary)]">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#06b6d4]">Me</span>
                </h2>
                <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                    A glimpse into who I am, what I do, and what drives me.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[250px] w-full">
                
                {/* Avatar & Intro Box (Spans 2 columns on tablet/desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card md:col-span-2 rounded-3xl p-8 flex flex-col sm:flex-row gap-8 items-center preserve-3d hover:-translate-y-2 transition-transform duration-500 group"
                >
                    <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-[var(--glass-border)] group-hover:border-[var(--accent)] transition-colors duration-500 shadow-xl">
                        <img
                            src="/avt_img.gif"
                            alt="Le Tien Duc"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--accent)]/10 to-blue-500/10 pointer-events-none" />
                    </div>
                    <div className="text-center sm:text-left space-y-4">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] font-outfit">Hi, I'm Le Tien Duc</h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            I’m a passionate developer who loves turning complex ideas into smooth,
                            user-friendly digital experiences. Focusing on writing clean, scalable
                            code and intuitive interfaces.
                        </p>
                    </div>
                </motion.div>

                {/* Location Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 preserve-3d hover:-translate-y-2 transition-transform duration-500"
                >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center text-blue-500">
                        <MapPin size={32} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[var(--text-primary)]">Location</h4>
                        <p className="text-sm text-[var(--text-secondary)]">Ho Chi Minh City, VN</p>
                    </div>
                </motion.div>

                {/* Passion Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 preserve-3d hover:-translate-y-2 transition-transform duration-500 bg-gradient-to-br from-[var(--accent)]/10 to-transparent"
                >
                    <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                        <Code2 size={32} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[var(--text-primary)]">Passion</h4>
                        <p className="text-sm text-[var(--text-secondary)]">Exploring new tech & UI</p>
                    </div>
                </motion.div>

                {/* Education Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 preserve-3d hover:-translate-y-2 transition-transform duration-500"
                >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 flex items-center justify-center text-emerald-500">
                        <GraduationCap size={32} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[var(--text-primary)]">Education</h4>
                        <p className="text-sm text-[var(--text-secondary)]">IT Student</p>
                    </div>
                </motion.div>

                {/* CV Download Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-6 preserve-3d hover:-translate-y-2 transition-transform duration-500 border border-[var(--accent)]/30"
                >
                    <h4 className="font-bold text-xl text-[var(--text-primary)] font-outfit">Curriculum Vitae</h4>
                    <a
                        href='https://fjkxopxhkwngtwrykyhb.supabase.co/storage/v1/object/public/cv-files/Le-Tien-Duc-ITsupportCV.pdf'
                        target='_blank'
                        className="group flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        <span>Download</span>
                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
