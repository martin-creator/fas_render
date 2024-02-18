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
  const Message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Beatae dignissimos voluptate suscipit maiores aliquam dolor asperiores atque quo amet qui libero magni, nemo exercitationem ipsam, ex esse illum veritatis sequi expedita."
  return (
    <main className="bg-backgroundLight relative">
      <NavigationBar />
      <HeroComponent />
      <div className="mt-[500px] lg:mt-[700px] 2xl:mt-[900px]">
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
