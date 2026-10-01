import { useState } from "react";
import dannisPhoto from "./assets/dannis.jpeg";
import studygoDashboard from "./assets/studygo-dashboard.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
  <div className={darkMode ? "portfolio dark-mode" : "portfolio"}>

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="navbar">

        <div className="navbar-brand">
          DANNIS.
        </div>

        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

<div className="navbar-actions">

 <button
  type="button"
  className={`theme-switch ${darkMode ? "is-dark" : ""}`}
  onClick={() => setDarkMode((current) => !current)}
  aria-label={
    darkMode
      ? "Switch to light mode"
      : "Switch to dark mode"
  }
>
  <span className="theme-switch-icon">
    {darkMode ? "☀" : "☾"}
  </span>

  <span className="theme-switch-text">
    {darkMode ? "LIGHT" : "DARK"}
  </span>
</button>

  <a
    href="#contact"
    className="navbar-button"
  >
    START A PROJECT
  </a>

</div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}
      <main>

        {/* ===================================================
            HERO
        =================================================== */}
        <section className="hero">

          <div className="hero-container">

            <div className="hero-kicker">
              WEB & SOFTWARE DEVELOPER
            </div>


            <div className="name-stage">

              <h1 className="dannis-title">
                DANNIS<span>.</span>
              </h1>

            </div>


            <div className="dannis-photo">

              <img
                src={dannisPhoto}
                alt="Dannis Buakah"
              />

            </div>


            <div className="hero-bottom">

              <div className="hero-copy">

                <h2>
                  I BUILD DIGITAL PRODUCTS.
                </h2>

                <p>
                  I design and develop modern websites and
                  web applications that turn ideas into useful
                  digital experiences.
                </p>

              </div>


              <div className="hero-actions">

                <a
                  href="#work"
                  className="button button-primary"
                >
                  VIEW MY WORK
                  <span>↗</span>
                </a>

                <a
                  href="#contact"
                  className="button button-secondary"
                >
                  LET&apos;S TALK
                </a>

              </div>

            </div>


            <div className="hero-scroll">

              <span></span>

              SCROLL TO EXPLORE

            </div>

          </div>

        </section>


        {/* ===================================================
            ABOUT
        =================================================== */}
        <section
          className="intro"
          id="about"
        >

          <div className="section-number">
            01 — ABOUT
          </div>


          <div className="intro-content">

            <h2>
              I like turning
              <em> ideas</em> into
              <br />
              things people can use.
            </h2>

            <p>
              I&apos;m a developer focused on building modern
              websites, web applications and digital
              experiences. I enjoy taking an idea from
              concept to a working product.
            </p>

          </div>

        </section>


        {/* ===================================================
            SELECTED WORK
        =================================================== */}
        <section
          className="selected-work"
          id="work"
        >

          <div className="work-heading">

            <div>

              <p className="work-kicker">
                02 — SELECTED WORK
              </p>

              <h2>
                Things I&apos;ve built.
              </h2>

            </div>


            <p className="work-intro">
              A selection of digital products and websites
              I&apos;ve worked on from idea to implementation.
            </p>

          </div>


          <div className="projects">

            {/* =========================
                STUDYGO
            ========================= */}

            <article className="project project-dark">

              <div className="project-meta">

                <span className="project-number">
                  01
                </span>

                <span className="project-type">
                  STUDENT PLATFORM
                </span>

              </div>


              <div className="project-main">

                <div className="project-preview studygo-preview">

                  <img
                    src={studygoDashboard}
                    alt="StudyGo student dashboard"
                    className="project-image"
                  />

                </div>


                <div className="project-details">

                  <div>

                    <p className="project-eyebrow">
                      WEB APPLICATION
                    </p>

                    <h3>
                      StudyGo
                    </h3>

                    <p className="project-copy">
                      A student-focused web application designed
                      to help learners organize notes, study,
                      take quizzes, and track their progress.
                    </p>

                  </div>


                  <div className="project-footer">

                    <div className="project-tech">

                      <span>React</span>
                      <span>Vite</span>
                      <span>Supabase</span>

                    </div>


                    <a
                      href="https://study-go-ebon.vercel.app/"
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW PROJECT ↗
                    </a>

                  </div>

                </div>

              </div>

            </article>


            {/* =========================
                CASH EMPOWERMENT
            ========================= */}

            <article className="project project-light">

              <div className="project-meta">

                <span className="project-number">
                  02
                </span>

                <span className="project-type">
                  ORGANIZATION WEBSITE
                </span>

              </div>


              <div className="project-main">

                <div className="project-preview cash-preview">

                  <div className="cash-preview-top">
                    CASH EMPOWERMENT
                  </div>

                  <div className="cash-preview-title">
                    Empowering
                    <br />
                    people.
                  </div>

                  <div className="cash-preview-line"></div>

                  <div className="cash-preview-small">
                    COMMUNITY • SUPPORT • EMPOWERMENT
                  </div>

                </div>


                <div className="project-details">

                  <div>

                    <p className="project-eyebrow">
                      ORGANIZATION WEBSITE
                    </p>

                    <h3>
                      CASH Empowerment
                    </h3>

                    <p className="project-copy">
                      A modern website created for CASH
                      Empowerment Association to present
                      its mission, work, activities,
                      leadership, events and community
                      initiatives.
                    </p>

                  </div>


                  <div className="project-footer">

                    <div className="project-tech">

                      <span>React</span>
                      <span>Vite</span>
                      <span>Supabase</span>

                    </div>


                    <span className="project-link">
                      PREPARING FOR LAUNCH ↗
                    </span>

                  </div>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* ===================================================
            SERVICES
        =================================================== */}
        <section
          className="services"
          id="services"
        >

          <div className="section-number">
            03 — WHAT I BUILD
          </div>


          <h2>
            Digital work
            <br />
            with purpose.
          </h2>


          <div className="service-grid">

            <div className="service">

              <span>01</span>

              <h3>
                Websites
              </h3>

              <p>
                Professional websites for businesses,
                organizations and individuals.
              </p>

            </div>


            <div className="service">

              <span>02</span>

              <h3>
                Web Applications
              </h3>

              <p>
                Interactive applications built around
                real problems and real users.
              </p>

            </div>


            <div className="service">

              <span>03</span>

              <h3>
                UI &amp; Experience
              </h3>

              <p>
                Clean interfaces focused on clarity,
                usability and responsive design.
              </p>

            </div>


            <div className="service">

              <span>04</span>

              <h3>
                Custom Solutions
              </h3>

              <p>
                Digital tools designed around specific
                business or organizational needs.
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================
            CONTACT
        =================================================== */}
        <section
          className="contact"
          id="contact"
        >

          <div className="contact-inner">

            <div className="section-number">
              04 — GET IN TOUCH
            </div>


            <div className="contact-main">

              <div className="contact-heading">

                <p className="contact-kicker">
                  HAVE A PROJECT IN MIND?
                </p>

                <h2>
                  Let&apos;s build
                  <br />
                  <em>something useful.</em>
                </h2>

              </div>


              <div className="contact-side">

                <p className="contact-description">
                  Whether you need a professional website,
                  a web application, or a custom digital
                  solution, I&apos;d love to hear what you&apos;re
                  working on.
                </p>


                <a
                  href="mailto:dannisbuakah@gmail.com"
                  className="contact-email"
                >

                  <span>
                    SEND ME AN EMAIL
                  </span>

                  <strong>
                    dannisbuakah@gmail.com
                  </strong>

                  <b>
                    ↗
                  </b>

                </a>


                <a
                  href="tel:+233550923455"
                  className="contact-email"
                >

                  <span>
                    CALL ME
                  </span>

                  <strong>
                    +233 55 092 3455
                  </strong>

                  <b>
                    ↗
                  </b>

                </a>


                <a
                  href="https://wa.me/233550923455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-email"
                >

                  <span>
                    WHATSAPP
                  </span>

                  <strong>
                    CHAT WITH ME
                  </strong>

                  <b>
                    ↗
                  </b>

                </a>

              </div>

            </div>


            <div className="contact-bottom">

              <span>
                WEB &amp; SOFTWARE DEVELOPER
              </span>

              <span>
                GHANA
              </span>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div>
          DANNIS BUAKAH
        </div>

        <div>
          WEB &amp; SOFTWARE DEVELOPER
        </div>

        <div>
          © 2026 DANNIS
        </div>

      </footer>

    </div>
  );
}

export default App;