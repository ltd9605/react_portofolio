import { useState } from "react";
import { motion } from 'motion/react';
export function Projects({ projects, certificates }) {
    const [activeTab, setActiveTab] = useState("projects");
    return (
        <section className="py-20 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="text-center mb-12">
                    <h2 className="mb-4 text-3xl font-semibold text-white">
                        {activeTab === "projects" ? "Featured Projects" : "Certificates"}
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {activeTab === "projects"
                            ? "Explore my latest web applications showcasing clean design and scalable architecture."
                            : "These certificates reflect my continuous learning and professional development."}
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="flex justify-center gap-4 mb-10">
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "projects"
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                            : "bg-slate-800 hover:bg-slate-700 text-gray-300"
                            }`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab("certificates")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "certificates"
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                            : "bg-slate-800 hover:bg-slate-700 text-gray-300"
                            }`}
                    >
                        Certificates
                    </button>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeTab === "projects" &&
                        projects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-slate-900/60 rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-600/10 transition-all duration-300"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs bg-indigo-600/20 text-indigo-300 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center gap-6 text-sm relative z-10">

                                        {/* Các link "Code" và "Live Demo" */}
                                        <div className="flex gap-6">
                                            <a
                                                href={project.github_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                            >
                                                <i className="fa-brands fa-github mr-2"></i>Code
                                            </a>
                                            {project.demo_link === null || project.demo_link === "" ? "" :
                                                <a
                                                    href={project.demo_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                                >
                                                    <i className="fa-solid fa-link mr-2"></i>Visit
                                                </a>}
                                        </div>
                                        <div className="relative group">
                                            <button
                                                type="button"
                                                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                            >
                                                <i className="fa-solid fa-list-check mr-2"></i>Features
                                            </button>
                                            <div
                                                className="absolute bottom-full mb-3 right-0 w-64 sm:w-74 p-4 
                                                            bg-slate-800 border border-slate-700 rounded-lg shadow-xl 
                                                            opacity-0 scale-95 invisible group-hover:opacity-100 
                                                            group-hover:scale-100 group-hover:visible 
                                                            transition-all duration-300 ease-in-out"
                                            >
                                                <h4 className="font-semibold text-white mb-2">Key Features</h4>
                                                <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                                                    {project.features && project.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                                <div className="absolute top-full right-4 w-0 h-0 
                                                            border-l-[6px] border-l-transparent
                                                            border-r-[6px] border-r-transparent
                                                            border-t-[6px] border-t-slate-700">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {activeTab === "certificates" &&
                        certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="group bg-slate-900/60 rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-600/10 transition-all duration-300"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4">{cert.description} - <span>{cert.date}</span> </p>

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-600/30 transition-colors"
                                    >
                                        View Certificate →
                                    </a>
                                </div>
                            </div>
                        ))}
                </motion.div>
            </div>
        </section>
    );
}
