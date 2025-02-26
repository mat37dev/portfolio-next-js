"use client";
import Image from "next/image";
import React, {useState} from "react";
import ProjectModal from "@/app/components/ProjectModal";
import {CalendarDays} from "lucide-react";

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Plateformer Runner",
            description: "Création d'un jeu vidéo 2D dans le style plateformer",
            fullDescription: "Jeux vidéo créée seul. Le principe du jeu est de réaliser les différents niveaux un peu " +
                "comme le jeu mario bros. Il  faut se balader, récupérer les pièces, éviter les pièges et ennemis pour finir " +
                "le niveau. Le jeu comprend un système de vie, de pièce permettant de débloquer des compétences ainsi qu'un " +
                "petit système de publicité. Le jeu a été réalisé en C# et était disponible sur le PlayStore.",
            tags: ["Jeux-Vidéos", "C#"],
            image: "/projectImages/plateformer.webp",
            teckStack: ["C#", "Unity"],
            date: "Non Définie."
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (id) =>{
        setSelectedProject(id);
    }

    const handleClose = () => {
        setSelectedProject(null);
    }

    const handleNextProject = () => {
        const currentIndex = projects.findIndex(project => project.id === selectedProject);

        if(currentIndex === -1) {
            return null;
        }
        const nextIndex = (currentIndex + 1) % projects.length;
        setSelectedProject(projects[nextIndex].id);
    }

    const handlePreviousProject = () => {
        const currentIndex = projects.findIndex(project => project.id === selectedProject);

        if(currentIndex === -1) {
            return null;
        }
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setSelectedProject(projects[prevIndex].id);
    }

    return (
        <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets Réalisés</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project, index) => (
                    <button onClick={()=>handleProjectClick(project.id)} key={index} className="relative bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border
                    border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left">
                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                            <p className="text-xs text-gray-400 flex items-center mb-3">
                                <CalendarDays size="16" className="mr-2" />06/03/2023 - 25/04/2023
                            </p>
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20
                                     text-primary-200 border border-primary-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-5 right-3 h-2/3 w-1/3 md:hidden xl:block">
                            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                        </div>
                    </button>
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    project={projects.find((project) => project.id === selectedProject)}
                    onClose={handleClose}
                    onNext={handleNextProject}
                    onPrevious={handlePreviousProject} />
            )}
        </section>
    )
}

export default ProjectSection;