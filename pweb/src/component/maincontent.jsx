import React,{Router,Route} from "react";
import "../style/maincontent.css";
import {
  faReact,
  faHtml5,
  faCss3,
  faNpm,
  faBootstrap,
  faDiscord,
  faGit,
  faGoogleDrive,
  faJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

import { faCheckSquare, faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function maincontent() {
  return (
    <div class="content">
      {/* About Section of Main Content */}

      <section class="resume-section" id="AboutID">
        <div className="resume-section-content">
          <h1 className="mb-1">
            Andrew
            <span class="text-primary"> Heo</span>
          </h1>
          <div className="subheading mb-5">
            2420 Rossett St · Fort Lee, NJ 07024 · (201) 952-9020 ·{" "}
            <a href="mailto:name@email.com">andrewheo1225@gmail.com</a>
          </div>
          <p className="lead mb-5">
            I excel in utilizing modern frameworks in web development that
            focuses on the front-end and back-end. Eager to learn various
            databases and technologies to further expand my current skillset. I
            am a undergraduate student majoring in Computer Science at Rutgers
            University, New Brunswick.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/andrew-heo-56b0a81b6/"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/andrew-heo-56b0a81b6/"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
              href="https://github.com/andrewheo1225"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/andrewheo1225"
              >
                <i class="fa fa-github"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
              href="https://www.instagram.com/02_hya/"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/02_hya/"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100071982594286"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100071982594286"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </a>
          </div>
        </div>
      </section>

      <hr class="horizontal-line" />

      {/* Education Section of Main Content */}
      <section class="resume-section" id="EducationID">
        <div className="resume-section-content">
          <h1 className="mb-5">Education</h1>
          <div className="education-section">
            <div className="education-info">
              <h2>Rutger's University - New Brunswick</h2>
              <h3 className="subheading">Bachelor of Science</h3>
              <h4 className="subheading mt-4">
                Major : Bachelor of Science - Computer Science
                <br />
                Minor : Digital Communication Information and Media
              </h4>

              <h4 className="subheading mt-4">GPA: 4.0/4.0</h4>
            </div>

            <h4 className="date-rightside">September 2020 - May 2024</h4>
          </div>
          <div className = "education-section">         
            
            <div className="education-info">
              <h2 className = "mt-4">Fort Lee High School</h2>
              <h4 className="subheading ">GPA: 3.6/4.0</h4>
            </div>
            <h4 className="date-rightside">September 2016 - May 2020 </h4>
          </div>
        </div>
      </section>

      <hr class="horizontal-line" />
      {/*  EXPERIENCE SECTION */}
      <section class="resume-section" id="ExperienceID">
        <div className="resume-section-content">
          <h1 className="mb-5">Experience</h1>

          <div className="experience-section">
            <div className="experience-info">
              <h2>V.I.P. Cleaners</h2>
              <h3 className="subheading">Part-Time Manager</h3>

              <p className="lead mt-4">
                Created schedules according to each staff’s availabilities and
                was responsible for managing any shift changes. Responsible for
                recording all inventory expenditures and facilitating a positive
                environment for the employees.
              </p>
            </div>
            <h4 className="dateexperience-rightside">
              January 2017 - June 2019
            </h4>
          </div>

          <div className="experience-section">
            {" "}
            {/*  add "className = "education-section" " if you need to add more education for css margin problems */}
            <div className="experience-info">
              <h2>French Monarch Cleaners</h2>
              <h4 className="subheading">Part-Time Manager</h4>
              <p className="lead mt-4">
                Coordinated with employees to establish schedules and acted as
                an intermediate for customer service. Communicated with
                employees on a daily basis to discuss the utilization of supply
                and to receive feedback.
              </p>
            </div>
            <h4 className="dateexperience-rightside">
              January 2017 - June 2019
            </h4>
          </div>

          <div className="experience-section">
            {" "}
            {/*  add "className = "education-section" " if you need to add more education for css margin problems */}
            <div className="experience-info">
              <h2>Cafe Bark</h2>
              <h4 className="subheading">Barista</h4>
              <p className="lead mt-4">
                Welcomed customers by preparing and serving a variety of drinks
                along with parties upon customers’ requests, ensuring customers
                receive quality customer service, and inspecting all machinery
                for break-downs
              </p>
            </div>
            <h4 className="dateexperience-rightside">
              December 2019 - August 2020
            </h4>
          </div>
        </div>
      </section>

      <hr class="horizontal-line" />
      {/* LEADERSHIP SECTION */}
      <section class="resume-section" id="LeadershipID">
        <div className="resume-section-content">
          <h1>Leadership</h1>
          <div className="leadership-section">
            <div className="leadership-info">
              <h2 className="mt-5">International Volunteer HQ</h2>
              <h3 className="subheading">Construction/Education</h3>
              <h4 className="subheading">Phillippines</h4>
              <p className="lead mt-4">
                Collaborated in constructing a new elementary school, cement
                road that connects the school to their homes, removing trash and
                litter from various habitats, and extracting potential trees
                that could harm a student’s health. Educated elementary students
                in various Mathematic curriculums and taught basic English
                grammar. Implemented a new program where volunteers would travel
                to specific habitats, remove litter and non-biodegradable trash,
                and advocated for increasing awareness of climate change and
                ecosystem preservation.
              </p>
            </div>
            <h4 className="leadership-rightside">May 2019 - July 2019</h4>
          </div>
        </div>
      </section>

      <hr class="horizontal-line" />
      {/* SKILLS SECTION */}
      <section class="resume-section" id="SkillsAwardsID">
        <div class="resume-section-content">
          <h1 class="mb-5">Skills</h1>

          <h2 class="subheading mb-3">Programming Languages & Tools</h2>
          <div className="social-icons">
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faHtml5} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faCss3} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faReact} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faBootstrap} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faNpm} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faGit} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faGoogleDrive} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faJava} />
              </a>
            </a>
            <a className="social-icon">
              <a>
                <FontAwesomeIcon icon={faJs} />
              </a>
            </a>
          </div>

          <h2 class="subheading mt-3">Focus</h2>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faCheckSquare} />
              </span>
              <h3 className="skill-icon">Functional Componenets</h3>
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faCheckSquare} />
              </span>
              <h3 className="skill-icon">
                Responsitivity, emphasis on Mobile Development
              </h3>
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faCheckSquare} />
              </span>
              <h3 className="skill-icon">Scalability</h3>
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faCheckSquare} />
              </span>
              <h3 className="skill-icon">Full-Stack Completion</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* Awards */}
      <section class="resume-section" >
        <div className="resume-section-content">
          <h1 className="award-title">Awards</h1>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Rutger's Deans List - 2020
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Rutger's Deans List - 2021
            </li>
          </ul>
        </div>
      </section>

      <hr class="horizontal-line" />
      {/* Projects SECTION */}
      <section class="resume-section" id="ProjectsID">
        <div className="resume-section-content">
          <h1 className="mb-5">Projects</h1>

          <div className="experience-section">
            <div className="experience-info">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/andrewheo1225/dcwebsite"
              >
                <h2>Dry Cleaning Website</h2>
              </a>
              <h3 className="subheading">Solo Web Developer</h3>
              <p className="lead mt-4">
                Using React as the front-end framework, I created a website that
                is meant to showcase a local dry cleaning business's time
                schedule, services, and owner.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-info">
              <div className="two-links">
                <a
                  className="tag1"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/andrewheo1225/DCView"
                >
                  <h2>Dry Cleaning Program Front-End</h2>
                </a>
                <h2>&nbsp;/&nbsp;</h2>
                <a
                  className="tag2"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/andrewheo1225/DCOrders"
                >
                  <h2>Back-End</h2>
                </a>
              </div>

              <h3 className="subheading">Solo Web Developer</h3>
              <p className="lead mt-4">
                Using React as the front-end framework, Spring Boot as the
                back-end, and MySQL as the database, this program is meant to be
                an every day utility program for dry cleaning businesses. The
                main user is allowed to create accounts for customers and open a
                clothing registration tab. Each tab contain a list of clothing
                types and dry cleaning service with a pick up date.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-info">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/andrewheo1225/eAuction"
              >
                <h2>eAuction</h2>
              </a>
              <h3 className="subheading">Co Web Developer</h3>
              <p className="lead mt-4">
                Uses JSP as the front-end framework, and MySQL as the database.
                Developed by 3 undergraduate programmers in a Rutger's
                accreddited course, eAuction is a completely online auction
                website for clothes. Introduced with a login page, users are
                allowed to log into, create, update and delete their account.
                Users can look through the entire auction or use filters to
                search for more specific items. Similarly, bids can be made for
                available auctions and users can create their auction if they so
                wished. Each account contains their own list of auctions and
                bids.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default maincontent;
