import { motion } from 'motion/react';
import { useState } from 'react';
export function Contact({ supabase }) {
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
            const { error } = await supabase
                .from("messages")
                .insert([newMessage]);

            if (error) {
                alert("Send failed! Please try again.");
            } else {
                alert("Sent successfully! Thank you for contacting me ❤️");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            }
        } catch (err) {
            console.error("Lỗi không xác định:", err);
            alert("Đã xảy ra lỗi. Vui lòng thử lại sau!");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <h2 className="mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-6  w-1xl">
                        <div className="flex flex-col justify-between p-6 h-full">
                            {/* Email */}
                            <div className="flex bg-black/60 items-start gap-4 border border-purple-500/20 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300">
                                <div className="p-4 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                    <i className="fa-solid fa-envelope text-purple-400 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                                    <p className="text-gray-400">ltd9605@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex bg-black/60 items-start gap-4 border border-purple-500/20 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300">
                                <div className="p-4 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                    <i className="fa-solid fa-phone text-purple-400 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                                    <p className="text-gray-400">(+84) 364-002-647 </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex bg-black/60 items-start gap-4 border border-purple-500/20 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300">
                                <div className="p-4 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                    <i className="fa-solid fa-location-dot text-purple-400 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                                    <p className="text-gray-400">District 5 , Ho Chi Minh City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        viewport={{ once: false }}
                        className="lg:col-span-2 border border-white bg-black/60 rounded-lg">
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block mb-2">
                                            Name
                                        </label>
                                        <input className="px-2 py-1 w-full bg-gray-900 rounded-md" id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2">
                                            Email
                                        </label>
                                        <input
                                            value={email}
                                            className="px-2 py-1 bg-gray-900 w-full rounded-md"
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block mb-2">
                                        Subject
                                    </label>
                                    <input value={subject} className="px-2 py-1 w-full bg-gray-900 rounded-md" id="subject" placeholder="What's this about?" onChange={(e) => setSubject(e.target.value)} required />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        className="px-2 py-1 w-full bg-gray-900 rounded-xs"
                                        id="message"
                                        placeholder="Your message..."
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={6}
                                        value={message}
                                        required
                                    />
                                </div>

                                <button type="submit" size="lg" className="w-full px-2 py-1 rounded-md text-black bg-white/30 hover:bg-white/90" disabled={loading}>
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
