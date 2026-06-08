import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function ProjectDetailModal({ isOpen, onClose, project }) {
    const [readmeContent, setReadmeContent] = useState('');
    const [loadingReadme, setLoadingReadme] = useState(false);
    const [errorReadme, setErrorReadme] = useState(null);

    useEffect(() => {
        if (!isOpen || !project || !project.links?.github) return;

        const fetchReadme = async () => {
            setLoadingReadme(true);
            setErrorReadme(null);
            setReadmeContent('');

            // Extract user and repo from github link
            const githubLink = project.links.github;
            const match = githubLink.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (!match) {
                setErrorReadme('Invalid Github link');
                setLoadingReadme(false);
                return;
            }

            const user = match[1];
            const repo = match[2];

            try {
                // Try fetching from main branch
                let response = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/README.md`);
                if (!response.ok) {
                    // Try fetching from master branch
                    response = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`);
                }

                if (response.ok) {
                    const text = await response.text();
                    setReadmeContent(text);
                } else {
                    setErrorReadme('No README.md found in the repository.');
                }
            } catch (err) {
                setErrorReadme('Failed to fetch README.md');
            } finally {
                setLoadingReadme(false);
            }
        };

        fetchReadme();
    }, [isOpen, project]);

    return createPortal(
        <AnimatePresence>
            {(isOpen && project) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
                >
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--bg-primary)] border border-[var(--glass-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md">
                            <h2 className="text-2xl font-bold font-outfit text-[var(--text-primary)]">
                                {project.project_name}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">

                            {/* Top Info Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="rounded-xl overflow-hidden shadow-lg border border-[var(--glass-border)] h-[300px]">
                                    <img
                                        src={project.project_img}
                                        alt={project.project_name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-outfit">About</h3>
                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-outfit">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg border border-[var(--accent)]/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {project.links?.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white transition-colors"
                                            >
                                                <i className="fa-brands fa-github text-xl"></i> Repository
                                            </a>
                                        )}
                                        {(project.links?.demo || project.links?.visit) && (
                                            <a
                                                href={project.links.demo || project.links.visit}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all"
                                            >
                                                <ExternalLink size={20} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* README Section */}
                            <div className="border-t border-[var(--glass-border)] pt-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <BookOpen className="text-[var(--accent)]" size={24} />
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] font-outfit">Project README</h3>
                                </div>

                                <div className="glass-panel p-6 rounded-2xl min-h-[200px]">
                                    {loadingReadme ? (
                                        <div className="flex items-center justify-center h-40">
                                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[var(--accent)]"></div>
                                        </div>
                                    ) : errorReadme ? (
                                        <div className="flex items-center gap-2 text-yellow-500 h-20 justify-center">
                                            <AlertCircle size={20} />
                                            <span>{errorReadme}</span>
                                        </div>
                                    ) : readmeContent ? (
                                        <div className="prose prose-invert prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-a:text-[var(--accent)] prose-strong:text-[var(--text-primary)] max-w-none">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {readmeContent}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        <div className="text-center text-[var(--text-secondary)] py-10">
                                            No README content available.
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
