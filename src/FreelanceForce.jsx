import React from 'react';
import './FreelanceForce.css';
import logo from "/logo.png"

const FreelanceForce = () => {
  return (
    <>
      <nav className="ff-nav">
        <div className="ff-container ff-nav-inner">
          <div className="ff-logo">
            <img src={logo} alt="Freelance Force Logo" />
          </div>
          <div className="ff-nav-links">
            <span className="ff-nav-link">Services</span>
            <span className="ff-nav-link">About</span>
            <span className="ff-nav-link">Join</span>
            <span className="ff-nav-cta">Hire Us</span>
          </div>
        </div>
      </nav>


      <section className="ff-hero">
        <div className="ff-container">
          <div className="ff-hero-eyebrow">University of — Student Collective</div>
          <div className="ff-hero-h1">THE<br/>STUDIO.</div>
          <div className="ff-hero-sub">Inside your university.</div>
          <div className="ff-hero-line"></div>
          <div className="ff-hero-desc">Real projects. Real deadlines. A team that operates like a studio, not a club.</div>
          <div className="ff-hero-ctas">
            <div className="ff-btn-primary">Hire the Team</div>
            <div className="ff-btn-ghost"><span></span> Explore work</div>
          </div>
        </div>
        <div className="ff-hero-bg-text">FF</div>
      </section>

      <div className="ff-ticker">
        <div className="ff-ticker-inner">
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Web Development</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Graphic Design</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Brand Identity</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Industry Mentored</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Real Projects</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Web Development</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Graphic Design</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Brand Identity</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Industry Mentored</span>
          <span className="ff-ticker-item"><span className="ff-ticker-dot"></span>Real Projects</span>
        </div>
      </div>

      <section className="ff-services">
        <div className="ff-container">
          <div className="ff-section-label">What We Do</div>
          <div className="ff-services-grid">
            <div className="ff-service">
              <div className="ff-service-num">01</div>
              <div className="ff-service-name">Web Development</div>
              <div className="ff-service-desc">Custom-built websites and web apps. Fast, clean, and built to perform.</div>
            </div>
            <div className="ff-service">
              <div className="ff-service-num">02</div>
              <div className="ff-service-name">Graphic Design</div>
              <div className="ff-service-desc">Brand systems, visual identity, and design assets that communicate.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-why">
        <div className="ff-container">
          <div className="ff-why-top">
            <div className="ff-why-h2">WHY<br/><em>WORK</em><br/>WITH US</div>
            <div className="ff-why-intro">Three reasons. No fluff.</div>
          </div>
          <div className="ff-why-items">
            <div className="ff-why-item">
              <div className="ff-why-idx">01</div>
              <div className="ff-why-content">
                <div className="ff-why-title">We operate like a studio, not a club</div>
                <div className="ff-why-text">Direct communication, real accountability, no layers.</div>
              </div>
            </div>
            <div className="ff-why-item">
              <div className="ff-why-idx">02</div>
              <div className="ff-why-content">
                <div className="ff-why-title">Mentored by industry professionals</div>
                <div className="ff-why-text">Our team is trained and guided by working industry experts.</div>
              </div>
            </div>
            <div className="ff-why-item">
              <div className="ff-why-idx">03</div>
              <div className="ff-why-content">
                <div className="ff-why-title">Built for legacy</div>
                <div className="ff-why-text">An organisation that outlives its founders. Consistency you can count on.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-events">
        <div className="ff-container">
          <div className="ff-events-top">
            <div className="ff-events-h2">WHAT WE'VE<br/>BEEN UP TO</div>
            <div className="ff-events-link">View All →</div>
          </div>
          <div className="ff-events-list">
            <div className="ff-event">
              <div className="ff-event-left">
                <div className="ff-event-date">Mar 2025 · Collaboration</div>
                <div className="ff-event-name">Inter-Society Collab Event</div>
              </div>
              <div className="ff-event-badge">Past</div>
            </div>
            <div className="ff-event">
              <div className="ff-event-left">
                <div className="ff-event-date">Coming Soon</div>
                <div className="ff-event-name">Professional Workshop Series</div>
              </div>
              <div className="ff-event-badge upcoming">Upcoming</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ff-split">
        <div className="ff-split-hire">
          <div className="ff-split-inner">
            <div className="ff-split-tag">For Clients</div>
            <div className="ff-split-h3">NEED WORK<br/>DONE?</div>
            <div className="ff-split-p">Tell us about your project. We'll tell you if we can deliver.</div>
            <div className="ff-split-btn">Get in Touch →</div>
          </div>
        </div>
        <div className="ff-split-join">
          <div className="ff-split-inner">
            <div className="ff-split-tag">For Students</div>
            <div className="ff-split-h3">WANT<br/>IN?</div>
            <div className="ff-split-p">Work on real projects. Access professionals. Build your career.</div>
            <div className="ff-split-btn">Apply Now →</div>
          </div>
        </div>
      </div>

      <footer className="ff-footer">
        <div className="ff-container ff-footer-inner">
          <div className="ff-footer-logo">
            <img src={logo} className='' alt="Freelance Force Logo" />
          </div>
          <div className="ff-footer-links">
            <span className="ff-footer-link">Instagram</span>
            <span className="ff-footer-link">LinkedIn</span>
            <span className="ff-footer-link">Contact</span>
          </div>
          <div className="ff-footer-copy">© {new Date().getFullYear()} Freelance Force</div>
        </div>
      </footer>
    </>
  );
};

export default FreelanceForce;
