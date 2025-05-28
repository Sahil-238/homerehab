import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Update meta tags for SEO
document.title = "HomeRehab Physio - Professional Home Physiotherapy Services in Durg & Bhilai";

// Primary Meta Tags
const metaTags = {
  description: "Expert physiotherapy services at your doorstep in Durg and Bhilai. Specialized in post-surgery recovery, elderly care, and sports injury rehabilitation. Book your consultation today!",
  keywords: "physiotherapy, home physiotherapy, physical therapy, rehabilitation, Durg, Bhilai, post-surgery recovery, elderly care, sports injury, Dr. Kalash Malkapure, Dr. Poonam",
  author: "HomeRehab Physio",
  "og:title": "HomeRehab Physio - Professional Home Physiotherapy Services",
  "og:description": "Expert physiotherapy services at your doorstep in Durg and Bhilai.",
  "og:image": "/img1.jpg",
  "og:url": "https://www.homerehab.in",
  "twitter:card": "summary_large_image",
  "twitter:title": "HomeRehab Physio - Professional Home Physiotherapy Services",
  "twitter:description": "Expert physiotherapy services at your doorstep in Durg and Bhilai.",
  "twitter:image": "/img1.jpg"
};

// Add meta tags to document head
Object.entries(metaTags).forEach(([name, content]) => {
  const meta = document.createElement('meta');
  if (name.startsWith('og:')) {
    meta.setAttribute('property', name);
  } else {
    meta.setAttribute('name', name);
  }
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
});

// Add schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "HomeRehab Physio",
  "image": ["/img1.jpg", "/img2.jpg"],
  "url": "https://www.homerehab.in",
  "telephone": "+917999083960",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Durg & Bhilai",
    "addressRegion": "Chhattisgarh",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "medicalSpecialty": ["Physiotherapy", "Rehabilitation", "Sports Medicine"]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
