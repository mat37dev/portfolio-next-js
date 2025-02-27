import Link from "next/link";
import {Github, Linkedin} from "lucide-react";

const Navbar = () => {
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
                <Link
                    href={"/"}
                    className="text-2xl md:text-3xl text-white font-normal"
                >
                    Portfolio
                </Link>
                <div
                    className="menu hidden md:block md:w-auto"
                    id="navbar"
                >
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li key="about">
                            <Link
                                href="#about"
                                aria-label="A propos de moi"
                                className="hover:text-slate-200"
                            >
                                A propos
                            </Link>
                        </li>
                        <li key="projects">
                            <Link
                                href="#projects"
                                className="hover:text-slate-200"
                                aria-label="Section Projets"
                            >
                                Projets
                            </Link>
                        </li>
                        <li key="github">
                            <Link
                                href="https://github.com/mat37dev"
                                className="hover:text-slate-200"
                                aria-label="Mon Github"
                                target="_blank"
                            >
                                <Github />
                            </Link>
                        </li>
                        <li key="linkedin">
                            <Link
                                href="https://www.linkedin.com/in/mathieu-crosnier-b78a16238/"
                                className="hover:text-slate-200"
                                target="_blank"
                                aria-label="Mon Linkedin"
                            >
                                <Linkedin />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;