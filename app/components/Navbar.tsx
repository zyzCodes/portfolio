'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar bg-gray-400 p-4 md:p-0 relative z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label 
                        tabIndex={0} 
                        className="btn btn-ghost lg:hidden hamburger-btn"
                        onClick={toggleMenu}
                    >
                        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                    <ul 
                        tabIndex={0} 
                        className={`menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 mobile-menu ${isMenuOpen ? 'open' : ''}`}
                    >
                        <li className="nav-link text-black">
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>About</Link>
                        </li>
                        <li className="nav-link text-black">
                            <Link href="mailto:aranasol@ualberta.ca" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </li>
                        <li className="nav-link text-black">
                            <Link href="portfolio/" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                        </li>
                        <li className="nav-link text-black">
                            <Link href="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className='pl-4 font-extrabold active normal-case text-xl'>Diego Arana</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
                    <li className="nav-link">
                        <Link href="/">About</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="mailto:aranasol@ualberta.ca">Contact</Link>
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
                <Link className='pr-4 md:pr-2 font-bold' href="https://diegoarana-mysite-bucket.s3.amazonaws.com/media/Resume_DiegoArana_August23.pdf">
                </Link>
            </div>
        </div>
    )
}

export default Navbar