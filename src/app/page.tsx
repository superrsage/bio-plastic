import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Crisis from '@/components/Crisis';
import Transformation from '@/components/Transformation';
import Engine from '@/components/Engine';
import Roadmap from '@/components/Roadmap';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <Crisis />
        <Transformation />
        <Engine />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
