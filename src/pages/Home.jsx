import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, Award, Users, Heart, Star, MessageCircle, Menu, X } from 'lucide-react';

import Logo from '../assets/logo.png';

const HomeRehabPhysio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
      name: "Sahil",
      rating: 5,
      text: "The home physio service was incredible. I recovered much faster in my own comfortable environment."
    },
    {
      name: "Harry",
      rating: 5,
      text: "Professional, caring, and extremely knowledgeable. Highly recommend their services."
    },
    {
      name: "Shivali",
      rating: 5,
      text: "After my knee surgery, their home visits made all the difference in my recovery journey."
    }
  ];

  const doctors = [
    {
      name: "Dr. Kalash Malkapure",
      title: "Physiotherapist",
      specialization: "Orthopedic & Sports Rehabilitation",
      experience: "5+ years of experience",
      phone: "917999083960",
      image: "/img1.jpg"
    },
    {
      name: "Dr. Poonam",
      title: "Physiotherapist",
      specialization: "Neurological & Geriatric Care",
      experience: "4+ years of experience",
      phone: "917999917793",
      image: "/img2.jpg"
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDoctorWhatsApp = (doctor) => {
    const message = `Hello Dr. ${doctor.name.split(' ')[1]},\n\nI would like to inquire about physiotherapy services.\n\nI am interested in:\n- Consultation\n- Treatment options\n- Appointment availability\n\nPlease provide more information.\n\nThank you.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${doctor.phone}?text=${encodedMessage}`, "_blank");
  };

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section on scroll
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ['home', 'services', 'doctors', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  return (
    <div className="app">
      <style jsx>{`
        .app {
          min-height: 100vh;
          background: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .header {
          background: ${scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(10px)' : 'none'};
          box-shadow: ${scrolled ? '0 1px 3px rgba(0, 0, 0, 0.05)' : 'none'};
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 50;
          transition: all 0.3s ease;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 60;
        }

        .logo-icon {
          width: 3rem;
          height: 3rem;
          background: #4f46e5;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .logo-icon:hover {
          transform: rotate(10deg);
        }

        .logo-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-link {
          color: ${scrolled ? '#1f2937' : '#4f46e5'};
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          font-size: 1.125rem;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #4f46e5;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #4f46e5;
        }

        .nav-link.active {
          color: #4f46e5;
          font-weight: 600;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #4f46e5;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 60;
        }

        .mobile-menu-button svg {
          width: 2rem;
          height: 2rem;
          transition: transform 0.3s ease;
        }

        .mobile-menu-button:hover svg {
          transform: scale(1.1);
        }

        .mobile-nav {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: white;
          padding: 6rem 2rem 2rem;
          z-index: 50;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-nav.open {
          transform: translateX(0);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        .mobile-nav-link {
          color: #1f2937;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .mobile-nav-link::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          width: 0;
          height: 2px;
          background: #4f46e5;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .mobile-nav-link:hover::after,
        .mobile-nav-link.active::after {
          width: 100%;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #4f46e5;
        }

        .hero {
          padding: 10rem 2rem 5rem;
          background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
          transform: rotate(-45deg);
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #1f2937, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title-highlight {
          display: block;
          color: #4f46e5;
          -webkit-text-fill-color: #4f46e5;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #4b5563;
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 25px -5px rgba(79, 70, 229, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #4f46e5;
          padding: 1rem 2.5rem;
          border: 2px solid #4f46e5;
          border-radius: 12px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #4f46e5;
          color: white;
          transform: translateY(-2px);
        }

        .services {
          padding: 8rem 2rem;
          background: white;
        }

        .services-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          color: #1f2937;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #1f2937, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 1.25rem;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f3f4f6;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -5px rgba(79, 70, 229, 0.1);
          border-color: #4f46e5;
        }

        .service-icon {
          width: 3rem;
          height: 3rem;
          color: #4f46e5;
          margin-bottom: 2rem;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #6b7280;
          line-height: 1.8;
        }

        .gallery {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .carousel-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .carousel {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide {
          width: 100%;
          flex-shrink: 0;
        }

        .carousel-image {
          width: 100%;
          height: 32rem;
          object-fit: cover;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
        }

        .carousel-nav:hover {
          background: #4f46e5;
          color: white;
        }

        .carousel-nav svg {
          width: 1.5rem;
          height: 1.5rem;
          transition: color 0.3s ease;
        }

        .carousel-nav:hover svg {
          color: white;
        }

        .carousel-nav-prev {
          left: -1.5rem;
        }

        .carousel-nav-next {
          right: -1.5rem;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          gap: 0.75rem;
        }

        .carousel-dot {
          width: 2rem;
          height: 0.25rem;
          border: none;
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot-active {
          background: #4f46e5;
          width: 3rem;
        }

        .carousel-dot-inactive {
          background: #e5e7eb;
        }

        .testimonials {
          padding: 8rem 2rem;
          background: white;
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f3f4f6;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -5px rgba(79, 70, 229, 0.1);
          border-color: #4f46e5;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .star {
          width: 1.5rem;
          height: 1.5rem;
          color: #fbbf24;
        }

        .testimonial-text {
          color: #4b5563;
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-name {
          font-weight: 700;
          color: #1f2937;
          font-size: 1.125rem;
        }

        .contact {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.1)' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .contact-description {
          font-size: 1.25rem;
          margin-bottom: 4rem;
          opacity: 0.9;
          text-align: center;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .contact-icon {
          width: 2.5rem;
          height: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-item-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .contact-item-text {
          opacity: 0.9;
          font-size: 1.125rem;
        }

        .btn-white {
          background: white;
          color: #4f46e5;
          padding: 1.25rem 3rem;
          border: none;
          border-radius: 12px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
          display: block;
          margin: 0 auto;
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.2);
        }

        .footer {
          background: #1f2937;
          color: white;
          padding: 4rem 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #e5e7eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-description {
          color: #9ca3af;
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        .footer-copyright {
          color: #6b7280;
          font-size: 1rem;
        }

        .whatsapp-float {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: #25d366;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px -5px rgba(37, 211, 102, 0.5);
          z-index: 50;
        }

        .whatsapp-float:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 35px -5px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-icon {
          width: 2rem;
          height: 2rem;
        }

        .doctors {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
          position: relative;
          overflow: hidden;
        }

        .doctors::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
          transform: rotate(-45deg);
        }

        .doctors-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .doctor-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f3f4f6;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .doctor-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -5px rgba(79, 70, 229, 0.1);
          border-color: #4f46e5;
        }

        .doctor-image-container {
          width: 100%;
          padding-top: 75%; /* 4:3 Aspect Ratio */
          position: relative;
          overflow: hidden;
        }

        .doctor-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.3s ease;
        }

        .doctor-card:hover .doctor-image {
          transform: scale(1.05);
        }

        .doctor-info {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .doctor-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .doctor-title {
          color: #4f46e5;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .doctor-details {
          margin-bottom: 1.5rem;
        }

        .doctor-detail {
          color: #6b7280;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .doctor-contact {
          display: flex;
          gap: 1rem;
        }

        .btn-contact {
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          justify-content: center;
        }

        .btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.3);
        }

        .btn-contact svg {
          width: 1.25rem;
          height: 1.25rem;
        }

        @media (min-width: 1024px) {
          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem;
          }

          .doctor-image-container {
            padding-top: 66.67%; /* 3:2 Aspect Ratio for laptop */
          }
        }

        @media (max-width: 768px) {
          .doctors-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .doctor-image-container {
            padding-top: 100%; /* Square Aspect Ratio for mobile */
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .mobile-nav {
            display: block;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .contact-title {
            font-size: 2.5rem;
          }

          .carousel-nav {
            display: none;
          }

          .doctors-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }

          .hero-buttons {
            flex-direction: column;
          }
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
          text-align: left;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-section-title {
          color: white;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #9ca3af;
          transition: color 0.3s ease;
        }

        .footer-contact-item:hover {
          color: white;
        }

        .footer-icon {
          width: 1.25rem;
          height: 1.25rem;
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(156, 163, 175, 0.1);
          padding-top: 2rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-contact-item {
            justify-content: center;
          }
        }

        .contact-numbers {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .contact-item-text {
          opacity: 0.9;
          font-size: 1.125rem;
          transition: all 0.3s ease;
        }

        .contact-item-text:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">
              <img src={Logo} style={{ width: '3rem', height: '3rem', color: 'white' }} alt="Logo" />
            </div>
            <h1 className="logo-text">HomeRehab Physio</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
            <a href="#doctors" className={`nav-link ${activeSection === 'doctors' ? 'active' : ''}`}>Doctors</a>
            <a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
            <nav className="mobile-nav-links">
              <a 
                href="#home" 
                className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#doctors" 
                className={`mobile-nav-link ${activeSection === 'doctors' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </a>
              <a 
                href="#gallery" 
                className={`mobile-nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
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
              onClick={() => scrollToSection('doctors')}
              className="btn-primary">
              Book Consultation
            </button>
            <button
              onClick={() => scrollToSection('services')}
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

      {/* Doctors Section */}
      <section id="doctors" className="doctors">
        <div className="doctors-container">
          <h3 className="section-title">Our Expert Doctors</h3>
          <p className="section-subtitle">Meet our experienced physiotherapists who are dedicated to your recovery and well-being</p>
          
          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <div className="doctor-image-container">
                  <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                </div>
                <div className="doctor-info">
                  <h4 className="doctor-name">{doctor.name}</h4>
                  <p className="doctor-title">{doctor.title}</p>
                  <div className="doctor-details">
                    <p className="doctor-detail">{doctor.specialization}</p>
                    <p className="doctor-detail">{doctor.experience}</p>
                  </div>
                  <div className="doctor-contact">
                    <button 
                      onClick={() => handleDoctorWhatsApp(doctor)}
                      className="btn-contact"
                    >
                      <MessageCircle />
                      Contact via WhatsApp
                    </button>
                  </div>
                </div>
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
              <div className="contact-numbers">
                <p className="contact-item-text">Dr. Kalash: +91 79990 83960</p>
                <p className="contact-item-text">Dr. Poonam: +91 79999 17793</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <h4 className="contact-item-title">Email</h4>
              <p className="contact-item-text">info@homerehab.com</p>
            </div>
            <div className="contact-item">
              <Clock className="contact-icon" />
              <h4 className="contact-item-title">Hours</h4>
              <p className="contact-item-text">Monday - Sunday: 8 AM to 8 PM</p>
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
          <div className="footer-content">
            <div className="footer-section">
              <h5 className="footer-section-title">Contact Us</h5>
              <div className="footer-contact-item">
                <Phone className="footer-icon" />
                <p>Dr. Kalash: +91 79990 83960</p>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-icon" />
                <p>Dr. Poonam: +91 79999 17793</p>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-icon" />
                <p>info@homerehab.com</p>
              </div>
            </div>
            <div className="footer-section">
              <h5 className="footer-section-title">Locations</h5>
              <div className="footer-contact-item">
                <MapPin className="footer-icon" />
                <p>Durg, Chhattisgarh</p>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-icon" />
                <p>Bhilai, Chhattisgarh</p>
              </div>
            </div>
            <div className="footer-section">
              <h5 className="footer-section-title">Hours</h5>
              <div className="footer-contact-item">
                <Clock className="footer-icon" />
                <p>Monday - Sunday: 8 AM to 8 PM</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-description">Bringing professional physiotherapy care to your doorstep</p>
            <p className="footer-copyright">© 2024 HomeRehab Physio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <button
        onClick={() => scrollToSection('doctors')}
        className="whatsapp-float"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default HomeRehabPhysio;