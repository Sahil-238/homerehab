import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, Award, Users, Heart, Star, MessageCircle } from 'lucide-react';

import Logo from '../assets/logo.png';

const HomeRehabPhysio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images - using placeholder images for demonstration
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1717500252780-036bfd89f810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGh5c2ljYWwlMjB0aGVyYXB5JTIwc2Vzc2lvbiUyMGF0JTIwaG9tZXxlbnwwfDB8MHx8fDA%3D",
      alt: "Physical therapy session at home"
    },
    {
      url: "https://images.unsplash.com/photo-1717500252106-2a9f83cc61ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFBoeXNpY2FsJTIwdGhlcmFweSUyMHNlc3Npb24lMjBhdCUyMGhvbWV8ZW58MHwwfDB8fHww",
      alt: "Rehabilitation exercises"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      alt: "Home physiotherapy equipment"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1710467003443-4dcf21bf58fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGh5c2ljYWwlMjB0aGVyYXB5JTIwc2Vzc2lvbiUyMGF0JTIwaG9tZXxlbnwwfDB8MHx8fDA%3D",
      alt: "Patient care and recovery"
    },

  ];

  const services = [
    {
      icon: <Heart className="service-icon" />,
      title: "Post-Surgery Recovery",
      description: "Specialized rehabilitation programs to help you recover safely and effectively after surgical procedures."
    },
    {
      icon: <Users className="service-icon" />,
      title: "Elderly Care",
      description: "Gentle, comprehensive physiotherapy designed specifically for senior patients in the comfort of their homes."
    },
    {
      icon: <Award className="service-icon" />,
      title: "Sports Injury Recovery",
      description: "Professional treatment for sports-related injuries with personalized exercise programs."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The home physio service was incredible. I recovered much faster in my own comfortable environment."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Professional, caring, and extremely knowledgeable. Highly recommend their services."
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "After my knee surgery, their home visits made all the difference in my recovery journey."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "7999083960";
    const message = "Hello, I am interested in your home physiotherapy services. Could you please provide more details?";
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };


  return (
    <div className="app">
      <style jsx>{`
        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
        }

        .header {
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

       .logo-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: #3b82f6;
        }

        .hero {
          padding: 5rem 1rem;
          text-align: center;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-title-highlight {
          display: block;
          color: #3b82f6;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #6b7280;
          margin-bottom: 2rem;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          background: #2563eb;
          transform: scale(1.05);
        }

        .btn-secondary {
          background: transparent;
          color: #3b82f6;
          padding: 1rem 2rem;
          border: 2px solid #3b82f6;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #3b82f6;
          color: white;
        }

        .services {
          padding: 5rem 1rem;
          background: white;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          color: #1f2937;
          margin-bottom: 3rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .service-card:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          width: 2rem;
          height: 2rem;
          color: #3b82f6;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #6b7280;
          line-height: 1.6;
        }

        .gallery {
          padding: 5rem 1rem;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
        }

        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .carousel-container {
          position: relative;
          max-width: 64rem;
          margin: 0 auto;
        }

        .carousel {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
          width: 100%;
          flex-shrink: 0;
        }

        .carousel-image {
          width: 100%;
          height: 24rem;
          object-fit: cover;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8);
          border: none;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .carousel-nav:hover {
          background: white;
        }

        .carousel-nav-prev {
          left: 1rem;
        }

        .carousel-nav-next {
          right: 1rem;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
          gap: 0.5rem;
        }

        .carousel-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .carousel-dot-active {
          background: #3b82f6;
          transform: scale(1.25);
        }

        .carousel-dot-inactive {
          background: #d1d5db;
        }

        .carousel-dot-inactive:hover {
          background: #9ca3af;
        }

        .testimonials {
          padding: 5rem 1rem;
          background: white;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .testimonial-rating {
          display: flex;
          margin-bottom: 1rem;
        }

        .star {
          width: 1.25rem;
          height: 1.25rem;
          color: #fbbf24;
          fill: currentColor;
        }

        .testimonial-text {
          color: #6b7280;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-name {
          font-weight: 600;
          color: #1f2937;
        }

        .contact {
          padding: 5rem 1rem;
          background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
          color: white;
          text-align: center;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .contact-description {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          opacity: 0.9;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-icon {
          width: 2rem;
          height: 2rem;
          margin-bottom: 1rem;
        }

        .contact-item-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-item-text {
          opacity: 0.9;
        }

        .btn-white {
          background: white;
          color: #3b82f6;
          padding: 1rem 2rem;
          border: none;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-white:hover {
          background: #f3f4f6;
          transform: scale(1.05);
        }

        .footer {
          background: #1f2937;
          color: white;
          padding: 3rem 1rem;
          text-align: center;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .footer-description {
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }

        .footer-copyright {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .whatsapp-float {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          background: #25d366;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          z-index: 50;
          animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
          background: #128c7e;
          transform: scale(1.1);
        }

        .whatsapp-icon {
          width: 2rem;
          height: 2rem;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
            justify-content: center;
          }

          .nav {
            display: flex;
          }
        }

        @media (max-width: 640px) {
          .nav {
            display: none;
          }

          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .contact-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">
              {/* <Heart style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} /> */}
              <img src={Logo} style={{ width: '3rem', height: '3rem', color: 'white' }} alt="Logo" />

            </div>
            <h1 className="logo-text">HomeRehab Physio</h1>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <h2 className="hero-title">
            Professional Physiotherapy
            <span className="hero-title-highlight">In Your Home</span>
          </h2>
          <p className="hero-description">
            Experience personalized rehabilitation and recovery in the comfort of your own home.
            Our certified physiotherapists bring professional care directly to you.
          </p>
          <div className="hero-buttons">
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary">
              Book Consultation
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-container">
          <h3 className="section-title">Our Services</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div>{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section id="gallery" className="gallery">
        <div className="gallery-container">
          <h3 className="section-title">Our Work</h3>
          <div className="carousel-container">
            <div className="carousel">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="carousel-nav carousel-nav-prev"
              >
                <ChevronLeft style={{ width: '1.5rem', height: '1.5rem', color: '#1f2937' }} />
              </button>
              <button
                onClick={nextSlide}
                className="carousel-nav carousel-nav-next"
              >
                <ChevronRight style={{ width: '1.5rem', height: '1.5rem', color: '#1f2937' }} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`carousel-dot ${index === currentSlide ? 'carousel-dot-active' : 'carousel-dot-inactive'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials-container">
          <h3 className="section-title">What Our Patients Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h5 className="testimonial-name">{testimonial.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h3 className="contact-title">Ready to Start Your Recovery?</h3>
          <p className="contact-description">Contact us today to schedule your home physiotherapy consultation</p>

          <div className="contact-grid">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <h4 className="contact-item-title">Call Us</h4>
              <p className="contact-item-text">+917999083960</p>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <h4 className="contact-item-title">Email</h4>
              <p className="contact-item-text">info@homerehab.com</p>
            </div>
            <div className="contact-item">
              <Clock className="contact-icon" />
              <h4 className="contact-item-title">Hours</h4>
              <p className="contact-item-text">Mon-Fri: 8AM-6PM</p>
            </div>
          </div>

          <button onClick={handleWhatsAppClick}
            className="btn-white">
            Schedule Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <div className="logo-icon">
              <Heart style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
            </div>
            <h4 className="footer-title">HomeRehab Physio</h4>
          </div>
          <p className="footer-description">Bringing professional physiotherapy care to your doorstep</p>
          <p className="footer-copyright">© 2025 HomeRehab Physio. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default HomeRehabPhysio;