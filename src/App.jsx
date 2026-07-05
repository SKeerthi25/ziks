import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Menu, X, Moon, Sun, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './index.css';

import projImg1 from './assets/image.png';
import projImg2 from './assets/image copy.png';
import projImg3 from './assets/image copy 2.png';
import projImg4 from './assets/image copy 3.png';
import projImg5 from './assets/image copy 4.png';
import projImg6 from './assets/image copy 5.png';
import projImg7 from './assets/image copy 6.png';
import projImg8 from './assets/image copy 7.png';
import projImg9 from './assets/image copy 8.png';
import projImg10 from './assets/image copy 9.png';
import projImg11 from './assets/image copy 10.png';
import projImg12 from './assets/image copy 11.png';
import projImg13 from './assets/image copy 12.png';
import projImg14 from './assets/image copy 13.png';
import projImg15 from './assets/image copy 14.png';

const blogImg1 = projImg5;
const blogImg2 = projImg6;
const blogImg3 = projImg7;

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`} style={styles.navbar(scrolled)}>
      <div className="container" style={styles.navContainer}>
        <Link to="/" style={{...styles.logo, display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img src="/logo.png" alt="ZIKS LTD Logo" style={{height: '40px', width: 'auto', borderRadius: '4px'}} />
          <span style={styles.logoText}>ZIKS<span className="text-secondary">LTD</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.path} style={styles.navLink}>{link.name}</Link>
          ))}
          <button onClick={toggleTheme} style={styles.iconBtn}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/quote" className="btn-secondary">Get Quote</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle">
          <button onClick={toggleTheme} style={styles.iconBtn}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={styles.iconBtn}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{...styles.mobileMenu, maxHeight: 'calc(100vh - 80px)', overflowY: 'auto', backgroundColor: 'var(--color-white)', zIndex: 1001}}>
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.path} 
              style={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/quote" className="btn-secondary" style={{width: '100%', marginTop: '1rem'}} onClick={() => setIsOpen(false)}>Get Quote</Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container grid grid-cols-3 gap-8 footer-grid" style={{paddingTop: '60px', paddingBottom: '40px'}}>
        <div>
          <h3 style={styles.footerHeading}>ZIKS<span className="text-secondary">LTD</span></h3>
          <p style={{color: 'var(--color-gray)', marginBottom: '1.5rem'}}>
            Premium domestic construction services in the UK. Building trust, one project at a time.
          </p>
          <div style={styles.socialLinks}>
            {/* Social Icons would go here */}
          </div>
        </div>
        <div>
          <h4 style={styles.footerHeading}>Quick Links</h4>
          <ul style={styles.footerList}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={styles.footerHeading}>Contact</h4>
          <ul style={styles.footerList}>
            <li style={{display: 'flex', gap: '10px', alignItems: 'center'}}><Phone size={16} className="text-secondary"/> +44 7796 729288</li>
            <li style={{display: 'flex', gap: '10px', alignItems: 'center'}}><Mail size={16} className="text-secondary"/> <span className="break-word">maheshuk1947@gmail.com</span></li>
            <li style={{display: 'flex', gap: '10px', alignItems: 'center'}}><MapPin size={16} className="text-secondary"/> London, UK</li>
          </ul>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <div className="container" style={{textAlign: 'center', color: 'var(--color-gray)'}}>
          &copy; {new Date().getFullYear()} ZIKS LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="floating-container">
      <a href="https://wa.me/447796729288" target="_blank" rel="noreferrer" className="float-btn" style={{backgroundColor: '#25D366'}}>
        <MessageCircle color="#fff" />
      </a>
      <a href="tel:+447796729288" className="float-btn" style={{backgroundColor: 'var(--color-primary)'}}>
        <Phone color="#fff" />
      </a>
    </div>
  );
};

// --- Pages ---

const Home = () => (
  <div>
    <section style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      <div className="container" style={styles.heroContent}>
        <div style={{color: 'var(--color-secondary)', fontWeight: '600', letterSpacing: '2px', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase'}}>ZIKS LTD</div>
        <h1 style={styles.heroTitle}>Building<br/>Excellence,<br/>Delivering Trust</h1>
        <p style={styles.heroSubtitle}>Premium domestic construction services tailored to transform your vision into reality.</p>
        <div className="hero-buttons" style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
          <Link to="/quote" className="btn-secondary">Request a<br/>Quote</Link>
          <Link to="/services" className="btn-primary" style={{backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)'}}>Our<br/>Services</Link>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-8">
          <h2 style={{fontSize: '2.5rem', color: 'var(--color-primary)'}}>Why Choose ZIKS LTD</h2>
          <p style={{color: 'var(--color-gray)', maxWidth: '600px', margin: '0 auto'}}>We bring decades of experience, unmatched quality, and a commitment to health and safety to every project.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[1,2,3].map((_, i) => (
            <div key={i} className="card text-center">
              <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--color-secondary)'}}>
                <ChevronRight size={30} />
              </div>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Premium Quality</h3>
              <p style={{color: 'var(--color-gray)'}}>Only the finest materials and craftsmanship for your home.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="section-padding container">
    <div className="text-center mb-8">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>About ZIKS LTD</h1>
      <p style={{color: 'var(--color-gray)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem'}}>
        We are a premier domestic construction firm based in the UK, dedicated to turning your dream home into a reality with uncompromising quality and safety.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-8 mb-8" style={{alignItems: 'center'}}>
      <div>
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Construction Team" style={{width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)'}} />
      </div>
      <div>
        <h2 style={{fontSize: '2rem'}}>Our Mission</h2>
        <p style={{color: 'var(--color-gray)', marginBottom: '1.5rem'}}>
          To provide exceptional construction, renovation, and extension services that exceed our clients' expectations, while maintaining the highest standards of safety, integrity, and innovation.
        </p>
        <h2 style={{fontSize: '2rem'}}>Why Customers Trust Us</h2>
        <ul style={{color: 'var(--color-gray)', listStyle: 'none', padding: 0}}>
          <li style={{display: 'flex', gap: '15px', marginBottom: '18px', lineHeight: '1.6', fontSize: '1.05rem'}}>
            <ChevronRight className="text-secondary" style={{marginTop: '3px', flexShrink: 0}} /> 
            Uncompromising attention to architectural detail and modern design.
          </li>
          <li style={{display: 'flex', gap: '15px', marginBottom: '18px', lineHeight: '1.6', fontSize: '1.05rem'}}>
            <ChevronRight className="text-secondary" style={{marginTop: '3px', flexShrink: 0}} /> 
            Fully certified and insured professionals dedicated to your project.
          </li>
          <li style={{display: 'flex', gap: '15px', marginBottom: '18px', lineHeight: '1.6', fontSize: '1.05rem'}}>
            <ChevronRight className="text-secondary" style={{marginTop: '3px', flexShrink: 0}} /> 
            Transparent pricing, detailed project management, and no hidden fees.
          </li>
          <li style={{display: 'flex', gap: '15px', marginBottom: '18px', lineHeight: '1.6', fontSize: '1.05rem'}}>
            <ChevronRight className="text-secondary" style={{marginTop: '3px', flexShrink: 0}} /> 
            Strict adherence to the latest UK Health & Safety regulations.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="section-padding container">
    <div className="text-center mb-8">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Our Services</h1>
      <p style={{color: 'var(--color-gray)', maxWidth: '800px', margin: '0 auto'}}>Comprehensive construction services covering every aspect of domestic property improvement.</p>
    </div>
    <div className="grid grid-cols-3 gap-8">
      {[
        { title: 'House Extensions', desc: 'Expand your living space with beautifully integrated extensions.' },
        { title: 'Loft Conversions', desc: 'Transform unused loft space into stunning bedrooms or offices.' },
        { title: 'Home Renovations', desc: 'Complete property modernizations and refurbishments.' },
        { title: 'Kitchen & Bathroom', desc: 'Bespoke design and installation of modern kitchens and bathrooms.' },
        { title: 'Roofing & Brickwork', desc: 'Expert roofing repairs and structurally sound brickwork.' },
        { title: 'Landscaping & Driveways', desc: 'Enhance your curb appeal with our exterior services.' },
        { title: 'Plumbing & Heating', desc: 'Professional plumbing, boiler installations, and heating solutions.' },
        { title: 'Electrical Installations', desc: 'Certified electrical work, from full rewiring to smart home setups.' },
        { title: 'Carpentry & Joinery', desc: 'Custom woodwork, fitted wardrobes, and bespoke staircase design.' }
      ].map((service, idx) => (
        <div key={idx} className="card">
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-dark)'}}>{service.title}</h3>
          <p style={{color: 'var(--color-gray)', marginBottom: '1.5rem'}}>{service.desc}</p>
          <Link to="/quote" className="btn-secondary" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Request Quote</Link>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <div className="section-padding container">
    <div className="text-center mb-8">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Featured Projects</h1>
      <p style={{color: 'var(--color-gray)', maxWidth: '800px', margin: '0 auto'}}>Browse through our portfolio of successful transformations.</p>
    </div>
    <div className="grid grid-cols-3 gap-8">
      {[
        { title: 'Modern Kitchen Renovation', img: projImg1, loc: 'Surrey' },
        { title: 'Double Story Extension', img: projImg2, loc: 'London' },
        { title: 'Luxury Bathroom Installation', img: projImg3, loc: 'Kent' },
        { title: 'Landscaped Garden & Patio', img: projImg4, loc: 'Essex' },
        { title: 'Open Plan Living Area', img: projImg5, loc: 'Brighton' },
        { title: 'Bespoke Loft Conversion', img: projImg6, loc: 'London' },
        { title: 'Exterior Facade Restoration', img: projImg7, loc: 'Oxford' },
        { title: 'Contemporary Master Bedroom', img: projImg8, loc: 'Reading' },
        { title: 'Custom Joinery Staircase', img: projImg9, loc: 'Cambridge' },
        { title: 'Eco-Friendly Home Build', img: projImg10, loc: 'Bristol' },
        { title: 'Victorian Terrace Update', img: projImg11, loc: 'London' },
        { title: 'Minimalist Dining Space', img: projImg12, loc: 'Bath' },
        { title: 'Smart Home Integration', img: projImg13, loc: 'Manchester' },
        { title: 'Heritage Roof Replacement', img: projImg14, loc: 'York' },
        { title: 'Outdoor Entertainment Deck', img: projImg15, loc: 'Cornwall' }
      ].map((proj, idx) => (
        <div key={idx} className="card" style={{padding: 0, overflow: 'hidden'}}>
          <img src={proj.img} alt={proj.title} style={{width: '100%', height: '300px', objectFit: 'cover'}} />
          <div style={{padding: '24px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{proj.title}</h3>
            <p style={{color: 'var(--color-gray)', display: 'flex', alignItems: 'center', gap: '8px'}}><MapPin size={16} /> {proj.loc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_3t9o4l2', 'template_tln3bcc', form.current, 'ViBB7wVDIPTZtKq0j')
      .then(() => {
          setStatus('success');
          form.current.reset();
      }, () => {
          setStatus('error');
      });
  };

  return (
    <div className="section-padding container">
      <div className="text-center mb-8">
        <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Contact Us</h1>
        <p style={{color: 'var(--color-gray)', maxWidth: '800px', margin: '0 auto'}}>Get in touch with our team today to discuss your next project.</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="card glass">
          <h2 style={{marginBottom: '1.5rem'}}>Contact Details</h2>
          <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
            <li style={{display: 'flex', alignItems: 'center', gap: '15px'}}><Phone className="text-primary" size={24}/> <span style={{fontSize: '1.2rem'}}>+44 7796 729288</span></li>
            <li style={{display: 'flex', alignItems: 'center', gap: '15px'}}><Mail className="text-primary" size={24}/> <span className="break-word" style={{fontSize: '1.2rem'}}>maheshuk1947@gmail.com</span></li>
            <li style={{display: 'flex', alignItems: 'center', gap: '15px'}}><MapPin className="text-primary" size={24}/> <span style={{fontSize: '1.2rem'}}>London, United Kingdom</span></li>
          </ul>
          <div style={{width: '100%', height: '250px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
            <iframe 
              title="ZIKS LTD Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120600539224!3d51.5285582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginBottom: '1.5rem'}}>Quick Enquiry</h2>
          <form ref={form} onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <input type="text" name="user_name" placeholder="Your Name" style={styles.input} required />
            <input type="email" name="user_email" placeholder="Your Email" style={styles.input} required />
            <textarea name="message" placeholder="Message" rows="5" style={styles.input} required></textarea>
            <button type="submit" className="btn-primary" style={{marginTop: '1rem'}} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p style={{color: 'green', marginTop: '10px'}}>Message sent successfully!</p>}
            {status === 'error' && <p style={{color: 'red', marginTop: '10px'}}>Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

const Quote = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_3t9o4l2', 'template_tln3bcc', form.current, 'ViBB7wVDIPTZtKq0j')
      .then(() => {
          setStatus('success');
          form.current.reset();
      }, () => {
          setStatus('error');
      });
  };

  return (
    <div className="section-padding container">
      <div className="text-center mb-8">
        <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Request a Quote</h1>
        <p style={{color: 'var(--color-gray)', maxWidth: '800px', margin: '0 auto'}}>Provide details about your project and we'll get back to you with a comprehensive estimate.</p>
      </div>
      <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
        <form ref={form} onSubmit={sendEmail} style={{display: 'grid', gap: '1.5rem'}}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="first_name" placeholder="First Name" style={styles.input} required />
            <input type="text" name="last_name" placeholder="Last Name" style={styles.input} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="email" name="user_email" placeholder="Email Address" style={styles.input} required />
            <input type="tel" name="phone" placeholder="Phone Number" style={styles.input} />
          </div>
          <select name="service" style={styles.input} required>
            <option value="">Select Service Required...</option>
            <option value="House Extension">House Extension</option>
            <option value="Loft Conversion">Loft Conversion</option>
            <option value="Renovation">Renovation</option>
            <option value="Kitchen/Bathroom">Kitchen/Bathroom</option>
            <option value="Other">Other</option>
          </select>
          <textarea name="message" placeholder="Project Description (Please be as detailed as possible)" rows="6" style={styles.input} required></textarea>
          <button type="submit" className="btn-secondary" style={{width: '100%', padding: '15px', fontSize: '1.1rem'}} disabled={status === 'sending'}>
            {status === 'sending' ? 'Submitting...' : 'Submit Quote Request'}
          </button>
          {status === 'success' && <p style={{color: 'green', textAlign: 'center'}}>Quote request sent successfully!</p>}
          {status === 'error' && <p style={{color: 'red', textAlign: 'center'}}>Failed to send request. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

const Gallery = () => (
  <div className="section-padding container">
    <div className="text-center mb-8">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Project Gallery</h1>
      <p style={{color: 'var(--color-gray)'}}>Explore our craftsmanship across various domains.</p>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {[1,2,3,4,5,6].map(i => (
        <img key={i} src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=400&q=80`} alt="Gallery item" style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-sm)'}} />
      ))}
    </div>
  </div>
);

const Testimonials = () => (
  <div className="section-padding container">
    <div className="text-center mb-8">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Client Testimonials</h1>
      <p style={{color: 'var(--color-gray)'}}>What our clients say about ZIKS LTD.</p>
    </div>
    <div className="grid grid-cols-2 gap-8">
      {[1,2,3,4].map(i => (
        <div key={i} className="card glass">
          <p style={{fontStyle: 'italic', marginBottom: '1rem'}}>"Absolutely thrilled with the extension ZIKS LTD built for us. Professional, on-time, and exceptional quality."</p>
          <h4 style={{color: 'var(--color-secondary)'}}>- Happy Client {i}</h4>
        </div>
      ))}
    </div>
  </div>
);

const Blog = () => (
  <div className="section-padding container">
    <div className="text-center mb-8">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Latest News & Insights</h1>
    </div>
    <div className="grid grid-cols-3 gap-8">
      {[
        { title: '10 Tips for a Successful Loft Conversion', img: blogImg1 },
        { title: 'Choosing the Right Materials for Your Extension', img: blogImg2 },
        { title: 'Understanding UK Building Regulations', img: blogImg3 }
      ].map((blog, i) => (
        <div key={i} className="card" style={{padding: 0, overflow: 'hidden'}}>
          <img src={blog.img} alt={blog.title} style={{width: '100%', height: '180px', objectFit: 'cover'}} />
          <div style={{padding: '24px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{blog.title}</h3>
            <p style={{color: 'var(--color-gray)', fontSize: '0.9rem'}}>Read about our expert advice and industry trends...</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FAQ = () => (
  <div className="section-padding container">
    <div className="text-center mb-8">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)'}}>Frequently Asked Questions</h1>
    </div>
    <div style={{maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      {['Do you provide free quotes?', 'How long does a typical extension take?', 'Are you fully insured?'].map((q, i) => (
        <div key={i} className="card">
          <h3 style={{color: 'var(--color-secondary)', marginBottom: '0.5rem'}}>{q}</h3>
          <p style={{color: 'var(--color-gray)'}}>Yes, we ensure all aspects of our service meet the highest standards of transparency and quality.</p>
        </div>
      ))}
    </div>
  </div>
);

const Careers = () => {
  const [showJobs, setShowJobs] = useState(false);
  const jobs = [
    { title: 'Senior Carpenter', type: 'Full-time', location: 'London & Surrounding Areas' },
    { title: 'Experienced Bricklayer', type: 'Full-time', location: 'Essex' },
    { title: 'Construction Project Manager', type: 'Full-time', location: 'Head Office / On-site' },
    { title: 'Plumbing Coordinator', type: 'Contract', location: 'Various UK Sites' }
  ];

  return (
    <div className="section-padding container text-center">
      <h1 style={{fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem'}}>Join Our Team</h1>
      <p style={{color: 'var(--color-gray)', maxWidth: '600px', margin: '0 auto 2rem'}}>We are always looking for skilled tradespeople and project managers to join ZIKS LTD.</p>
      
      {!showJobs ? (
        <button className="btn-primary" onClick={() => setShowJobs(true)}>View Open Positions</button>
      ) : (
        <div style={{marginTop: '2rem', textAlign: 'left', maxWidth: '800px', margin: '2rem auto 0'}}>
          <h2 style={{fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1.5rem', textAlign: 'center'}}>Current Openings</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {jobs.map((job, i) => (
              <div key={i} className="card glass" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'}}>
                <div>
                  <h3 style={{fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-dark)'}}>{job.title}</h3>
                  <p style={{color: 'var(--color-gray)', display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <MapPin size={16} className="text-secondary" /> {job.location} <span style={{margin: '0 8px'}}>|</span> {job.type}
                  </p>
                </div>
                <button className="btn-secondary" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const HealthSafety = () => (
  <div className="section-padding container">
    <h1 style={{fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem'}}>Health & Safety</h1>
    <p style={{color: 'var(--color-gray)'}}>At ZIKS LTD, the safety of our staff, clients, and the public is our number one priority. All projects comply with current UK regulations.</p>
  </div>
);

const PrivacyPolicy = () => <div className="section-padding container"><h1>Privacy Policy</h1><p style={{color: 'var(--color-gray)'}}>Details on how we handle your data...</p></div>;
const TermsConditions = () => <div className="section-padding container"><h1>Terms & Conditions</h1><p style={{color: 'var(--color-gray)'}}>Our service agreements and conditions...</p></div>;
const CookiePolicy = () => <div className="section-padding container"><h1>Cookie Policy</h1><p style={{color: 'var(--color-gray)'}}>Information about our use of cookies...</p></div>;
const Sitemap = () => <div className="section-padding container"><h1>Sitemap</h1><p style={{color: 'var(--color-gray)'}}>Links to all pages...</p></div>;

// --- Main App ---

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Router>
      <ScrollToTop />
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main style={{flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/health-safety" element={<HealthSafety />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<div className="section-padding container text-center"><h1>404 - Page Not Found</h1></div>} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

// --- Inline Styles ---

const styles = {
  navbar: (scrolled) => ({
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    padding: scrolled ? '15px 0' : '25px 0',
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'transparent' : 'var(--color-white)',
    boxShadow: scrolled ? 'none' : 'var(--shadow-sm)'
  }),
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.75rem',
    fontWeight: '800',
    fontFamily: 'var(--font-heading)'
  },
  logoText: {
    color: 'var(--color-primary)'
  },
  navLink: {
    fontWeight: '500',
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(128,128,128,0.3)',
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-dark)',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none'
  },
  iconBtn: {
    background: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  mobileNavLink: {
    fontSize: '1.1rem',
    fontWeight: '500',
    padding: '10px 0',
    borderBottom: '1px solid rgba(128,128,128,0.2)'
  },
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    marginTop: 'auto'
  },
  footerHeading: {
    color: '#fff',
    marginBottom: '1.5rem',
    fontSize: '1.25rem'
  },
  footerList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    color: 'var(--color-gray)'
  },
  footerBottom: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '20px 0',
    marginTop: '20px'
  },
  hero: {
    height: '100vh',
    minHeight: '600px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    background: 'url(https://images.unsplash.com/photo-1541888081198-46654e951bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80) center/cover no-repeat'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    color: '#fff'
  },
  heroTitle: {
    fontSize: 'clamp(2.2rem, 8vw, 4.5rem)',
    marginBottom: '1.5rem',
    color: '#fff'
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    maxWidth: '600px',
    color: 'rgba(255,255,255,0.9)'
  }
};

// Responsive overrides can be handled in index.css
