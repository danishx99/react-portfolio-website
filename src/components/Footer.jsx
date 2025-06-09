import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { personalInfo } from '../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              {personalInfo.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI Solutions Engineer passionate about creating innovative solutions 
              through technology and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <CiLinkedin className="text-xl" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <VscGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#experience" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

