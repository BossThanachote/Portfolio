import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <container className="container mt-24 mx-auto px-12 py-4">
        <HeaderSection />
        <AchievementsSection />      
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </container>
      <Footer />
    </main>
  );
}
