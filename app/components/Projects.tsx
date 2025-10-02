import Image from 'next/image'
import Link from 'next/link'

interface ProjectItem {
    title: string;
    description: string;
    technologies: string;
    image?: string;
    link?: string;
}

const ProjectCard = ({ project }: { project: ProjectItem }) => {
    const CardContent = (
        <div className="card card-compact w-[400px] h-[450px] bg-base-100 shadow-xl relative hover:translate-y-1 hover:shadow-glow-blue">
            {project.image && (
                <div className='image-container'>
                    <Image 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        width={1000} 
                        height={1000} 
                        className='rounded-t-md'
                    />
                </div>
            )}
            <div className="card-body">
                <h2 className="card-title text-sky-400">{project.title}</h2>
                <p className='text-black'>{project.description}</p>
                <p className='text-black'>{project.technologies}</p>
            </div>
        </div>
    );

    if (project.link) {
        return (
            <Link href={project.link} target="_blank">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
};

const projectsData: ProjectItem[] = [
    {
        title: "DragonShell",
        description: "A custom terminal emulator implemented using low-level Linux system calls for direct process management and I/O control",
        technologies: "Built with C",
        image: "/dragonshell.png",
        link: "https://youtu.be/aajCXitSXhg"
    },
    {
        title: "Vehicle Telemetry System",
        description: "Real-time passenger counting system using image recognition and Kafka data pipeline.",
        technologies: "Built with Python, Django, PostgreSQL, and Kafka",
        image: "/vehicleTelemetrySystem.jpg"
    },
    {
        title: "Event Pooling Service",
        description: "Android mobile app for event creation and registration.",
        technologies: "Built with Java, Android Studio, and Firestore",
        image:"/social-media-app.png"
    },
    {
        title: "Euro Graph",
        description: "Dashboard application that queries data from MySQL database and displays the data in Dashboard.",
        technologies: "Built with Python, Plotly, and MySQL",
        image: "/FailureGraph.png"
    },
    {
        title: "SubManager",
        description: "Subscription Manager web application that reminds users about their upcoming bill subscriptions.",
        technologies: "Built with React, MySQL, and Express.",
        image: "/SubManager.png",
        link: "https://www.esix.ca/"
    }
];

const Projects = () => {
    return (
        <div className='pb-24'>
            {/* Cards container */}
            <div className="flex flex-wrap justify-center gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
