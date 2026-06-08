import { motion } from 'motion/react';
import { MonitorSmartphone, Server, Palette, Cloud, Bot } from 'lucide-react';

const skillCategories = [
    {
        id: 1,
        title: 'Frontend',
        icon: <MonitorSmartphone size={24} />,
        skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Java Swing/FX'],
    },
    {
        id: 2,
        title: 'Backend',
        icon: <Server size={24} />,
        skills: ['Express.js', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
    },
    {
        id: 3,
        title: 'UI/UX Design',
        icon: <Palette size={24} />,
        skills: ['Figma', 'Canva'],
    },
    {
        id: 4,
        title: 'DevOps & Cloud',
        icon: <Cloud size={24} />,
        skills: ['Netlify', 'Docker', 'AWS'],
    },
    {
        id: 5,
        title: 'AI & Tools',
        icon: <Bot size={24} />,
        skills: ['Chat GPT', 'Gemini', 'Claude', 'Github', 'Postman'],
    },
];

export function Skills() {
    return (
        <section className="py-20 px-4 min-h-screen flex flex-col justify-center relative">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 text-[var(--text-primary)]">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#06b6d4]">Arsenal</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, rotateX: -10, y: 50 }}
                            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                            className="glass-card rounded-2xl p-8 relative overflow-hidden group preserve-3d cursor-pointer border border-[var(--glass-border)]"
                        >
                            {/* Glow Background */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-blue-500/10 blur-xl" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:scale-110 transition-transform duration-300 shadow-[var(--inner-glow)]">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-outfit">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm font-medium rounded-lg glass-panel text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-white"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
