import { motion } from 'motion/react';
const skillCategories = [
    {
        id: 1,
        title: 'Frontend Development',
        skills: ['HTML5/CSS', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Java Swing'],
    },
    {
        id: 2,
        title: 'Backend Development',
        skills: ['Node.js', 'Express.js', 'Java', 'NonSQL', 'SQL', 'MongoDB'],
    },
    {
        id: 3,
        title: 'UI/UX Design',
        skills: ['Figma', 'Canvas', 'Responsive Design',],
    },
    {
        id: 4,
        title: 'DevOps & Cloud',
        skills: ['Netlify', 'Docker', 'CI/CD'],
    },
    {
        id: 5,
        title: 'AI Tools & Others',
        skills: ['GPT', 'Gemini', 'Compilot'],
    },
];

export function Skills() {
    return (
        <section className="py-20 px-4  text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I specialize in modern web technologies and continuously expand my skill set
                        to stay current with industry trends.
                    </p>
                </motion.div>

                {/* Skill Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 p-6 transition-all duration-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:border-purple-500/40"
                        >
                            {/* Glow background effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-700/20 via-transparent to-blue-700/20 blur-xl" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-purple-500/20">
                                        <i className="fa-solid fa-code text-purple-400 text-lg"></i>
                                    </div>
                                    <h3 className="text-lg font-semibold">{category.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-gray-400 flex items-center gap-2 hover:text-purple-300 transition-colors duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
