import { personalInfo } from '../data/personal';
import aboutPhoto from "../assets/about-image.jpg";

const About = () => {
  const { frontend, backend, ai, tools } = personalInfo.skills;

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions through technology and artificial intelligence
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl transform rotate-6"></div>
              <img
                src={aboutPhoto}
                alt="Danish Saleem"
                className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="heading-md text-gray-900">
                {personalInfo.subtitle}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {personalInfo.extendedBio}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-accent-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-12">
          <h3 className="heading-md text-gray-900 text-center">
            Technical Expertise
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Frontend</h4>
              </div>
              <div className="space-y-2">
                {frontend.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${90 - index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Backend</h4>
              </div>
              <div className="space-y-2">
                {backend.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${85 - index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML Skills */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">AI/ML</h4>
              </div>
              <div className="space-y-2">
                {ai.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{ width: `${88 - index * 3}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Tools</h4>
              </div>
              <div className="space-y-2">
                {tools.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full" 
                        style={{ width: `${80 - index * 4}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

