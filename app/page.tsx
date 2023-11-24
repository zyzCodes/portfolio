import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Image from 'next/image';
import mountains from '../public/mountains.jpg';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">

      <Hero />

      <div className="flex flex-col items-center mx-4 md:mx-8 lg:mx-16 my-8 md:my-12 lg:my-16">
        <h1 id="skills" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 pb-2 md:pb-4 mt-4 pt-4">
          Skills 🧑🏻‍💻
        </h1>
        <Skills />
      </div>
    </main>
  );
}



