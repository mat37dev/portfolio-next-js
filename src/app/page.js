import ProjectSection from "@/app/components/ProjectSection";
import HeroSection from "@/app/components/HeroSection";
import TimelineSection from "@/app/components/TimelineSection";
import ContactSection from "@/app/components/ContactSection";
import SkillSection from "@/app/components/SkillSection";


export default function Home() {
    return (
        <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
            <HeroSection />
            <TimelineSection/>
            <SkillSection/>
            <ProjectSection />
            <ContactSection />
        </div>
    );
}