import Projects from "@/app/components/Projects";
import Euro from "@/app/components/Euro";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      {/* Work Experience Section */}
      <section className="py-16 px-4 md:px-16 relative">
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

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-16 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills in software development, 
              from low-level systems programming to full-stack web applications.
            </p>
          </div>
          <Projects />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;