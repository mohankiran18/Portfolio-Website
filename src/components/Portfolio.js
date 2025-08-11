
import React, { useState, useEffect, useRef } from 'react';

import {
  ChevronDown, Mail, Phone, MapPin, ExternalLink,
  Download, MessageCircle, Github, Linkedin
} from 'lucide-react';
import { mockData } from '../data/mock';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chatbase init
// Chatbase init
useEffect(() => {
  const script = document.createElement('script');
  script.innerHTML = `
    (function(){
      if(!window.chatbase || window.chatbase("getState")!=="initialized"){
        window.chatbase=(...args)=>{
          if(!window.chatbase.q){window.chatbase.q=[]}
          window.chatbase.q.push(args)
        };
        window.chatbase=new Proxy(window.chatbase,{
          get(t,p){if(p==="q"){return t.q}return(...a)=>t(p,...a)}
        })
      }
      const onLoad=function(){
        const s=document.createElement("script");
        s.src="https://www.chatbase.co/embed.min.js";
        s.id="hHrI1xAgX6R7Vmoqg8gWa"; // <--- New ID
        s.domain="www.chatbase.co";
        document.body.appendChild(s)
      };
      if(document.readyState==="complete"){onLoad()}
      else{window.addEventListener("load",onLoad)}
    })();
  `;
  document.head.appendChild(script);
}, []);


  // Resume download
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://customer-assets.emergentagent.com/job_prompt-wizard-70/artifacts/mj925mty_Prompt%20engineer.pdf';
    link.download = 'Kadali_Mohan_Kiran_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

   // <-- Make sure to import useRef

// ... (your existing code for useState, useEffect, and downloadResume)

  // --- ADD THIS CODE HERE ---
 

    const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get your credentials from the EmailJS dashboard
    const serviceId = 'service_3gu5qqs';
    const templateId = 'template_b2zui0l';
    const publicKey = 'UTc-rriJItIQjnX0w';

    const formData = new FormData(formRef.current);
    const data = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: data,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        formRef.current.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  // --- End of new code ---

 


  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-container">
          <div className="nav-logo"><span className="logo-text">MK</span></div>
          <div className="nav-links">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item, index) => (
              <button
                key={item}
                className={`nav-link ${activeSection === ['hero', 'about', 'skills', 'projects', 'education', 'contact'][index] ? 'active' : ''}`}
                onClick={() => scrollToSection(['hero', 'about', 'skills', 'projects', 'education', 'contact'][index])}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="badge-text">✨ Available for Hire</span></div>
            <h1 className="hero-title">Hi, I'm <span className="text-accent">Kadali Mohan Kiran</span></h1>
            <h2 className="hero-subtitle">Prompt Engineer & AI Strategist</h2>
            <p className="hero-description">{mockData.tagline}</p>
          
             


  <div className="hero-cta">
              <button className="btn-primary" onClick={downloadResume}>
                <Download className="btn-icon" /> View Resume
              </button>
              <button className="btn-secondary" onClick={() => window.chatbase && window.chatbase('open')}>
                <MessageCircle className="btn-icon" /> Chat with Me
              </button>
            

            </div>
          </div>
<div className="hero-avatar">
  <div className="avatar-glow"></div>
  <div className="avatar-placeholder">
    <img src="/myprofile.png.jfif" alt="Kadali Mohan Kiran" className="avatar-image" />
  </div>


          </div>
        </div>
        <div className="hero-scroll"><ChevronDown className="scroll-icon" onClick={() => scrollToSection('about')} /></div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>
          <div className="about-content">
            <p className="about-description">{mockData.about}</p>
            <div className="about-stats">
              <div className="stat-card"><div className="stat-number">3</div><div className="stat-label">AI Projects</div></div>
              <div className="stat-card"><div className="stat-number">2+</div><div className="stat-label">Years Learning</div></div>
              <div className="stat-card"><div className="stat-number">100%</div><div className="stat-label">Dedication</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies and skills I work with</p>
          </div>
          <div className="skills-grid">
            {mockData.skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-icon"><span className="skill-emoji">{skill.icon}</span></div>
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          <div className="projects-grid">
            {mockData.projects.map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder"><span className="project-emoji">{project.icon}</span></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-features">
                    {project.features.map((f, idx) => <li key={idx} className="feature-item">• {f}</li>)}
                  </ul>
                  <div className="project-tech">
                    {project.tech.map((t, idx) => <span key={idx} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Education & Certifications</h2>
            <p className="section-subtitle">My learning journey</p>
          </div>
          <div className="education-timeline">
            {mockData.education.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{item.title}</h3>
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <p className="timeline-institution">{item.institution}</p>
                  {item.description && <p className="timeline-description">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="languages-section">
            <h3 className="languages-title">Languages</h3>
            <div className="languages-grid">
              {mockData.languages.map((lang, i) => (
                <div key={i} className="language-card">
                  <div className="language-name">{lang.name}</div>
                  <div className="language-level">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Ready to work together? Let's talk!</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item"><MapPin className="contact-icon" /> <span>Kakinada, Andhra Pradesh, India</span></div>
              <div className="contact-item"><Mail className="contact-icon" /> <a href="mailto:mohankiran.k2004@gmail.com">mohankiran.k2004@gmail.com</a></div>
              <div className="contact-item"><Phone className="contact-icon" /> <a href="tel:+916309895954">+91-6309895954</a></div>
              <div className="contact-item"><Linkedin className="contact-icon" /> <a href="https://www.linkedin.com/in/mohank18" target="_blank" rel="noopener noreferrer">linkedin.com/in/mohank18</a></div>
            </div>
            <div className="contact-form">
               <form ref={formRef} onSubmit={handleSubmit} className="form">
                <div className="form-group"><input type="text" name="name" placeholder="Your Name" className="form-input" /></div>
                <div className="form-group"><input type="email" name="email" placeholder="Your Email" className="form-input" /></div>
                <div className="form-group"><textarea name="message" placeholder="Your Message" rows="5" className="form-textarea"></textarea></div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat */}
      <div className="floating-chat">
      
      </div>
    </div>
  );
};

export default Portfolio;
