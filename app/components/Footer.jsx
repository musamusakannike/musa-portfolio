import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter, faThreads } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Branding or Logo */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">Musa Musa Kannike</h2>
            <p className="text-gray-400 mt-2">Building the future, one line of code at a time.</p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-12 mb-8 md:mb-0">
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/musamusakannike" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-400 text-2xl transition duration-300" />
            </a>
            <a href="https://github.com/musamusakannike" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-400 text-2xl transition duration-300" />
            </a>
            <a href="https://x.com/musa_codes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-blue-400 text-2xl transition duration-300" />
            </a>
            <a href="https://threads.net/musa.codes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faThreads} className="text-white hover:text-blue-600 text-2xl transition duration-300" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Musa Musa Kannike. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
