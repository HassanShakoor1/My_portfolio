import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hassan.shakoor@icloud.com',
      link: ''
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+92 311 4453396',
      link: ''
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: ''
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/ubaid-ul-hassan-8b5495279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    }
  ];



  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Ready to start your next project? Let's create something amazing together!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-header">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new opportunities and exciting projects.</p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => {
                const isLinkedIn = info.link && info.link !== '' && info.link !== '#';
                
                if (isLinkedIn) {
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="contact-card"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-details">
                        <h4>{info.title}</h4>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  );
                }
                
                return (
                  <div
                    key={index}
                    className="contact-card no-link"
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="contact-cta">
          <h3>Ready to Work Together?</h3>
          <p>Let's turn your ideas into reality. I'm just one message away!</p>
          <div className="cta-stats">
            <div className="stat">
              <span className="stat-number">1.5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Companies Worked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;