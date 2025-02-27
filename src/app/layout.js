import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600"], // Ajoute uniquement les poids nécessaires
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});


export const metadata = {
  title: "Portfolio| Crosnier Mathieu",
  description: "Portfolio de Mathieu Crosnier, étudiant et développeur passionné. Découvrez mes projets innovants et mes " +
      "compétences en conception et développement d'applications web modernes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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
