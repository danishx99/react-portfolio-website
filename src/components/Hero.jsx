import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { personalInfo } from '../data/personal';
import logo from "../assets/fullstack-development.png";

const Hero = () => {
  const { frontend, backend, ai, tools } = personalInfo.skills;
  const allSkills = [...frontend.slice(0, 6), ...backend.slice(0, 6)];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
      <div className="container-max section-padding">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-primary-600 font-medium text-lg">
                Hello, I'm
              </p>
              <h1 className="heading-xl text-gray-900">
                {personalInfo.name}
              </h1>
              <h2 className="heading-lg text-gradient">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="btn-primary text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn-secondary text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={logo}
                alt="Full Stack Development"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-contain animate-bounce-gentle"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">
              Technologies I Work With
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From AI/ML frameworks to full-stack development tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Frontend Skills */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
              <p className="text-sm text-gray-600">React, Next.js, TypeScript</p>
            </div>

            {/* Backend Skills */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, PostgreSQL, MongoDB</p>
            </div>

            {/* AI/ML Skills */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI/ML</h4>
              <p className="text-sm text-gray-600">Python, TensorFlow, PyTorch</p>
            </div>

            {/* Cloud & Tools */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud & Tools</h4>
              <p className="text-sm text-gray-600">AWS, Docker, Kubernetes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

