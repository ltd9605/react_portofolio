import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ListChecks, ArrowRight, LayoutTemplate, Award, Eye } from 'lucide-react';
import { ProjectDetailModal } from '../components/ProjectDetailModal';

export function Projects({ projects, certificates }) {
    const [activeTab, setActiveTab] = useState("projects");
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <section className="py-20 px-4 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center mb-12">
                    <h2 className="mb-4 text-3xl md:text-5xl font-bold font-outfit text-[var(--text-primary)]">
                        {activeTab === "projects" ? "Featured " : "My "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#06b6d4]">
                            {activeTab === "projects" ? "Projects" : "Certificates"}
                        </span>
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        {activeTab === "projects"
                            ? "Explore my latest web applications showcasing clean design and scalable architecture."
                            : "These certificates reflect my continuous learning and professional development."}
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 preserve-3d ${activeTab === "projects"
                            ? "bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/30 scale-105"
                            : "glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]"
                            }`}
                    >
                        <LayoutTemplate size={18} /> Projects
                    </button>
                    <button
                        onClick={() => setActiveTab("certificates")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 preserve-3d ${activeTab === "certificates"
                            ? "bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/30 scale-105"
                            : "glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]"
                            }`}
                    >
                        <Award size={18} /> Certificates
                    </button>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                    <AnimatePresence mode="wait">
                        {activeTab === "projects" &&
                            projects?.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, rotateX: 10, y: 50 }}
                                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                                    className="group glass-card rounded-2xl overflow-hidden preserve-3d cursor-pointer flex flex-col h-full"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="relative overflow-hidden h-48 shrink-0">
                                        <img
                                            src={project.project_img}
                                            alt={project.project_name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80" />
                                        
                                        {/* View Details Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-300">
                                            <span className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <Eye size={18} /> View Details
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 relative z-10 bg-gradient-to-b from-transparent to-[var(--glass-bg)] flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] font-outfit">
                                            {project.project_name}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] mb-4 text-sm line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                                            {project.technologies?.slice(0, 4).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-[10px] font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded border border-[var(--accent)]/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.technologies?.length > 4 && (
                                                <span className="px-2 py-1 text-[10px] font-medium bg-[var(--glass-bg)] text-[var(--text-secondary)] rounded border border-[var(--glass-border)]">
                                                    +{project.technologies.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex justify-between items-center gap-4 text-sm pt-4 border-t border-[var(--glass-border)]">
                                            <div className="flex gap-4">
                                                <a
                                                    href={project.links?.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:scale-110"
                                                >
                                                    <i className="fa-brands fa-github text-lg"></i> Code
                                                </a>
                                                {(!project.links?.demo && !project.links?.visit) ? null :
                                                    <a
                                                        href={project.links?.demo || project.links?.visit}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors hover:scale-110"
                                                    >
                                                        <ExternalLink size={18} /> Visit
                                                    </a>}
                                            </div>
                                            <div className="relative group/features">
                                                <button
                                                    type="button"
                                                    className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                                >
                                                    <ListChecks size={18} /> Features
                                                </button>
                                                <div
                                                    className="absolute bottom-full mb-4 right-0 w-56 p-4 
                                                                glass-panel rounded-xl shadow-2xl 
                                                                opacity-0 scale-95 invisible group-hover/features:opacity-100 
                                                                group-hover/features:scale-100 group-hover/features:visible 
                                                                transition-all duration-300 ease-out origin-bottom-right"
                                                >
                                                    <h4 className="font-bold text-[var(--text-primary)] mb-2 text-sm">Key Features</h4>
                                                    <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                                                        {project.features && project.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start gap-2">
                                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        {activeTab === "certificates" &&
                            certificates?.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, rotateX: 10, y: 50 }}
                                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                                    className="group glass-card rounded-2xl overflow-hidden preserve-3d flex flex-col"
                                >
                                    <div className="relative overflow-hidden h-48 shrink-0">
                                        <img
                                            src={cert.certificate_img}
                                            alt={cert.certificate_name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent opacity-80" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] font-outfit">
                                            {cert.certificate_name}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] mb-4 text-sm flex-1">
                                            {cert.description} <br/>
                                            <span className="text-[var(--accent)] text-sm font-medium">Issued: {cert.issue_date ? new Date(cert.issue_date).toLocaleDateString() : ''}</span>
                                        </p>

                                        <a
                                            href={cert.links?.verify}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)]/10 text-[var(--accent)] font-semibold rounded-xl hover:bg-[var(--accent)] hover:text-white transition-all duration-300 mt-auto border border-[var(--accent)]/20"
                                        >
                                            View Credential <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
            </div>
            
            <ProjectDetailModal 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
                project={selectedProject} 
            />
        </section>
    );
}
