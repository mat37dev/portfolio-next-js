"use client";
import React, { useState } from "react";
import {Mails, MapPinHouse} from "lucide-react";

const ContactSection = () => {
    const [status, setStatus] = useState("");
    const [emailCopied, setEmailCopied] = useState(false);
    const [addressCopied, setAddressCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("mathieu.crosnier15@outlook.fr").then(r => console.log(r));
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const copyAddress = () => {
        navigator.clipboard.writeText("Tours 37000").then(r => console.log(r));
        setAddressCopied(true);
        setTimeout(() => setAddressCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-16 bg-gray-900">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
                <div className="container mx-auto px-6 xl:col-span-3">
                    <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
                        Me Contacter
                    </h2>
                    <div className="max-w-3xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50 shadow-lg">
                        <form
                            action="https://formspree.io/f/xjkgqzdr"
                            method="POST"
                            className="space-y-6"
                            onSubmit={() => setStatus("success")} // Tu peux adapter selon tes besoins
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-300"
                                    >
                                        Prénom
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700/50 text-white shadow-sm focus:border-primary-600 focus:ring-primary-600"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-300"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700/50 text-white shadow-sm focus:border-primary-600 focus:ring-primary-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700/50 text-white shadow-sm focus:border-primary-600 focus:ring-primary-600"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700/50 text-white shadow-sm focus:border-primary-600 focus:ring-primary-600"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700/50 text-white shadow-sm focus:border-primary-600 focus:ring-primary-600"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors duration-300"
                                >
                                    Envoyer
                                </button>
                                {status === "success" && (
                                    <p className="mt-4 text-green-500 text-center">
                                        Message envoyé avec succès !
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container mx-auto px-6 xl:col-span-1 flex flex-col items-start justify-center space-y-10">
                    {/* Bloc Email */}
                    <div
                        className="flex items-center space-x-4 cursor-pointer relative"
                        onClick={copyEmail}>
                        <div className="size-16 bg-primary-600 rounded-full flex items-center justify-center">
                            <Mails />
                        </div>
                        <span className="text-gray-300">
                            mathieu.crosnier15@outlook.fr
                        </span>
                        {emailCopied && (
                            <div className="absolute top-full left-0 mt-1 px-2 py-1 bg-gray-700 text-white text-xs rounded">
                                Copied!
                            </div>
                        )}
                    </div>
                    {/* Bloc Adresse */}
                    <div
                        className="flex items-center space-x-4 cursor-pointer relative"
                        onClick={copyAddress}>
                        <div className="size-16 bg-primary-600 rounded-full flex items-center justify-center">
                            <MapPinHouse />
                        </div>
                        <span className="text-gray-300">
                            Tours 37000
                        </span>
                        {addressCopied && (
                            <div className="absolute top-full left-0 mt-1 px-2 py-1 bg-gray-700 text-white text-xs rounded">
                                Copied!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
