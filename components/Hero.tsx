import Link from "next/link";
import Image from "next/image";
import mountains from "../public/mountains.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image src={mountains} alt="Hero Background" className="w-full h-full object-cover" layout="fill" />
      </div>
      <div className="hero-content text-center bg-gradient-to-b from-blue-800 via-blue-800 to-purple-800 shadow-xl rounded-lg p-8 md:p-12 relative z-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Image src="/profile.png" alt="Placeholder Image" className="mx-auto my-4 rounded-full" width="300" height="300" />
          <div className="typewriter max-w-fit">
            <h1 className="text-3xl font-bold text-gray-200">Hi there, I&apos;m Diego Arana</h1>
          </div>
          <p className="py-2 text-white">
            I&apos;m a third year computer science student at the University of Alberta
          </p>
          <p className="py-2 text-white">I like solving problems and making ideas come to life!</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid-col">
              <Link href="portfolio/">
                <button className="btn btn-primary">Portfolio</button>
              </Link>
            </div>
            <div className="grid-col">
              <Link href="#contact">
                <button className="btn btn-primary">Contact me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



