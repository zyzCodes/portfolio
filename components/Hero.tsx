import Link from "next/link"

const Hero = () => {
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="flex flex-col items-center w-aut text-center">
                    <img src="https://via.placeholder.com/150" alt="Placeholder Image" className="mx-auto my-4" width="150" height="150"/>
                    <div className="typewriter text-center max-w-fit">
                        <h1 className="text-3xl font-bold text-center">Hi there, I'm Diego Arana</h1>
                    </div>
                    <p className="py-6">I'm a third year computer science student at the University of Alberta.</p>
                    <p className="py-6">I like solving problems and make ideas come to life!</p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="grid-col">
                            <Link href="portfolio/">
                                <button className="btn btn-primary">Portfolio</button>
                            </Link>
                        </div>
                        <div className="grid-col">
                            <Link href="contact/">
                                <button className="btn btn-primary">Contact me</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero