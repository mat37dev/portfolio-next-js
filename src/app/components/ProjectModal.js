import Image from "next/legacy/image";
import {X, ChevronLeft, ChevronRight, Github, Download} from "lucide-react";
import {useEffect, useRef} from "react";
import Link from "next/link";

export default function ProjectModal({project, onClose, onNext, onPrevious}) {
    const modalRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleOutsideClick = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
             onClick={handleOutsideClick} ref={modalRef}>
            <div ref={modalRef}
                 className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-12 h-10/12"
                 onClick={(e) => {
                     e.stopPropagation()
                 }}>
                <div className="flex justify-between mb-3">
                    <h2 className="text-2xl font-bold text-primary-50">
                        {project.title}
                    </h2>
                    <div className="flex items-center space-x-4">
                        {project.download && (

                            <div className="relative group">
                                <Link
                                    href={project.download}
                                    className="hover:text-slate-300"
                                    target="_blank"
                                    aria-label="Télécharger le projet"
                                >
                                    <Download/>
                                </Link>
                                <div
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1
                                    bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    Télécharger
                                </div>
                            </div>
                        )}
                        {project.github && (
                            <div className="relative group">
                                <Link
                                    href={project.github}
                                    className="hover:text-slate-300"
                                    target="_blank"
                                    aria-label="Github du projet"
                                >
                                    <Github/>
                                </Link>
                                <div
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1
                                    bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    GitHub Code
                                </div>
                            </div>
                        )}


                    </div>
                    <button onClick={onClose} className="text-primary-50 hover:text-primary-400 rounded-full p-2
                    bg-gray-800/50  hover:bg-gray-800/70 transition-colors">
                        <X size={24}/>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-4 md:w-1/2">
                        <p className="text-gray-300">{project.description}</p>
                        <p className="text-gray-300">{project.fullDescription}</p>
                        <div>
                            <h3 className="font-semibold mb-2 text-primary">Pile technologique:</h3>
                            <ul className="list-disc list-inside">
                                {project.techStack.map((tech, index) => (
                                    <li className="text-gray-300" key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-64 w-full md:w-1/2 md:h-auto">
                        <Image src={project.image} alt={project.title} layout="fill" objectFit="contain" loading="lazy"/>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
                        <button onClick={onPrevious} className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70
                        transition-colors -translate-x-full">
                            <ChevronLeft size={24}/>
                        </button>
                        <button onClick={onNext} className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70
                        transition-colors -translate-x-[120%]">
                            <ChevronRight size={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}