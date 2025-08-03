interface ExperienceItem {
    company: string;
    position: string;
    location: string;
    duration: string;
    logo: string;
    bullets: string[];
}

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
    <div className="flex justify-center pb-11">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px]">
            <div className="flex items-start gap-4 pb-3 sm:pb-4">
                <div className="flex-shrink-0">
                    <img 
                        src={item.logo} 
                        alt={`${item.company} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center pb-2">
                        <div className="w-full xl:w-auto">
                            <h2 className="text-xl sm:text-xl md:text-2xl font-bold leading-tight">{item.company} | {item.position}</h2>
                        </div>
                        <div className="mt-2 xl:mt-0 xl:text-right w-full xl:w-auto">
                            <p className="text-base sm:text-base md:text-lg text-gray-600 dark:text-gray-400">{item.location} | {item.duration}</p>
                        </div>
                    </div>
                    {item.bullets.map((bullet, index) => (
                        <p key={index} className="text-sm sm:text-sm md:text-base lg:text-lg pb-2 sm:pb-3 leading-relaxed">{bullet}</p>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const experienceData: ExperienceItem[] = [
    {
        company: "Amazon Web Services (AWS)",
        position: "Software Dev Engineer Intern",
        location: "Vancouver, B.C.",
        duration: "May 2025 – Aug 2025",
        logo: "/awsLogo.jpeg",
        bullets: [
            "• Designed and implemented a new RDS for Oracle API to safely apply DB system changes with minimal downtime.",
            "• Worked on engineering backend systems to automate and stabilize database operations."
        ]
    },
    {
        company: "Amazon Web Services (AWS)",
        position: "Software Dev Engineer Intern",
        location: "Vancouver, B.C.",
        duration: "May 2024 – Aug 2024",
        logo: "/awsLogo.jpeg",
        bullets: [
            "• Implemented new Java-based features to enhance AWS RDS Custom for Oracle cloud service.",
            "• Delivered major efficiency gains by bringing a 2-hour task down to 10 minutes.",
            "• Enhanced a microservice used to build binary snapshots of an Oracle or SQL Server Database, by utilizing AWS cloud services such as EC2, S3, DynamoDB, Lambda, and EBS to improve the functionality and performance.",
            "• Drove design reviews with senior engineers to align on customer experience, architecture, and end-to-end integration."
        ]
    },
    {
        company: "University of Alberta",
        position: "Resident Assistant",
        location: "Edmonton, AB",
        duration: "Sept 2023 – Apr 2024",
        logo: "/university_of_alberta_logo.jpeg",
        bullets: [
            "• Supported a community of 3600+ university students through leadership, coordination, and event planning, fostering academic achievement, career success, diversity, and inclusivity."
        ]
    },
    {
        company: "Eurotranciatura",
        position: "Software Developer Engineer Intern",
        location: "Queretaro, Mexico",
        duration: "June 2022 – Aug 2022",
        logo: "/eurotranciaturalogo.jpeg",
        bullets: [
            "• Developed dashboards and web apps to monitor factory production using Python, MySQL, JavaScript, C#, and .NET—tools now used across the plant.",
            "• Engineered tools that automated and streamlined a labor-intensive task, transforming it into an efficient instant solution that significantly saved time for the management team."
        ]
    }
];

const Euro = () => {
    return (
        <div>
            {experienceData.map((item, index) => (
                <ExperienceCard key={index} item={item} />
            ))}
        </div>
    );
}

export default Euro;

