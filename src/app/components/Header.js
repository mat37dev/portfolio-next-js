"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
                <Link
                    href={"/"}
                    className="text-2xl md:text-3xl text-white font-normal"
                >
                    Portfolio
                </Link>

                {/* Hamburger button — visible only on mobile */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop nav + mobile overlay */}
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } md:block w-full md:w-auto absolute md:static top-full left-0 right-0 bg-gray-900 md:bg-transparent border-t border-[#33353F] md:border-0`}
                >
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 md:space-x-8 mt-0 space-y-4 md:space-y-0">
                        <li>
                            <Link
                                href="#about"
                                aria-label="A propos de moi"
                                className="hover:text-slate-200 block"
                                onClick={close}
                            >
                                A propos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#projects"
                                className="hover:text-slate-200 block"
                                aria-label="Section Projets"
                                onClick={close}
                            >
                                Projets
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#skill"
                                className="hover:text-slate-200 block"
                                aria-label="Section Compétences"
                                onClick={close}
                            >
                                Mes Compétences
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/mat37dev"
                                className="hover:text-slate-200 flex items-center gap-2 md:block"
                                aria-label="Mon Github"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={close}
                            >
                                <Github />
                                <span className="md:hidden">GitHub</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.linkedin.com/in/mathieu-crosnier-b78a16238/"
                                className="hover:text-slate-200 flex items-center gap-2 md:block"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Mon Linkedin"
                                onClick={close}
                            >
                                <Linkedin />
                                <span className="md:hidden">LinkedIn</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
