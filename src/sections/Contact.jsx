import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { insertMessage } from '../services/api';

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!name || !email || !subject || !message) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        const newMessage = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        try {
            setLoading(true);
            await insertMessage(newMessage);

            alert("Sent successfully! Thank you for contacting me ❤️");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (err) {
            console.error("Lỗi không xác định:", err);
            alert("Đã xảy ra lỗi. Vui lòng thử lại sau!");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <section className="py-20 px-4 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 text-[var(--text-primary)]">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#06b6d4]">Touch</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 perspective-1000">
                    {/* Contact Info (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="space-y-6 lg:col-span-1 preserve-3d"
                    >
                        {/* Email */}
                        <div className="group glass-card p-6 rounded-2xl flex items-center gap-6 hover:translate-x-2 transition-transform duration-300 preserve-3d">
                            <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--text-primary)] font-outfit">Email</h4>
                                <p className="text-sm text-[var(--text-secondary)]">ltd9605@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group glass-card p-6 rounded-2xl flex items-center gap-6 hover:translate-x-2 transition-transform duration-300 preserve-3d">
                            <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--text-primary)] font-outfit">Phone</h4>
                                <p className="text-sm text-[var(--text-secondary)]">(+84) 364-002-647</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="group glass-card p-6 rounded-2xl flex items-center gap-6 hover:translate-x-2 transition-transform duration-300 preserve-3d">
                            <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--text-primary)] font-outfit">Location</h4>
                                <p className="text-sm text-[var(--text-secondary)]">District 5, Ho Chi Minh City</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: 10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass-card rounded-3xl p-8 md:p-12 preserve-3d relative overflow-hidden"
                    >
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--accent)]/20 rounded-full blur-[80px] pointer-events-none" />
                        
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)] pl-1">Name</label>
                                    <input 
                                        className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50" 
                                        id="name" 
                                        placeholder="John Doe" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)] pl-1">Email</label>
                                    <input
                                        value={email}
                                        className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50"
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-[var(--text-secondary)] pl-1">Subject</label>
                                <input 
                                    value={subject} 
                                    className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50" 
                                    id="subject" 
                                    placeholder="What's this about?" 
                                    onChange={(e) => setSubject(e.target.value)} 
                                    required 
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)] pl-1">Message</label>
                                <textarea
                                    className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 resize-none"
                                    id="message"
                                    placeholder="Hello there..."
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={5}
                                    value={message}
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="group w-full md:w-auto px-8 py-4 flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed" 
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                                {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
