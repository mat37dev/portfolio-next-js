import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-500">
            <div className="container">
                <div className="flex flex-col items-center justify-center py-8 gap-4">
                    <div className="flex items-center gap-6">
                        <Link
                            href="https://github.com/mat37dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Mon GitHub"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            <Github size={22} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/mathieu-crosnier-b78a16238/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Mon LinkedIn"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            <Linkedin size={22} />
                        </Link>
                    </div>
                    <p className="text-gray-400 text-center text-sm">
                        &copy; 2026 Crosnier Mathieu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
