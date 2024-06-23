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
  const Message = "Are you passionate about training the next generation of young scientists? Is your research organization looking to extend its training programs to young African scientists? Are you seeking to hire exceptional young scientists for your projects in Africa? Are you part of a student or professional community seeking quality training programs for your members? Partner with us to make a meaningful impact. "
  return (
    <main className="bg-backgroundLight relative">
      <NavigationBar />
      <HeroComponent />
      <div className="mt-[780px] md:mt-[1100px] lg:mt-[650px] 2xl:mt-[900px]">
        <AboutComponent />
        <ImpactComponent />
        <ProgramsComponent />
        <PartnersComponent />
        <TestimonialsComponent />
        <CTAComponent
          SectionTitle={"Partner With Us"}
          Message={Message}
          ButtonTitle={"Get Started"}
        />
        <Footer />
      </div>
    </main>
  );
}
