// App.jsx
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import "./App.css";
import AboutMe from "./components/aboutme";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("AboutMe");

  const handleNavClick = (section) => {
    setSelectedSection(section);
  };

  // Your project data
  const projects = [
    {
      imageSrc: "./images/geekymoviewizard.jpg",
      repoLink: "https://github.com/RyanPersaud03/geekymoviewizard",
    },
    {
      imageSrc: "/images/weatherdashboard.jpg",
      repoLink: "https://github.com/mk10100/challenge6-WeatherDashboard",
    },
    {
      imageSrc: "/images/passwordgenerartor.jpg",
      repoLink: "https://github.com/mk10100/challenge3",
    },
    {
      imageSrc: "/images/thetechblog.jpg",
      repoLink: "git@github.com:mk10100/challenge14-the-tech-blog.git",
    },
  ];

  return (
    <div className="app">
      <header>
        
        <img src="/images/mk.jpg" alt="Header" className="header-image" />

        <h1>Mohamed Khalil's Portfolio</h1>

          
<nav>
  <a
    href="#"
    className={selectedSection === "AboutMe" ? "active" : ""}
    onClick={() => handleNavClick("AboutMe")}
  >
    About Me
  </a>
  <a
    href="#"
    className={selectedSection === "Portfolio" ? "active" : ""}
    onClick={() => handleNavClick("Portfolio")}
  >
    Portfolio
  </a>
  <a
    href="#"
    className={selectedSection === "Contact" ? "active" : ""}
    onClick={() => handleNavClick("Contact")}
  >
    Contact
  </a>
  <a
    href="#"
    className={selectedSection === "Resume" ? "active" : ""}
    onClick={() => handleNavClick("Resume")}
  >
    Resume
  </a>
</nav>
</header>


      {/* Render other sections based on the selected section */}
      {selectedSection === "AboutMe" && <AboutMe />}
      {selectedSection === "Portfolio" && <Portfolio projects={projects} />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Resume" && <Resume />}

      {/* Footer with GitHub and LinkedIn icons */}
      <footer>
        <div className="github-link">
          <a
            href="https://github.com/your-github-mk10100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color="#000" />
          </a>
        </div>
        <div className="linkedin-link">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={30} color="#0077B5" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
