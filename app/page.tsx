'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Scroll handling for background parallax and header styling
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const bg = document.getElementById('bg-canvas');
          const header = document.querySelector('header');

          if (bg) {
            bg.style.transform = `translateY(${scrolled * 0.2}px)`; // Reduced speed for better perf
          }

          if (header) {
            if (scrolled > 50) {
              header.classList.add('scrolled');
            } else {
              header.classList.remove('scrolled');
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Fade-in animations on scroll
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section, h1, .hero p, .cta-group, .feature-card');
    animatedElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div id="bg-canvas"></div>

      <header>
        <div className="logo">COOKIE ASSOCIATES</div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="btn btn-glass" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>Book Now</button>
      </header>

      <main>
        <section className="hero">
          <div className="badge">Kunnamkulam's Trusted Partners</div>
          <h1>Your <span className="gradient-text">Instant</span> <br />Service Experts</h1>
          <p>Cookie Associates delivery premium Electrical, Plumbing, and Digital Marketing solutions with precision and speed. Excellence, right at your doorstep.</p>
          <div className="cta-group">
            <button className="btn btn-primary">Instant Booking</button>
            <button className="btn btn-glass">Our Services</button>
          </div>
        </section>

        <section id="services" className="section">
          <div className="visual-section">
            <div className="visual-content">
              <div className="badge">What We Do</div>
              <h2>Service <br />Excellence</h2>
              <p>From complex electrical wiring to emergency plumbing and cutting-edge digital marketing, we provide transparent and reliable solutions for your home and business.</p>
              <div className="stats-container">
                <div className="stat-item">
                  <h4>30min</h4>
                  <p>Response Time</p>
                </div>
                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Support</p>
                </div>
              </div>
            </div>
            <div className="glass-container glass-box">
              <div className="floating-circle"></div>
              <div style={{ zIndex: 1, textAlign: 'center' }}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', opacity: 0.8 }}>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
                <p style={{ marginTop: '1rem', fontWeight: 300, letterSpacing: '0.2rem' }}>EXPERT SOLVERS</p>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="section">
          <div className="glass-container feature-card" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <div className="badge">Find Us</div>
            <h2>Our Kunnamkulam Hub</h2>
            <p style={{ marginBottom: '2rem' }}>Visit us for a consultation or rapid service dispatch.</p>
            <div className="glass-container" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Opposite Liwa Tower</p>
              <p style={{ color: 'var(--text-muted)' }}>Nearby New Bus Stand, Kunnamkulam</p>
              <p style={{ color: 'var(--text-muted)' }}>Thrissur, Kerala</p>
            </div>
            <div className="features-grid">
              <div className="glass-container feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                </div>
                <h3>Electricians</h3>
                <p>Certified pros for wiring, repairs, and instant troubleshooting.</p>
              </div>
              <div className="glass-container feature-card">
                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3>Digital Mktg</h3>
                <p>Growth-focused marketing strategies to scale your local business.</p>
              </div>
              <div className="glass-container feature-card">
                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h3>Plumbing</h3>
                <p>Rapid leak fixes, installations, and maintenance experts.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="logo" style={{ fontSize: '1rem' }}>COOKIE ASSOCIATES</div>
        <div>&copy; 2026 Cookie Associates. Built for excellence in Kunnamkulam.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>Privacy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}>System Status</a>
        </div>
      </footer>
    </div>
  );
}
