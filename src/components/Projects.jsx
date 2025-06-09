import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { projects } from '../data/projects';
import safetyIcon from "../assets/campusSafety.png";
import projectPhoto from "../assets/commongrounds.png";
import fatGuysPhoto from "../assets/fat-guys.jpg";

const Projects = () => {
  // Map imported images to projects
  const imageMap = {
    "/src/assets/campusSafety.png": safetyIcon,
    "/src/assets/commongrounds.png": projectPhoto,
    "/src/assets/fat-guys.jpg": fatGuysPhoto,
  };

  return (
    <section id="projects" className="bg-white section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in web development, AI solutions, and game development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img
                    src={imageMap[project.image]}
                    alt={project.title}
                    className="relative w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="heading-md text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="heading-sm text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

