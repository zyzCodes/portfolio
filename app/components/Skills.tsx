'use client'

import { useEffect, useRef, useState } from 'react';

const Skills: React.FC = () => {
    const languages: string[] = ["Python", "C", "C#", "C++", "JavaScript", "Java"];
    const aiData: string[] = ["NumPy", "Pandas", "Plotly", "SPSS"];
    const frontendDesign: string[] = ["HTML", "CSS", "React.js", "Postman", "Figma", "Tailwind CSS", "REST APIs", "Bootstrap"];
    const backendOther: string[] = ["Git", "Bitbucket", "Django", ".NET", "SQL", "NoSQL", "MongoDB", "AWS"];

    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    // Function to map skills to elements with animation
    const renderSkillSet = (skills: string[], startDelay: number = 0) => skills.map((skill, index) => (
        <div
            key={index}
            className={`skill-item bg-gray-200 rounded-full px-4 py-2 m-1 text-sm md:text-base hover:bg-gray-300 transition-colors duration-300 ${isVisible ? 'animate' : ''}`}
            style={{ animationDelay: `${startDelay + (index * 0.1)}s` }}
        >
            {skill}
        </div>
    ));

    return (
        <div ref={skillsRef} className="flex flex-col items-center pb-7">
            <div className="experience-container w-full md:w-[800px]">
                {/* Languages Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">Languages: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(languages, 0.1)}
                    </div>
                </div>

                {/* AI/Data Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">AI/Data: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(aiData, 0.8)}
                    </div>
                </div>

                {/* Frontend/Design Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">Frontend/Design: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(frontendDesign, 1.2)}
                    </div>
                </div>

                {/* Backend/Other Section */}
                <div className="pb-4">
                    <span className="font-bold text-sm md:text-base">Backend/Other: </span>
                    <div className="flex flex-wrap justify-start items-center">
                        {renderSkillSet(backendOther, 2.0)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;