const ProjectSection = () => {
    const projects = [
        {
            title: "Find And Build",
            description: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"]
        },
        {
            title: "Find And Build",
            description: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"]
        },
        {
            title: "Find And Build",
            description: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"]
        },
        {
            title: "Find And Build",
            description: "Jeux vidéo créée durant une GameJam avec deux autres coéquipiers (2 développeurs, 1 modélisateur). " +
                "Le principe du jeu est de retrouver des morceaux de la ville pour la reconstruire. Règle de la GameJam : " +
                "2 jours pour réaliser le jeu sur le thème : \"trouver et construire\". Projet réalisé en C#",
            tags: ["Jeux-Vidéos", "C#"]
        },
    ]
    return (
        <section id="projectSection" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets Réalisés</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border
                    border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm">
                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20
                                    text-primary-500/20 text-primary-200 border border-primary-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection;