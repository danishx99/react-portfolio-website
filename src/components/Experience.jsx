import { experiences, education, certifications } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="bg-white section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in technology, from education to professional experience in AI and full-stack development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="heading-md text-gray-900 mb-8 text-center">
            Professional Experience
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary-500 to-primary-300"></div>
                )}
                
                <div className="flex items-start space-x-8 mb-12">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 card p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center space-x-2 mb-2">
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
                          >
                            {exp.company}
                          </a>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {exp.type}
                        </span>
                        <span className="text-gray-600 font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="heading-sm text-gray-900 mb-6 text-center lg:text-left">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.id} className="card p-6 mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h4>
                <div className="text-primary-600 font-semibold mb-2">
                  {edu.institution}
                </div>
                <div className="text-gray-600 mb-3">
                  {edu.location} • {edu.duration}
                </div>
                <p className="text-gray-700 mb-4">
                  {edu.description}
                </p>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="heading-sm text-gray-900 mb-6 text-center lg:text-left">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="card p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h4>
                  <div className="text-primary-600 font-semibold mb-1">
                    {cert.issuer}
                  </div>
                  <div className="text-gray-600 text-sm mb-2">
                    Issued: {cert.date}
                  </div>
                  <div className="text-gray-500 text-xs">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

