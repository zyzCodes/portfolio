import Projects from "@/components/Projects";

const Portfolio = () => {
  return (
    <div className="flex justify-center mx-16 my-16">
      <div className="">
        <h1 className="text-4xl font-bold mb-4 pb-4 mt-4 pt-4">Projects </h1>
        <Projects />
        <h1 className="text-4xl font-bold mb-4 pb-4 mt-4 pt-4">Work Experience</h1>
        <div className="experience-container w-[800]">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Eurotranciatura</h2>
            </div>
            <div>
              <p className="text-right">Queretaro, Mexico | 06/2022 - 08/2022</p>
            </div>
          </div>
          <p className="text-sm md:text-base">
            Developed web applications and dashboards that monitored the company’s production and machines by using Python, MySQL, JavaScript, HTML, CSS, Git, and Bitbucket. These dashboards and web applications are being displayed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


