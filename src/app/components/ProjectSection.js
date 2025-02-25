"use client";

import {useState} from "react";
import ProjectModal from "@/app/components/ProjectModal";

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Find And Build",
            description: "Création d'un jeu vidéo durant une GameJam",
            fullDescription: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"],
            image: "/projectImages/gameJam.png",
            teckStack: ["C#", "Unity"]
        },
        {
            id: 2,
            title: "Find And Build 2",
            description: "Création d'un jeu vidéo durant une GameJam",
            fullDescription: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"],
            image: "/projectImages/gameJam.png",
            teckStack: ["C#", "Unity"]
        },
        {
            id: 3,
            title: "Find And Build 3",
            description: "Création d'un jeu vidéo durant une GameJam",
            fullDescription: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"],
            image: "/projectImages/gameJam.png",
            teckStack: ["C#", "Unity"]
        },
        {
            id: 4,
            title: "Find And Build 4",
            description: "Création d'un jeu vidéo durant une GameJam",
            fullDescription: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"],
            image: "/projectImages/gameJam.png",
            teckStack: ["C#", "Unity"]
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
                    <button onClick={()=>handleProjectClick(project.id)} key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border
                    border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left">
                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20
                                     text-primary-200 border border-primary-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
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