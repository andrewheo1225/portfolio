import React from "react";
import "../style/maincontent.css";

function maincontent() {
  return (
    <div class="content">
      {/* About Section of Main Content */}

      <section class="resume-section" id="about">
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
              href="https://www.linkedin.com/in/andrew-heo-56b0a81b6/"
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/andrew-heo-56b0a81b6/"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              href="https://github.com/andrewheo1225"
            >
              <a target="_blank" href="https://github.com/andrewheo1225">
                <i class="fa fa-github"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              href="https://www.instagram.com/02_hya/"
            >
              <a target="_blank" href="https://www.instagram.com/02_hya/">
                <i class="fa fa-instagram"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              href="https://www.facebook.com/profile.php?id=100071982594286"
            >
              <a
                target="_blank"
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
      <section class="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-5">Education</h1>
          <div className="education-section">
            <div className="education-info">
              <h2>Rutger's University - New Brunswick</h2>
              <h3 className="subheading">Bachelor of Science</h3>
              <h4 className="subheading mt-4">
               Computer Science - Web Development
              </h4>
              <h4 className="subheading ">GPA: 4.0/4.0</h4>
            </div>

            <h4 className="date-rightside">September 2020 - May 2024</h4>
          </div>
          <div > {/*  add "className = "education-section" " if you need to add more education for css margin problems */}
            <div className="education-info">
              <h2 >Fort Lee High School</h2>
              <h4 className="subheading ">GPA: 3.6/4.0</h4>
            </div>
            <h4 className="date-rightside">September 2016 - May 2020 </h4>
          </div>
        </div>
      </section>

      <hr class="horizontal-line" />
      {/* WORK EXPERIENCE SECTION */}
      <section class="resume-section" id="about">
        <div className="resume-section-content">
          
          <h1 className="mb-5">Experience</h1>

            <div className="experience-section">
              <div className="experience-info">
                <h2>V.I.P. Cleaners</h2>
                <h3 className="subheading">Part-Time Manager</h3>
                <h4 className="subheading mt-4">
                Created schedules according to each staff’s availabilities and was responsible for managing any shift changes. Responsible for recording all inventory expenditures and facilitating a positive environment for the employees.
                </h4>
              </div>
              <h4 className="dateexperience-rightside">January 2017 - June 2019</h4>
            </div>

            <div className = "experience-section"> {/*  add "className = "education-section" " if you need to add more education for css margin problems */}
              <div className="experience-info">
                <h2 >French Monarch Cleaners</h2>
                <h4 className="subheading">Part-Time Manager</h4>
                <h4 className="subheading mt-4">
                Coordinated with employees to establish schedules and acted as an intermediate for customer service. Communicated with employees on a daily basis to discuss the utilization of supply and to receive feedback.
                </h4>
              </div>
              <h4 className="dateexperience-rightside">January 2017 - June 2019</h4>
            </div>

            <div className = "experience-section"> {/*  add "className = "education-section" " if you need to add more education for css margin problems */}
              <div className="experience-info">
                <h2>Cafe Bark</h2>
                <h4 className="subheading">Barista</h4>
                <h4 className="subheading mt-4">
                Welcomed customers by preparing and serving a variety of drinks along with parties upon customers’ requests, ensuring customers receive quality customer service, and inspecting all machinery for break-downs
                </h4>
              </div>
              <h4 className="dateexperience-rightside">December 2019 - August 2020</h4>
            </div>

        </div>
      </section>
   

   </div>
  );
}

export default maincontent;
