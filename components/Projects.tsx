import Image from 'next/image'


const Projects = () => {
    const imageWidth = 1000
    const imageHeight = 1000
    return(
        <div>
            {/* Cards container */}
            <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="card card-compact w-[400px] h-[350px] bg-base-100 shadow-xl relative">
                    <div className='image-container'>
                        <Image 
                        src="/FailureGraph.png" 
                        alt="Shoes" width={imageWidth} 
                        height={imageHeight} 
                        className='rounded-t-md'/>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-primary">Failure Graph</h2>
                        <p>Dashboard application that queries data from MySQL database and displays the data in graphs</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card card-compact w-[400px] h-[350px] bg-base-100 shadow-xl">
                    <div className='image-container'>
                        <Image 
                        src="/SubManager.png" 
                        alt="Shoes" 
                        width={imageWidth} 
                        height={imageHeight}
                        className='rounded-t-md'/>
                        </div>
                    <div className="card-body">
                        <h2 className="card-title text-primary">SubManager</h2>
                        <p>Subscription Manager web application that reminds users about their upcoming bill subsciriptions</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )

}

export default Projects