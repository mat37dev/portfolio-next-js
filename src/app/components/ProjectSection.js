"use client";
import Image from "next/legacy/image";
import React, {useState} from "react";
import ProjectModal from "@/app/components/ProjectModal";
import {CalendarDays} from "lucide-react";

const ProjectSection = () => {
    const projects = [
        {
            id: 7,
            title: "portfolio",
            description: "Mon Portfolio mettant en valeurs mes différentes caractéristiques, mes projets, mes informations " +
                "ainsi que mes compétences .",
            fullDescription: "Portfolio réalisé avec NextJS, React et Tailwind. Ce site personnel permet de mettre en avant " +
                "les différentes compétences que j'ai pu apprendre et permet de lister tous les projets \"important\" auxquels " +
                "j'ai pu participer. On y retrouve aussi pour cursus scolaire ainsi que mon parcour professionnel.",
            tags: ["Site","Portfolio", "NextJS", "React", "Tailwind"],
            image: "/projectImages/portfolio.png",
            teckStack: ["NextJS", "React", "Tailwind", "Html/Css"],
            date: "25/04/2023",
            github: "https://github.com/mat37dev/portfolio-next-js"
        },
        {
            id: 6,
            title: "Site crm-kodoka",
            description: "Site listant les compétitions de jeux-vidéos disponibles pour un festival.",
            fullDescription: "Réalisation d'un crm pour l'entreprise en Html/css/javascript/php avec le framework CodeIgniter. " +
                "Gestion des utilisateurs, des permissions, des devis/factures/avoirs.",
            tags: ["Site", "PHP", "BTS", "CodeIgniter", "Stage"],
            image: "/projectImages/kodoka.png",
            teckStack: ["Php", "MySql", "Html/Css", "JavaScript", "CodeIgniter"],
            date: "25/04/2023",
            github: "https://github.com/mat37dev/crm-kodoka"
        },
        {
            id: 5,
            title: "Site Geek4Fun",
            description: "Site listant les compétitions de jeux-vidéos disponibles pour un festival.",
            fullDescription: "Site réalisé en cours durant ma deuxième année de BTs SIO. Le site a été réalisé par 3 personnes : " +
                "Valentin Fortin, Timothée Diot et moi. Chacun avec son module. Mon module étant la gestion des tournois " +
                "et le système de profil et connexion. Le site permet d'enregistrer des jeux, permettant ainsi de proposer " +
                "de manière dynamique des tournois ou les utilisateurs peuvent s'inscrire. Le site a été fait en php avec une " +
                "base de donnée MySql et le Framework CodeIgniter.",
            tags: ["Site", "PHP", "BTS", "CodeIgniter"],
            image: "/projectImages/geek4Fun.png",
            teckStack: ["Php", "MySql", "Html/Css", "JavaScript", "CodeIgniter"],
            date: "08/11/2022",
            github: "https://github.com/mat37dev/Geek4Fun"
        },
        {
            id: 4,
            title: "Site de Covoiturage",
            description: "Site de covoiturage pour étudiant réalisé sans Framework.",
            fullDescription: "Site de covoiturage réalisé durant les vacances entre ma première année de BTS SIO et ma deuxième " +
                "année. Ce site a été réalisé avec un camarade de classe (Valentin Fortin) en php pure sans framework. Il possède " +
                "un système de profile, système pour enregistrer/rejoindre un trajet ainsi qu'une barre de recherche pour " +
                "trouver des covoitureurs qui nous correspond.",
            tags: ["Site", "PHP", "BTS", "Covoiturage"],
            image: "/projectImages/covoiturage.png",
            teckStack: ["Php", "MySql", "Html/Css", "JavaScript"],
            date: "05/05/2020",
        },
        {
            id: 3,
            title: "Find And Build",
            description: "Création d'un jeu vidéo 3D durant une GameJam",
            fullDescription: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (1 modélisateur, un autre développeur et moi même). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\".",
            tags: ["Jeux-Vidéos", "C#", "GameJam"],
            image: "/projectImages/gameJam.png",
            teckStack: ["C#", "Unity"],
            date: "05/05/2020",
            download: "https://iphinis.itch.io/find-build"
        },
        {
            id: 2,
            title: "Mobile Defender",
            description: "Création d'un jeu vidéo 3D dans le style Tower Defense",
            fullDescription: "Mobile Defender est un jeu de type Tower Defense sur mobile. L'objectif du jeu était de proposer " +
                "un jeu en 3D ou le joueur pouvait se balader dans un monde représentant les composants du téléphone. Son objectif, " +
                "défendre un point vital du téléphone des virus à l'aide de tourelles. Le jeu a été réalisé en C# et était " +
                "disponible sur le PlayStore.",
            tags: ["Jeux-Vidéos", "C#"],
            image: "/projectImages/towerDefense.jpg",
            teckStack: ["C#", "Unity", "Mobile"],
            date: "Non Définie"
        },
        {
            id: 1,
            title: "Plateformer Runner",
            description: "Création d'un jeu vidéo 2D dans le style plateformer",
            fullDescription: "Jeux vidéo mobile créée seul. Le principe du jeu est de réaliser les différents niveaux un peu " +
                "comme le jeu mario bros. Il  faut se balader, récupérer les pièces, éviter les pièges et ennemis pour finir " +
                "le niveau. Le jeu comprend un système de vie, de pièce permettant de débloquer des compétences ainsi qu'un " +
                "petit système de publicité. Le jeu a été réalisé en C# et était disponible sur le PlayStore.",
            tags: ["Jeux-Vidéos", "C#"],
            image: "/projectImages/plateformer.webp",
            teckStack: ["C#", "Unity", "Mobile"],
            date: "Non Définie"
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
                                <CalendarDays size="16" className="mr-2" />{project.date}
                            </p>
                            <div className="flex flex-wrap gap-1 max-w-72 sm:max-w-48">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20
                                     text-primary-200 border border-primary-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-5 right-3 h-2/3 w-1/3 sm:hidden xl:block">
                            <Image src={project.image} alt={project.title} layout="fill" objectFit="contain" priority/>
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