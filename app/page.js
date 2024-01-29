import AboutComponent from '@/components/AboutComponent'
import HeroComponent from '@/components/HeroComponent'
import ImpactComponent from '@/components/ImpactComponent';
import PartnersComponent from '@/components/PartnersComponent';
import ProgramsComponent from '@/components/ProgramsComponent';

export default function Home() {
  return (
    <main className="bg-backgroundLight">
      <HeroComponent />
      <AboutComponent />
      <ImpactComponent />
      <ProgramsComponent />
      <PartnersComponent/>
    </main>
  );
}
