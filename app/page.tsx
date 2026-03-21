import Hero from '@/app/components/Hero';
import Skills from '@/app/components/Skills';
import Euro from '@/app/components/Euro';
import Projects from '@/app/components/Projects';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-white dark:bg-gray-900">

      <Hero />

      {/* Work Experience Section */}
      <section id="experience" className="py-16 px-4 md:px-16 relative w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full"></div>
          </div>
          <Euro />
        </div>
      </section>

      {/* Skills Section */}
      <div className="flex flex-col items-center mx-4 md:mx-8 lg:mx-16 my-8 md:my-12 lg:my-16">
        <div className="text-center mb-12">
          <h2 id="skills" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full"></div>
        </div>
        <Skills />
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-16 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <Projects />
        </div>
      </section>
    </main>
  );
}



