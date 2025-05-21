import "./App.css";
import logo from "./assets/fullstack-development.png";
import aboutPhoto from "./assets/about-image.jpg";
import webIcon from "./assets/web.png";
import projectPhoto from "./assets/commongrounds.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import safetyIcon from "./assets/campusSafety.png";
import fatGuysPhoto from "./assets/fat-guys.jpg";

function App() {
  return (
    <div>
      {/* NAVBAR COMPONENT */}
      <nav className="navbar">
        <div className="name">
          <a href="#Home">Danish Saleem</a>
        </div>
        <div className="nav-links">
          <a href="#Home" className="nav-link">
            Home
          </a>
          <a href="#About" className="nav-link">
            About
          </a>
          <a href="#Projects" className="nav-link">
            Projects
          </a>
          <a href="#Contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      {/* HOME COMPONENT */}
      <section className="home" id="Home">
        {/* Home page text + image */}
        <div className="home-info">
          <div className="home-text">
            <div className="main-heading">Full Stack Developer</div>
            <div className="home-intro">
              Hi, I'm Danish Saleem. A passionate full stack web developer based
              in South Africa.
            </div>
            <div className="home-socials">
              <div className="linkedin">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/danishsaleemx/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div className="github">
                <a target="_blank" href="https://github.com/danishx99">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className="home-image">
            <img src={logo} alt="icon" />
          </div>
        </div>
        {/* Home page skills */}
        <div className="home-skills">
          <div className="skills-heading">Skills</div>
          <img
            className="skills skills-1"
            src="https://skillicons.dev/icons?i=html,css,js,ts,react,next"
          />
          <img
            className="skills skills-2"
            src="https://skillicons.dev/icons?i=tailwind,nodejs,postgres,mongodb,prisma,docker"
          />
        </div>
      </section>

      {/* ABOUT COMPONENT */}
      <section id="About" className="about">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutPhoto} alt="Generic Coding Photo" width={400} />
          </div>
          <div className="about-text">
            <div className="about-heading">ABOUT ME</div>
            <div className="about-title">Full stack web developer </div>
            <p className="about-info">
              Hi, I'm Danish, a web developer and recent Computer Science
              graduate from the University of the Witwatersrand. With experience
              in both front-end and back-end technologies, I specialize in
              creating responsive, user-friendly web applications. <br />
              <br /> I work with tools like React.js, Node.js, and MongoDB to
              build scalable, efficient systems. I enjoy collaborating in team
              environments and am passionate about solving real-world problems
              through technology. Always eager to learn, I strive to stay up to
              date with the latest trends and tools in software development.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE COMPONENT */}
      <section id="Experience" className="experience">
        <div className="experience-container">
          <div className="experience-heading">EXPERIENCE</div>
          <div className="experience-item">
            <div className="experience-role-company">
              <span className="experience-role">AI Solutions Engineer</span>
              <span className="experience-company">@ Supertube</span>
            </div>
            <p className="experience-description">
              Engineered and implemented cutting-edge AI solutions, focusing on machine learning model development and deployment. Collaborated with cross-functional teams to integrate AI functionalities into various products, enhancing performance and user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS COMPONENT */}
      <section className="projects" id="Projects">
        {/* heading */}
        <div className="projects-heading">PROJECTS</div>

        {/* Campus Safety */}
        {/* project card */}
        <div className="project-card">
          <div className="project-image">
            <img src={safetyIcon} alt="project photo" />
          </div>
          <div className="project-info">
            <div className="project-title">Campus Safety App</div>
            <div className="project-description">
              Campus Safety is a cutting-edge web application designed to
              revolutionize campus safety by providing real-time tools and
              resources for students, staff, and security personnel. <br />
              <br /> This innovative platform empowers users with instant access
              to emergency alerts, live updates on incidents, and direct
              reporting capabilities. By integrating real-time notifications and
              live tracking, Campus Safety ensures immediate communication and
              swift response to safety concerns. The app is tailored to the
              unique needs of campus environments (specifically Wits), promoting
              collaboration between users and security teams while fostering a
              culture of transparency and preparedness.
              <br />
              <br /> With a fully responsive design, Campus Safety delivers a
              seamless and intuitive experience across all devices, ensuring
              that users stay informed and connected, anytime and anywhere.
              <br />
              <br />
              Demo accounts are available through the GitHub link provided.
            </div>
            <div className="project-links">
              <a
                className="web-icon"
                href="https://campus-safety.azurewebsites.net/"
                target="_blank"
              >
                <img src={webIcon} alt="web icon" />
              </a>
              <a
                className="project-github"
                href="https://github.com/danishx99/campus-safety-app"
                target="_blank"
              >
                {/* FaGithub icon */}
                <FontAwesomeIcon
                  className="project-github-icon"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Commongrounds */}
        {/* project card */}
        <div className="project-card">
          <div className="project-image">
            <img src={projectPhoto} alt="project photo" />
          </div>
          <div className="project-info">
            <div className="project-title">
              Commongrounds Residential Management
            </div>
            <div className="project-description">
              Commongrounds is a robust online platform designed to streamline
              property management tasks for sectional title bodies corporate.{" "}
              <br />
              <br />
              This solution aims to empower these governing entities by
              providing a comprehensive suite of features tailored to their
              specific needs, ensuring efficient administration and transparent
              communication with residents. <br />
              <br />
              Commongrounds boasts a fully responsive design, ensuring a
              seamless experience across various devices and screen sizes.
              <br />
              <br />
              Further information and demo accounts are available through the
              GitHub link provided.
            </div>
            <div className="project-links">
              <a
                className="web-icon"
                href="https://common-grounds-app.onrender.com"
                target="_blank"
              >
                <img src={webIcon} alt="web icon" />
              </a>
              <a
                className="project-github"
                href="https://github.com/danishx99/common-grounds-app"
                target="_blank"
              >
                {/* FaGithub icon */}
                <FontAwesomeIcon
                  className="project-github-icon"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Fat Guys */}
        <div className="project-card">
          <div className="project-image">
            <img src={fatGuysPhoto} alt="project photo" />
          </div>
          <div className="project-info">
            <div className="project-title">Fat Guys - 3D Platformer Game</div>
            <div className="project-description">
              <p>
                Fat Guys is a 3D platformer game, inspired by Fall Guys, built
                with Three.js that challenges players to navigate through
                dynamic levels while racing against the clock. Key features
                include:
              </p>
              <br />
              <ul>
                <li>
                  Timer and Best-Time Tracking system to encourage competitive
                  play.
                </li>
                <li>Lives System and Level Unlocking for progression.</li>
                <li>
                  Fully rigged and animated unique player models created in
                  Blender.
                </li>
                <li>
                  Hierarchical Modeling for complex movements and interactions.
                </li>
                <li>
                  Dynamic Lighting (ambient, directional, and point lights) and
                  textured obstacles for an immersive experience.
                </li>
                <li>
                  Particle System for atmospheric effects and dramatic respawns.
                </li>
                <li>
                  Minimap for navigation and volume control for tailored sound
                  experiences.
                </li>
              </ul>
              <br />
              <p>
                The game emphasizes fun, polished mechanics, and an engaging
                user experience, blending creative gameplay with technical
                innovation.
              </p>
            </div>
            <div className="project-links">
              <a
                className="web-icon"
                href="https://lamp.ms.wits.ac.za/~schickentendies/"
                target="_blank"
              >
                <img src={webIcon} alt="web icon" />
              </a>
              <a
                className="project-github"
                href="https://github.com/danishx99/fat-guys"
                target="_blank"
              >
                {/* FaGithub icon */}
                <FontAwesomeIcon
                  className="project-github-icon"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT COMPONENT */}
      <section id="Contact" className="contact">
        <div className="contact-container">
          <div className="contact-heading">CONTACT</div>
          <div className="contact-message">Feel free to contact me!</div>
          <div className="contact-info">
            <div className="location">
              <FaLocationDot className="contact-icon location-icon" />
              <p className="location-title">Location</p>
              <p className="location-info">Johannesburg, South Africa</p>
            </div>
            <div className="email">
              <MdOutlineMail className="contact-icon email-icon" />
              <p className="email-title">Email</p>
              <p className="email-info">
                <a target="_blank" href="maito:saleemdf99@gmail.com">
                  saleemdf99@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <footer>
        <div className="footer">
          <p>Copyright © 2024. All rights are reserved</p>
          <div className="footer-icons">
            <div className="footer-linkedin footer-icon">
              <a
                href="https://www.linkedin.com/in/danishsaleemx/"
                target="_blank"
              >
                <CiLinkedin />
              </a>
            </div>
            <div className="footer-github footer-icon">
              <a href="https://github.com/danishx99" target="_blank">
                <VscGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
