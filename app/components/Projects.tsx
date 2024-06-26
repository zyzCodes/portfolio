import Image from 'next/image'
import Link from 'next/link'


const Projects = () => {
    const imageWidth = 1000
    const imageHeight = 1000
    return(
        <div className='pb-24'>
            {/* Cards container */}
            <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="card card-compact w-[400px] h-[450px] bg-base-100 shadow-xl relative hover:translate-y-1 hover:shadow-glow-blue">
                    <div className='image-container'>
                        <Image 
                        src="/FailureGraph.png" 
                        alt="Shoes"
                        width={imageWidth} 
                        height={imageHeight} 
                        className='rounded-t-md'/>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-sky-400">Euro Graph</h2>
                        <p className='text-black'>Dashboard application that queries data from MySQL database and displays the data in Dashboard.</p>
                        <p className='text-black'>Built with Python, Plotly, and MySQL</p>
                    </div>
                </div>

                {/* Card 2 */}
                <Link href="https://www.esix.ca/" target="_blank">
                    <div className="card card-compact w-[400px] h-[450px] bg-base-100 shadow-xl hover:translate-y-1 hover:shadow-glow-blue">
                        <div className='image-container'>
                            <Image 
                            src="/SubManager.png" 
                            alt="Shoes" 
                            width={imageWidth} 
                            height={imageHeight}
                            className='rounded-t-md'/>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-sky-400">SubManager</h2>
                            <p className='text-black' >Subscription Manager web application that reminds users about their upcoming bill subsciriptions.</p>
                            <p className='text-black' >Built with React, MySQL, and Express.</p>
                        </div>
                    </div>
                </Link>

                {/* Card 3 */}
                <div className="card card-compact w-[400px] h-[450px] bg-base-100 shadow-xl hover:translate-y-1 hover:shadow-glow-blue">
                    <div className='image-container'>
                        <Image 
                        src="/cprogram.png" 
                        alt="Shoes" 
                        width={imageWidth} 
                        height={imageHeight}
                        className='rounded-t-md'/>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-sky-400">Algorithm Comparison in C</h2>
                        <p className='text-black' > Executed performance testing by running 100,000 iterations of data insertion and retrieval to provide empirical
                            data on the runtime efficiency of each data structure.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects
