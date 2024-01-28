import AboutComponent from '@/components/AboutComponent'
import HeroComponent from '@/components/HeroComponent'
import ImpactComponent from '@/components/ImpactComponent';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-backgroundLight">
      <HeroComponent />
      <AboutComponent />
      <ImpactComponent />
    </main>
  );
}
