"use client";
import React from "react";
import {CalendarDays} from "lucide-react";
const TimelineSection = () => {
    return (
        <section id="timeline" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Parcours Professionnel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Section Education */}
                <div>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-primary-600">Education</h3>
                        <div className="space-y-6">
                            <div className="relative flex items-start space-x-4">
                                <div className="absolute left-6 ml-1.5 top-1 w-[5px] h-full bg-primary-600"></div>
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-4 h-4 bg-primary-600 rounded-full ml-2"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-sm text-gray-400 flex items-center">
                                        <CalendarDays className="mr-2" />2023 - 2025
                                    </h3>
                                    <h4 className="text-lg font-semibold text-white">
                                        Concepteur Développeur d&#39;Application
                                    </h4>
                                    <h5 className="text-gray-400">
                                        Titre: RNCP 6
                                    </h5>
                                </div>
                            </div>
                            <div className="relative flex items-start space-x-4">
                                <div className="absolute left-6 ml-1.5 top-1 w-[5px] h-full bg-primary-600"></div>
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-4 h-4 bg-primary-600 rounded-full ml-2"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-sm text-gray-400 flex items-center">
                                        <CalendarDays className="mr-2" />2021 - 2023
                                    </h3>
                                    <h4 className="text-lg font-semibold text-white">
                                        BTS SIO option: SLAM
                                    </h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Option: <br />- SLAM
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex items-start space-x-4">
                                <div className="absolute left-6 ml-1.5 top-1 w-[5px] h-full bg-primary-600"></div>
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-4 h-4 bg-primary-600 rounded-full ml-2"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-sm text-gray-400 flex items-center">
                                        <CalendarDays className="mr-2" />2018 - 2021
                                    </h3>
                                    <h4 className="text-lg font-semibold text-white">Bac Général</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Options:<br />- Mathématique<br />- NSI (Numérique et sciences de l&#39;informatique)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Expérience */}
                <div>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-primary-600">Expérience</h3>
                        <div className="space-y-6">
                            {/* Timeline Item Expérience: ESIMA */}
                            <div className="relative flex items-start space-x-4">
                                <div className="absolute left-6 ml-1.5 top-1 w-[5px] h-full bg-primary-600"></div>
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-4 h-4 bg-primary-600 rounded-full ml-2"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-sm text-gray-400 flex items-center">
                                        <CalendarDays className="mr-2" />01/09/2023 - 01/08/2025
                                    </h3>
                                    <h4 className="text-lg font-semibold text-white">Alternance: Esima-Armée de l&#39;air et de l&#39;espace</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Durant mon alternance à l&#39;Esima, j&#39;ai travaillé en équipe sur divers projets 
                                        tout au long de mon apprentissage. J&#39;y ai acquis de nouvelles méthodes de travail, 
                                        ainsi que de l&#39;expérience professionnelle et du savoir-faire. Les projets sur 
                                        lesquels nous avons travaillé m&#39;ont permis de découvrir Symfony et Twig. Les 
                                        normes de sécurité et le sérieux du travail m&#39;ont ainsi appris à évoluer dans 
                                        un cadre précis et réglementé. Par exemple, j&#39;ai pu approfondir mon utilisation
                                        de machines virtuelles hors ligne et me familiariser avec différentes normes de style
                                        imposées, telles que le DSFR.
                                    </p>
                                </div>
                            </div>
                            {/* Timeline Item Expérience: Kodoka */}
                            <div className="relative flex items-start space-x-4">
                                <div className="absolute left-6 ml-1.5 top-1 w-[5px] h-full bg-primary-600"></div>
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-4 h-4 bg-primary-600 rounded-full ml-2"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-sm text-gray-400 flex items-center">
                                        <CalendarDays className="mr-2" />06/03/2023 - 25/04/2023
                                    </h3>
                                    <h4 className="text-lg font-semibold text-white">Stage: Kõdoka</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Pendant mon stage, j&apos;ai travaillé avec un autre stagiaire sur la création
                                        d&apos;une application web de type CRM pour l&apos;entreprise. Nous avons utilisé
                                        PHP, HTML, CSS, JavaScript et AJAX pour assurer la fluidité de l&apos;actualisation.
                                        L&apos;application a été entièrement développée par nos soins, en respectant les normes
                                        de sécurité en vigueur.
                                    </p>
                                </div>
                            </div>
                            {/* Timeline Item Expérience: Kamisys */}
                            <div className="relative flex items-start space-x-4">
                                <div className="absolute left-6 ml-1.5 top-1 w-[5px] h-full bg-primary-600"></div>
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-4 h-4 bg-primary-600 rounded-full ml-2"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-sm text-gray-400 flex items-center">
                                        <CalendarDays className="mr-2" />23/05/2022 - 25/06/2022
                                    </h3>
                                    <h4 className="text-lg font-semibold text-white">Stage: Kamisys</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Durant ce stage, j&apos;ai eu pour mission d&apos;optimiser le script de génération de
                                        données en grande quantité pour des tests. J&apos;ai beaucoup appris avec JavaScript,
                                        Sequelize et MySQL.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
