
const ResidentAssistant = () => {
    return (
        <div className="flex justify-center pb-11">
            <div className="experience-container w-full md:w-[800]">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start pb-2">
                    <div>
                        <h2 className="text-xl md:text-1xl font-bold">University of Alberta | Resident Assistant</h2>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                        <p>Edmonton, Canada | 08/2023 - present</p>
                    </div>
                </div>
                <p className="text-sm md:text-base pb-1">
                    Promoted community growth serving as a 
                    student leader to cultivate inclusive and supportive atmosphere for
                    fellow residents.
                </p>
                <p className="text-sm md:text-base"> <span className="font-bold">Skills Acquired: </span>
                    leadership, communication, problem-solving, networking, and time management.</p>
            </div>
        </div>
    );
}

export default ResidentAssistant;