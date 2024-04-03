const Skills = () => {
    const languages = ["Python", "C", "C#", "C++", "JavaScript", "Julia"];
    const aiData = ["NumPy", "Pandas", "Plotly", "SPSS"];
    const frontendDesign = ["HTML", "CSS", "React.js", "Next.js", "Postman", "Figma", "Tailwind CSS", "REST APIs", "Bootstrap"];
    const backendOther = ["Git", "Bitbucket", "Django", ".NET", "SQL", "NoSQL", "MongoDB", "Excel", "Word"];

    const renderSkillSet = (skills) => skills.map((skill, index) => (
        <div key={index} className="bg-gray-200 rounded-full px-4 py-2 m-1 text-sm md:text-base">
            {skill}
        </div>
    ));

    return (
        <div className="flex flex-col items-center pb-7">
            <div className="experience-container w-full md:w-[800px]">
                {/* Languages Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">Languages: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(languages)}
                    </div>
                </div>

                {/* AI/Data Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">AI/Data: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(aiData)}
                    </div>
                </div>

                {/* Frontend/Design Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">Frontend/Design: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(frontendDesign)}
                    </div>
                </div>

                {/* Backend/Other Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">Backend/Other: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(backendOther)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
