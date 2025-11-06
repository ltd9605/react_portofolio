export function Footer() {
    return (
        <footer className="border-t border-border py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Sivester
                        </h3>
                        <p className="text-muted-foreground">
                            Building digital experiences that make a difference.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4">Connect</h4>
                        <div className="flex  items-center gap-4">
                            <a
                                href="https://github.com/ltd9605"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-2 bg-black/60 rounded-lg hover:bg-purple-600/50 transition-all duration-300"
                            >
                                <i className="fa-brands fa-github text-white text-xl"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/s1vester/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-2 bg-black/60 rounded-lg hover:bg-blue-600/50 transition-all duration-300"
                            >
                                <i className="fa-brands fa-linkedin text-white text-xl"></i>
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-2 bg-black/60 rounded-lg hover:bg-sky-500/50 transition-all duration-300"
                            >
                                <i className="fa-brands fa-twitter text-white text-xl"></i>
                            </a>

                            <a
                                href="mailto:ltd9605@gmail.com"
                                className="flex items-center justify-center p-2 bg-black/60 rounded-lg hover:bg-rose-500/50 transition-all duration-300"
                            >
                                <i className="fa-solid fa-envelope text-white text-xl"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center text-muted-foreground">
                    <p>© 2025 Silvester. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
