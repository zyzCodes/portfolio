import Projects from "@/components/Projects";
import Euro from "@/components/Euro";
import ResidentAssistant from "@/components/ResidentAssistant";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center mx-16 my-16">
      {/* Centered heading */}
      <h1 className="text-4xl font-bold mb-4 pb-4 mt-4 pt-4">Projects 🚀</h1>

      {/* Content (Projects and Work components) */}
      <div className="flex justify-center">
        <div className="">
          <Projects />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4 pb-4 mt-4 pt-4">Work Experience 💻</h1>
      <Euro />
      <ResidentAssistant />
    </div>
  );
};

export default Portfolio;


