"use client";
import Image from "next/image";
import { motion } from "motion/react";
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

const categories = [
    {
        name: "Frontend",
        skills: [
            { name: "HTML & CSS", image: htmlImage },
            { name: "JavaScript", image: javascriptImage },
            { name: "Bootstrap", image: bootstrapImage },
            { name: "Tailwind CSS", image: tailwindImage },
            { name: "React", image: reactImage },
            { name: "Next.js", image: nextJsImage },
        ],
    },
    {
        name: "Backend",
        skills: [
            { name: "PHP", image: phpImage },
            { name: "Symfony", image: symfonyImage },
            { name: "Python", image: pythonImage },
            { name: "Java", image: javaImage },
            { name: "C#", image: csharpImage },
            { name: "Node.js", image: nodeImage },
        ],
    },
    {
        name: "Mobile",
        skills: [
            { name: "Expo", image: expoImage },
        ],
    },
    {
        name: "Base de données",
        skills: [
            { name: "MySQL", image: mysqlImage },
            { name: "PostgreSQL", image: postgresqlImage },
        ],
    },
    {
        name: "DevOps & Outils",
        skills: [
            { name: "Git", image: githubImage },
            { name: "Docker", image: dockerImage },
        ],
    },
    {
        name: "CRM Salesforce",
        skills: [
            { name: "Salesforce", initials: "SF", color: "#00A1E0" },
            { name: "Apex", initials: "Ax", color: "#1797C0" },
            { name: "SOQL", initials: "SQL", color: "#0070D2" },
            { name: "Flow", initials: "Flow", color: "#032D60" },
        ],
    },
];

const SkillCard = ({ skill }) => (
    <motion.div
        whileHover={{
            scale: [null, 1.1],
            transition: { duration: 0.3, times: [0, 0.6, 1], ease: ["easeInOut", "easeOut"] },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 shadow-lg
        flex flex-col items-center justify-center w-5/6 lg:w-4/6 mx-auto"
    >
        {skill.image ? (
            <div className="relative w-20 h-20 mb-4">
                <Image src={skill.image} alt={skill.name} priority />
            </div>
        ) : (
            <div
                className="w-20 h-20 mb-4 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: skill.color }}
            >
                {skill.initials}
            </div>
        )}
        <span className="text-white text-sm font-medium">{skill.name}</span>
    </motion.div>
);

export default function SkillSection() {
    return (
        <section id="skill" className="p-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Compétences Maîtrisées et Explorées
            </h2>
            <div className="space-y-10">
                {categories.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-1 border-b border-gray-700/50">
                            {category.name}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                            {category.skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
