import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
    title: "Portfolio | Crosnier Mathieu",
    description: "Portfolio de Mathieu Crosnier, étudiant et développeur passionné. Découvrez mes projets innovants et mes compétences en développement web moderne.",
    keywords: "Mathieu Crosnier, développeur web, Next.js, React, programmation, portfolio, projets web, Crosnier Mathieu",
    author: "Mathieu Crosnier",
    openGraph: {
        title: "Portfolio | Crosnier Mathieu",
        description: "Découvrez mes projets et mes compétences en développement web moderne.",
        url: "https://mathieucrosnier.fr",
        type: "website",
        images: [
            {
                url: "https://mathieucrosnier.fr/avatar.png",
                width: 1200,
                height: 630,
                alt: "Portfolio de Mathieu Crosnier"
            }
        ]
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
    <head>
        <meta name="apple-mobile-web-app-title" content="Crosnier Mathieu" />
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white-100 text-slate-50 font-normal leading-relaxed`}
    >
        <Navbar />
        <div className="mt-4 md:mt-14">
            {children}
        </div>
      <Footer />
      </body>
    </html>
  );
}
