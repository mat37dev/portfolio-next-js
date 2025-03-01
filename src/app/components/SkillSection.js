"use client";
import Image from "next/legacy/image";
import { motion } from "motion/react"

export default function SkillSection() {
    const skills = [
        { name: "HTML & CSS", image: "/logoSkills/html.png" },
        { name: "JavaScript", image: "/logoSkills/javascript.png" },
        { name: "Bootstrap", image: "/logoSkills/bootstrap.png" },
        { name: "Tailwind CSS", image: "/logoSkills/tailwind.svg" },
        { name: "React", image: "/logoSkills/react.png" },
        { name: "Next.js", image: "/logoSkills/nextJs.png" },
        { name: "PHP", image: "/logoSkills/php.png" },
        { name: "Symfony", image: "/logoSkills/symfony.png" },
        { name: "Python", image: "/logoSkills/python.png" },
        { name: "Java", image: "/logoSkills/java.png" },
        { name: "C#", image: "/logoSkills/csharp.png" },
        { name: "React Native", image: "/logoSkills/react.png" },
        { name: "Expo", image: "/logoSkills/expoGo.png" },
        { name: "MySQL", image: "/logoSkills/mysql.png" },
        { name: "PostgreSQL", image: "/logoSkills/postgresql.png" },
        { name: "Git", image: "/logoSkills/github.png" },
        { name: "Node.js", image: "/logoSkills/node.png" },
        { name: "Docker", image: "/logoSkills/docker.png" },
    ];

    return (
        <section id="skill" className="p-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Compétences Maîtrisées et Explorées
            </h2>
            {/* Container centré avec une largeur réduite sur lg et un gap réduit entre les cartes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        whileHover={{
                            scale: [null, 1.1],
                            transition: {
                                duration: 0.3,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },

                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        key={index}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 shadow-lg
                        flex flex-col items-center justify-center w-5/6 lg:w-4/6 mx-auto mb-3"
                    >
                        <div className="relative w-20 h-20 mb-4">
                            <Image
                                src={skill.image}
                                alt={skill.name}
                                layout="fill"
                                objectFit="contain"
                                sizes="cover"
                                priority
                            />
                        </div>
                        <span className="text-white text-sm font-medium">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
