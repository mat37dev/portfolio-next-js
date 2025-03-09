"use client";
import Image from "next/legacy/image";
import ProjectModal from "@/app/components/ProjectModal";
import {CalendarDays} from "lucide-react";
import {useState} from "react";

import portfolioImage from "/public/projectImages/portfolio.png"
import kodokaImage from "/public/projectImages/kodoka.png"
import geek4FunImage from "/public/projectImages/geek4Fun.png"
import covoiturageImage from "/public/projectImages/covoiturage.png"
import gameJamImage from "/public/projectImages/gameJam.png"
import towerDefenseImage from "/public/projectImages/towerDefense.jpg"
import plateformerImage from "/public/projectImages/plateformer.png"

const ProjectSection = () => {
    const projects = [
        {
            id: 7,
            title: "Portfolio",
            description: "Mon portfolio mettant en valeur mes différentes caractéristiques, mes projets, mes informations " +
                "ainsi que mes compétences.",
            fullDescription: "Portfolio réalisé avec NextJS, React et Tailwind. Ce site personnel permet de mettre en avant " +
                "les différentes compétences que j'ai pu acquérir et de lister tous les projets \"importants\" auxquels " +
                "j'ai participé. On y retrouve aussi mon cursus scolaire ainsi que mon parcours professionnel.",
            tags: ["Site", "Portfolio", "NextJS", "React", "Tailwind"],
            image: portfolioImage,
            techStack: ["NextJS", "React", "Tailwind", "HTML/CSS"],
            date: "27/02/2025",
            github: "https://github.com/mat37dev/portfolio-next-js"
        },
        {
            id: 6,
            title: "Site CRM-Kodoka",
            description: "Site listant les compétitions de jeux vidéo disponibles pour un festival.",
            fullDescription: "Réalisation d'un CRM pour l'entreprise en HTML/CSS/JavaScript/PHP avec le framework CodeIgniter. " +
                "Gestion des utilisateurs, des permissions, des devis/factures/avoirs.",
            tags: ["Site", "PHP", "BTS", "CodeIgniter", "Stage"],
            image: kodokaImage,
            techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "CodeIgniter"],
            date: "25/04/2023",
            github: "https://github.com/mat37dev/crm-kodoka"
        },
        {
            id: 5,
            title: "Site Geek4Fun",
            description: "Site listant les compétitions de jeux vidéo disponibles pour un festival.",
            fullDescription: "Site réalisé en cours durant ma deuxième année de BTS SIO. Le site a été réalisé par trois personnes : " +
                "Valentin Fortin, Timothée Diot et moi. Chacun avait son module. Mon module était la gestion des tournois " +
                "et le système de profil et de connexion. Le site permet d'enregistrer des jeux, permettant ainsi de proposer " +
                "de manière dynamique des tournois où les utilisateurs peuvent s'inscrire. Le site a été fait en PHP avec une " +
                "base de données MySQL et le framework CodeIgniter.",
            tags: ["Site", "PHP", "BTS", "CodeIgniter"],
            image: geek4FunImage,
            techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "CodeIgniter"],
            date: "08/11/2022",
            github: "https://github.com/mat37dev/Geek4Fun"
        },
        {
            id: 4,
            title: "Site de Covoiturage",
            description: "Site de covoiturage pour étudiants réalisé sans framework.",
            fullDescription: "Site de covoiturage réalisé durant les vacances entre ma première et ma deuxième année de BTS SIO. " +
                "Ce site a été réalisé avec un camarade de classe (Valentin Fortin) en PHP pur, sans framework. Il possède " +
                "un système de profil, un système pour enregistrer/rejoindre un trajet ainsi qu'une barre de recherche pour " +
                "trouver des covoitureurs correspondant à ses besoins.",
            tags: ["Site", "PHP", "BTS", "Covoiturage"],
            image: covoiturageImage,
            techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
            date: "05/05/2020",
        },
        {
            id: 3,
            title: "Find And Build",
            description: "Création d'un jeu vidéo 3D durant une Game Jam.",
            fullDescription: "Jeu vidéo créé durant une Game Jam avec deux autres coéquipiers (un modélisateur, un autre développeur et moi-même). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la Game Jam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\".",
            tags: ["Jeux Vidéo", "C#", "Game Jam"],
            image: gameJamImage,
            techStack: ["C#", "Unity"],
            date: "05/05/2020",
            download: "https://iphinis.itch.io/find-build"
        },
        {
            id: 2,
            title: "Mobile Defender",
            description: "Création d'un jeu vidéo 3D dans le style Tower Defense.",
            fullDescription: "Mobile Defender est un jeu de type Tower Defense sur mobile. L'objectif du jeu était de proposer " +
                "un jeu en 3D où le joueur pouvait se balader dans un monde représentant les composants du téléphone. Son objectif : " +
                "défendre un point vital du téléphone contre des virus à l'aide de tourelles. Le jeu a été réalisé en C# et était " +
                "disponible sur le Play Store.",
            tags: ["Jeux Vidéo", "C#"],
            image: towerDefenseImage,
            techStack: ["C#", "Unity", "Mobile"],
            date: "Non définie"
        },
        {
            id: 1,
            title: "Platformer Runner",
            description: "Création d'un jeu vidéo 2D dans le style plateforme.",
            fullDescription: "Jeu vidéo mobile créé seul. Le principe du jeu est de compléter différents niveaux, un peu " +
                "comme dans Mario Bros. Il faut se déplacer, récupérer des pièces, éviter les pièges et les ennemis pour finir " +
                "le niveau. Le jeu comprend un système de vies, des pièces permettant de débloquer des compétences ainsi qu'un " +
                "petit système de publicité. Le jeu a été réalisé en C# et était disponible sur le Play Store.",
            tags: ["Jeux Vidéo", "C#"],
            image: plateformerImage,
            techStack: ["C#", "Unity", "Mobile"],
            date: "Non définie"
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
                        <div className="absolute top-5 right-3 h-2/3 w-1/3 hidden xl:block">
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