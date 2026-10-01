import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <div className="logo">LK<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p className="terminal">$ whoami</p>

        <h1>
          Hi, I'm <span>Lavesh Khanal</span>
        </h1>

        <h2>Cyber Security Graduate</h2>

        <h3>
          Aspiring GRC Analyst / Information Security Auditor
        </h3>

        <p className="hero-description">
          First Class Cyber Security graduate focused on Governance,
          Risk and Compliance, ISO 27001, NIST frameworks, risk
          assessment and information security auditing.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">01 / ABOUT</p>

        <h2>About Me</h2>

        <p>
          I am a First Class BSc (Hons) Cyber Security graduate with
          a strong interest in Governance, Risk and Compliance (GRC)
          and information security auditing.
        </p>

        <p>
          My experience includes ISO 27001 gap analysis, NIST CSF
          mapping, risk assessment using OCTAVE and FAIR,
          security policy drafting and compliance audit simulations.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">02 / SKILLS</p>

        <h2>Security Toolkit</h2>

        <div className="skills-grid">
          {[
            "ISO 27001",
            "NIST CSF",
            "NIST SP 800-53",
            "NRB Guidelines",
            "Risk Assessment",
            "OCTAVE / FAIR",
            "Policy Drafting",
            "Gap Analysis",
            "Audit Review",
            "COBIT 2019",
            "Python",
            "Nmap",
            "Wireshark",
            "Kali Linux",
            "Digital Forensics",
          ].map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">03 / PROJECTS</p>

        <h2>Featured Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <p className="project-number">PROJECT_01</p>

            <h3>
              Automated ISO 27001 Compliance Assessment
            </h3>

            <p>
              Python-based compliance assessment and gap analysis
              tool designed for Nepalese Banks and Financial
              Institutions.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>ISO 27001</span>
              <span>NRB</span>
              <span>Audit</span>
            </div>
          </div>

          <div className="project-card">
            <p className="project-number">PROJECT_02</p>

            <h3>Enterprise Risk Matrix Builder</h3>

            <p>
              Structured risk assessment simulations using
              OCTAVE-informed threat scenarios, likelihood and
              impact scoring, risk registers and executive risk
              reporting.
            </p>

            <div className="tags">
              <span>OCTAVE</span>
              <span>FAIR</span>
              <span>Risk</span>
              <span>GRC</span>
            </div>
          </div>

          <div className="project-card">
            <p className="project-number">PROJECT_03</p>

            <h3>Home Compliance Lab</h3>

            <p>
              Virtualized environment created for ISMS audit
              practice, security control testing and compliance
              experimentation.
            </p>

            <div className="tags">
              <span>VirtualBox</span>
              <span>ISMS</span>
              <span>Audit</span>
            </div>
          </div>

        </div>
      </section>

      <section id="certifications" className="section">
        <p className="section-label">04 / CERTIFICATIONS</p>

        <h2>Certifications</h2>

        <div className="cert-list">

          <div>
            <span className="complete">✓</span>
            ISC2 Certified in Cybersecurity (CC)
          </div>

          <div>
            <span className="complete">✓</span>
            ISO/IEC 27001 Foundation
          </div>

          <div>
            <span className="progress">↻</span>
            CompTIA Security+ — In Progress
          </div>

          <div>
            <span className="planned">○</span>
            ISO 27001 Lead Auditor — Target
          </div>

          <div>
            <span className="planned">○</span>
            ISACA CISA — Planned
          </div>

        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">05 / CONTACT</p>

        <h2>Let's Connect</h2>

        <p>
          Interested in Governance, Risk, Compliance and
          Information Security opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:laveshkhanal@proton.me">
            Email
          </a>

          <a
            href="https://github.com/laveshkhanal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/laveshkhanal"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>
          © 2026 Lavesh Khanal · Cyber Security · Kathmandu, Nepal
        </p>
      </footer>

    </div>
  );
}

export default App;
