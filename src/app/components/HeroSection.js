"use client";
import { useState } from "react";
import Link from "next/link";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (ev) => {
        if (!isHovering) return;
        const rect = ev.currentTarget.getBoundingClientRect();
        const x = ((ev.clientX - rect.left) / rect.width) * 100;
        const y = ((ev.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div
                className="pattern-bg default-fade"
                style={{
                    opacity: isHovering ? 0 : 0.3,
                    transition: "opacity 0.5s ease-in-out",
                }}
            ></div>
            <div
                className="pattern-bg"
                style={{
                    WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
                    mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
                    opacity: isHovering ? 0.3 : 0,
                }}
            ></div>
            <div className="opacity-10">
                <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary-700/50 rounded-full blur-3xl"></div>
                <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary-500/60 rounded-full blur-2xl"></div>
                <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary-400/70 rounded-full blur-xl"></div>
            </div>
            <h1 className="text-4xl font-bold tracking-light">
                Concepteur Développeur d&#39;Application
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-8">
                Bonjour, je suis Mathieu Crosnier. Je suis Étudiant en Development, Développeur Back End, Développeur
                Jeux-Vidéo amateur.
            </p>
            <div className="flex mt-10 gap-4">
                <Link
                    href={`/posts/3`}
                    className="px-8 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500"
                >
                    About Me
                </Link>
                <button className="px-8 py-3 rounded-lg border border-gray-600 hover:border-primary-500 font-medium bg-slate-900">
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default HeroSection;