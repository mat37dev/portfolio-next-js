"use client";
import Image from "next/image";
import { motion } from "motion/react"
import htmlImage from "/public/logoSkills/html.png";
import javascriptImage from "/public/logoSkills/javascript.png";
import bootstrapImage from "/public/logoSkills/bootstrap.png";
import tailwindImage from "/public/logoSkills/tailwind.svg";
import reactImage from "/public/logoSkills/react.png";
import nextJsImage from "/public/logoSkills/nextJs.png";
import phpImage from "/public/logoSkills/php.png";
import symfonyImage from "/public/logoSkills/symfony.png";
import pythonImage from "/public/logoSkills/python.png";
import javaImage from "/public/logoSkills/java.png";
import csharpImage from "/public/logoSkills/csharp.png";
import expoImage from "/public/logoSkills/expoGo.png";
import mysqlImage from "/public/logoSkills/mysql.png";
import postgresqlImage from "/public/logoSkills/postgresql.png";
import githubImage from "/public/logoSkills/github.png";
import nodeImage from "/public/logoSkills/node.png";
import dockerImage from "/public/logoSkills/docker.png";

export default function SkillSection() {
    const skills = [
        { name: "HTML & CSS", image: htmlImage },
        { name: "JavaScript", image: javascriptImage },
        { name: "Bootstrap", image: bootstrapImage },
        { name: "Tailwind CSS", image: tailwindImage },
        { name: "React", image: reactImage },
        { name: "Next.js", image: nextJsImage },
        { name: "PHP", image: phpImage },
        { name: "Symfony", image: symfonyImage },
        { name: "Python", image: pythonImage },
        { name: "Java", image: javaImage },
        { name: "C#", image: csharpImage },
        { name: "Expo", image: expoImage },
        { name: "MySQL", image: mysqlImage },
        { name: "PostgreSQL", image: postgresqlImage },
        { name: "Git", image: githubImage },
        { name: "Node.js", image: nodeImage },
        { name: "Docker", image: dockerImage },
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
