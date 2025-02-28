"use client";
import Image from "next/image";

export default function SkillSection() {
    const skills = [
        { name: "PHP", image: "/logoSkills/php.jpg" },
        { name: "JavaScript", image: "/logoSkills/javascript.png" },
        { name: "React", image: "/logoSkills/react.png" },
        // Ajoute d'autres compétences si besoin...
    ];

    return (
        <section id="skill" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Compétences Découvertes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 shadow-lg flex flex-col items-center justify-center"
                    >
                        <div className="relative w-20 h-20 mb-4">
                            <Image
                                src={skill.image}
                                alt={skill.name}
                                layout="fill"
                                objectFit="contain"
                                sizes="cover"
                            />
                        </div>
                        <span className="text-white text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
