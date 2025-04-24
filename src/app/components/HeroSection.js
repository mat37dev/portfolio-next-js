"use client";
import {useState} from "react";
import Image from "next/legacy/image";
import {redirect} from "next/navigation";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({x: 50, y: 50});
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (ev) => {
        if (!isHovering) return;
        const rect = ev.currentTarget.getBoundingClientRect();
        const x = ((ev.clientX - rect.left) / rect.width) * 100;
        const y = ((ev.clientY - rect.top) / rect.height) * 100;
        setMousePosition({x, y});
    };

    return (
        <section
            id="about"
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div
                className="pattern-bg default-fade pointer-events-none"
                style={{
                    opacity: isHovering ? 0 : 0.3,
                    transition: "opacity 0.5s ease-in-out",
                }}
            />
            <div
                className="pattern-bg pointer-events-none"
                style={{
                    WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(15 23 42) 0%, transparent 35%)`,
                    mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(15 23 42) 0%, transparent 35%)`,
                    opacity: isHovering ? 0.3 : 0,
                }}
            />
            <div className="opacity-10 pointer-events-none">
                <div
                    className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary-700/50 rounded-full blur-3xl"></div>
                <div
                    className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary-500/60 rounded-full blur-2xl"></div>
                <div
                    className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary-400/70 rounded-full blur-xl"></div>
            </div>
            <div className="relative z-10 mt-6 flex flex-col md:flex-row items-center gap-6">
                {/* Conteneur texte avec largeur max et centrage */}
                <div className="flex-1 max-w-md mx-auto md:max-w-none md:mx-0">
                    <h1 className="text-4xl font-bold tracking-light">
                        Bonjour! Je suis Mathieu
                        <span className="block text-primary-600 text-2xl">
                            Développeur Concepteur d&#39;Application
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 leading-8">
                        Je me présente, je m&#39;appelle Mathieu Crosnier. Étudiant en alternance pour le titre de
                        Concepteur Développeur d&#39;Application afin de m’orienter vers les métiers du développement
                        informatique.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center sm:space-x-6">
                        <span
                            className="text-gray-300 sm:text-xl border-b-2 border-gray-300 hover:border-primary-600
                            transition-colors duration-300">
                            Email: mathieu.crosnier15@outlook.fr
                        </span>
                        <span
                            className="text-gray-300 sm:text-xl border-b-2 border-gray-300 hover:border-primary-600
                            transition-colors duration-300">
                            Age: 22&nbsp;ans
                        </span>
                        <span
                            className="text-gray-300 sm:text-xl border-b-2 border-gray-300 hover:border-primary-600
                            transition-colors duration-300">
                            Région : Touraine
                        </span>
                    </div>
                </div>
                {/* Conteneur image */}
                <div className="relative w-32 h-32 lg:w-64 lg:h-64 mx-auto">
                    <Image
                        src="/avatar.png"
                        alt="Photo de profil de Mathieu Crosnier"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        priority
                    />
                </div>
            </div>
            <div className="flex mt-10 gap-4 relative justify-center items-center md:justify-normal md:items-start z-10">
                <button
                    className="px-8 py-3 rounded-lg border border-gray-600 hover:border-primary-500 font-medium bg-slate-900 "
                    onClick={() => {
                        redirect("#contact")
                    }}
                >
                    Contactez Moi!
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
