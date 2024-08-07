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
              Hi, I'm Danish Saleem. A passionate full stack developer based in
              South Africa.
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
              Hey, my name is Danish, and I'm a web developer. I have experience
              with both front-end and back-end technologies. I'm currently a
              final year Computer Science student at the University of the
              Witwatersrand.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS COMPONENT */}
      <section className="projects" id="Projects">
        {/* heading */}
        <div className="projects-heading">PROJECTS</div>
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
              Commongrounds is an innovative online platform designed to
              streamline property management tasks for sectional title bodies
              corporate. This solution aims to empower these governing entities
              by providing a comprehensive suite of features tailored to their
              specific needs, ensuring efficient administration and transparent
              communication with residents. Notably, Commongrounds boasts a
              fully responsive design, ensuring a seamless experience across
              various devices and screen sizes.
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
