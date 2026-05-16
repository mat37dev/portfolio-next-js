import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});

export const metadata = {
    metadataBase: new URL("https://mathieucrosnier.fr"),
    title: "Mathieu Crosnier — Développeur Fullstack | Nantes",
    description: "Portfolio de Mathieu Crosnier, développeur fullstack en Master SIN à l'EPSI Nantes, alternant chez Cloudity. Découvrez mes projets et compétences en développement web, Salesforce et applications mobiles.",
    keywords: "Mathieu Crosnier, développeur fullstack Nantes, développeur web Nantes, alternant Salesforce, Master SIN EPSI, Next.js, React, Apex, portfolio développeur fullstack, Cloudity",
    authors: [{ name: "Mathieu Crosnier" }],
    alternates: { canonical: "https://mathieucrosnier.fr" },
    openGraph: {
        title: "Mathieu Crosnier — Développeur Fullstack | Nantes",
        description: "Portfolio de Mathieu Crosnier, développeur fullstack en Master SIN à l'EPSI Nantes, alternant chez Cloudity.",
        url: "https://mathieucrosnier.fr",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mathieu Crosnier — Développeur Fullstack | Nantes",
        description: "Portfolio de Mathieu Crosnier, développeur fullstack en Master SIN à l'EPSI Nantes.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mathieu Crosnier",
    url: "https://mathieucrosnier.fr",
    email: "mathieu.crosnier15@outlook.fr",
    jobTitle: "Développeur Web",
    alumniOf: { "@type": "EducationalOrganization", name: "EPSI Nantes" },
    worksFor: { "@type": "Organization", name: "Cloudity" },
    knowsAbout: ["Next.js", "React", "JavaScript", "Salesforce", "Apex", "PHP", "Symfony"],
    sameAs: [
        "https://github.com/mat37dev",
        "https://www.linkedin.com/in/mathieu-crosnier-b78a16238/",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta name="apple-mobile-web-app-title" content="Crosnier Mathieu" />
                <link rel="icon" type="image/svg+xml" href="/icon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white-100 text-slate-50 font-normal leading-relaxed`}
            >
                <Navbar />
                <div className="mt-4 md:mt-14">{children}</div>
                <Footer />
                <ScrollToTop />
                <Analytics />
            </body>
        </html>
    );
}
