import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

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
      value: 'hassan.shakoor@gmail.com',
      link: 'mailto:hassan.shakoor@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+92 311 4453396',
      link: 'tel:+923114453396'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: ''
    },
    {
      icon: '🌐',
      title: 'Website',
      value: 'hassan-portfolio.dev',
      link: ''
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: '🔗',
      url: '#',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: '#',
      color: '#e4405f'
    }
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="contact-header"
          variants={slideFromTop}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title"
            variants={slideFromTop}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="section-divider"
            variants={{
              hidden: { width: 0 },
              visible: { 
                width: "100px",
                transition: { duration: 0.8, delay: 0.5 }
              }
            }}
          ></motion.div>
          <motion.p 
            className="section-subtitle"
            variants={slideFromTop}
          >
            Ready to start your next project? Let's create something amazing together!
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div 
            className="contact-info-section"
            ref={contactRef}
            variants={slideFromLeft}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="contact-intro"
              variants={slideFromLeft}
            >
              <motion.h3 variants={slideFromLeft}>Let's Connect!</motion.h3>
              <motion.p variants={slideFromLeft}>
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you!
              </motion.p>
            </motion.div>

            <motion.div 
              className="contact-details"
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                      key={index}
                  className="contact-item"
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      x: -50,
                      scale: 0.8
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="contact-icon"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="contact-details-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <motion.a 
                      href={info.link}
                        whileHover={{ color: "#60a5fa" }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                      </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="social-section"
              variants={containerVariants}
            >
              <motion.h4 variants={slideFromLeft}>Follow Me</motion.h4>
              <motion.div 
                className="social-links"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        scale: 0,
                        rotate: -180
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-section"
            ref={formRef}
            variants={slideFromRight}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="form-header"
              variants={slideFromRight}
            >
              <motion.h3 variants={slideFromRight}>Send Message</motion.h3>
              <motion.p variants={slideFromRight}>
                Fill out the form below and I'll get back to you as soon as possible!
              </motion.p>
            </motion.div>

            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div 
                className="form-row"
                variants={containerVariants}
              >
                <motion.div 
                  className="form-group"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.1 }
                    }
                  }}
                >
                  <motion.label 
                    htmlFor="name"
                    whileHover={{ x: 5 }}
                  >
                    Name *
                  </motion.label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.div 
                  className="form-group"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.2 }
                    }
                  }}
                >
                  <motion.label 
                    htmlFor="email"
                    whileHover={{ x: 5 }}
                  >
                    Email *
                  </motion.label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="form-group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.3 }
                  }
                }}
              >
                <motion.label 
                  htmlFor="subject"
                  whileHover={{ x: 5 }}
                >
                  Subject *
                </motion.label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div 
                className="form-group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.4 }
                  }
                }}
              >
                <motion.label 
                  htmlFor="message"
                  whileHover={{ x: 5 }}
                >
                  Message *
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.5 }
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(96, 165, 250, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={isSubmitting ? { rotate: 360 } : {}}
                transition={{ duration: isSubmitting ? 1 : 0.2 }}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳ Sending...
                  </motion.span>
                ) : (
                  '🚀 Send Message'
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Quick Contact CTA */}
        <motion.div 
          className="quick-contact"
          variants={slideFromBottom}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="quick-contact-content"
            variants={containerVariants}
          >
            <motion.h3 variants={slideFromBottom}>
              Need a quick response?
            </motion.h3>
            <motion.p variants={slideFromBottom}>
              For urgent inquiries, feel free to reach out directly!
            </motion.p>
            <motion.div 
              className="quick-contact-buttons"
              variants={containerVariants}
            >
              <motion.a
                href="mailto:hassan.shakoor@gmail.com"
                className="quick-btn email-btn"
                variants={slideFromLeft}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Email Me
              </motion.a>
              <motion.a
                href="tel:+923114453396"
                className="quick-btn phone-btn"
                variants={slideFromRight}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Call Me
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;