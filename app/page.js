import AboutComponent from "@/components/AboutComponent";
import CTAComponent from "@/components/CTAComponent";
import Footer from "@/components/Footer";
import HeroComponent from "@/components/HeroComponent";
import ImpactComponent from "@/components/ImpactComponent";
import NavigationBar from "@/components/NavigationBar";
import PartnersComponent from "@/components/PartnersComponent";
import ProgramsComponent from "@/components/ProgramsComponent";
import TestimonialsComponent from "@/components/TestimonialsComponent";

export default function Home() {
  return (
    <main className="bg-backgroundLight relative">
      <NavigationBar />
      <HeroComponent />
      <div className="mt-[500px]">
        <AboutComponent />
        <ImpactComponent />
        <ProgramsComponent />
        <PartnersComponent />
        <TestimonialsComponent />
        <CTAComponent />
        <Footer />
      </div>
    </main>
  );
}
