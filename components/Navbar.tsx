import Link from 'next/link'


const Navbar = () => {
    return (
        <div className="navbar bg-gray-400 p-4 md:p-0 relativez-50">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
                    <li className="nav-link">
                        <Link href="#contact">Contact</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="portfolio/">Portfolio</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/#skills">Skills</Link>
                    </li>
                </ul>
                </div>
                <a><Link href="/" className='pl-4 font-extrabold active normal-case text-xl'>Diego Arana</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
                <li className="nav-link">
                    <Link href="/">About</Link>
                </li>
                <li className="nav-link">
                    <Link href="#contact">Contact</Link>
                </li>
                <li className="nav-link">
                    <Link href="portfolio/">Portfolio</Link>
                </li>
                <li className="nav-link">
                    <Link href="/#skills">Skills</Link>
                </li>
            </ul>
            </div>
            <div className="navbar-end">
                <a>
                    <Link className='pr-4 md:pr-2 font-bold' href="https://diegoarana-mysite-bucket.s3.amazonaws.com/media/Resume_DiegoArana_August23.pdf">
                        Download CV
                    </Link>
                </a>
            </div>
            </div>
        
    )
  }
  
  export default Navbar