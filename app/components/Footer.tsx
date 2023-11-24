// Footer.js

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-sky-100 text-center py-4 bottom-0 w-full">
            <div id="contact" className="flex flex-col items-center mx-auto">
                <h3 className="text-lg text-black font-bold mb-2">Thank you for visiting my site, Feel free to contact me!</h3>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/zyzCodes" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        <FaGithub size={20} color="black" />
                    </a>
                    <a href="https://linkedin.com/in/diego-arana-a677621a8" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        <FaLinkedin size={20} color="black"/>
                    </a>
                    <a href="mailto:aranasol@ualberta.ca" className="btn btn-ghost">
                        <FaEnvelope size={20} color="black" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


