import React from "react";
import "../style/maincontent.css";

function maincontent() {
  return (
    <div class="content">
      {/* About Section of Main Content */}
      <section class="resume-about">
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
              databases and technologies to further expand my current skillset.
              I am a undergraduate student majoring in Computer Science at
              Rutgers University, New Brunswick.
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
      </section>

      <hr class = "horizontal-line"/>

      {/* Education Section of Main Content */}




    </div>
  );
}

export default maincontent;
