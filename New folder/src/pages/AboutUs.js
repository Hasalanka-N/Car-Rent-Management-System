import React, { useEffect, useRef } from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted car rental partner</p>
      </div>

      <div className="about-content">
        <section ref={el => sectionsRef.current[0] = el} className="about-section hidden">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team committed to providing reliable and affordable car rental services.
            Whether you're traveling for business or leisure, we make the process easy and convenient.
          </p>
        </section>

        <section ref={el => sectionsRef.current[1] = el} className="about-section hidden">
          <h2>Our Mission</h2>
          <p>
            To deliver a seamless car rental experience with innovation, integrity, and top-notch customer service.
          </p>
        </section>

        <section ref={el => sectionsRef.current[2] = el} className="about-section hidden">
          <h2>Why Choose Us</h2>
          <ul>
            <li>✅ Variety of modern vehicles</li>
            <li>✅ 24/7 customer support</li>
            <li>✅ Easy booking & cancelation</li>
            <li>✅ Competitive and transparent pricing</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
