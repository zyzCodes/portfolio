import Link from "next/link";
import Image from "next/image";
import mountains from "../../public/mountains.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen relative overflow-hidden">
      {/* Background Image - No overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={mountains}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hero-content text-center bg-black/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 relative z-10 max-w-screen-xl mx-auto border border-white/10">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <Image
              src="/profile.png"
              alt="Diego Arana Profile"
              className="mx-auto rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
              width="300"
              height="300"
            />
          </div>

          <div className="typewriter max-w-fit mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi there, I&apos;m Diego Arana
            </h1>
          </div>
          
          <p className="py-2 text-white text-lg md:text-xl mb-2">
            I&apos;m a fourth year computer science student at the University of Alberta.
          </p>
          <p className="pb-6 text-white text-lg md:text-xl mb-4">I like making ideas come to life!</p>
          
          {/* Role tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
              Software Engineer
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30 hover:bg-green-500/30 transition-all duration-300">
              Full-Stack Developer
            </span>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="portfolio/" className="modern-btn primary-btn group-hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Portfolio
              </span>
            </Link>

            <a href="mailto:aranasol@ualberta.ca" className="modern-btn secondary-btn group-hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;