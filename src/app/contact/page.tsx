"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'um558899@gmail.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error: any) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send your message. Please try again or contact me directly via email.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative w-full max-w-7xl mx-auto flex flex-col gap-16"
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        background: "linear-gradient(to bottom, #ffffff 0%, #fcd34d 50%, #ffffff 100%)",
        backgroundAttachment: "fixed",
        minHeight: "calc(100vh - 200px)"
      }}
    >
      {/* Contact Header */}
      <div 
        style={{
          backgroundColor: '#000000',
          border: '3px solid #000000',
          borderRadius: '0.5rem',
          padding: '1rem 1.5rem',
          marginBottom: '2rem',
          marginTop: '2rem'
        }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold uppercase"
          style={{ 
            color: "#ffffff", 
            letterSpacing: "-0.05em",
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Get In Touch
        </h1>
      </div>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div
          className="bg-white rounded-2xl shadow-lg p-8"
          style={{ border: '3px solid #000000' }}
        >
          <div style={{backgroundColor: '#000000', padding: '1rem 1.5rem', width: '100%', marginBottom: '2rem', display: 'block', border: '2px solid #FFD700', borderBottom: 'none'}}>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#ffffff",
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#000000',
                display: 'block',
                margin: '0',
                lineHeight: '1.5'
              }}
            >
              Contact Information
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '3px solid #FCD34D',
                  background: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <span style={{ color: 'white', fontSize: '1.2rem' }}>📧</span>
              </div>
              <div>
                <h3 style={{ fontWeight: 'bold', color: '#000', marginBottom: '0.25rem' }}>Email</h3>
                <p style={{ color: '#666', textDecoration: 'none' }}>um558899@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '3px solid #FCD34D',
                  background: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <span style={{ color: 'white', fontSize: '1.2rem' }}>💼</span>
              </div>
              <div>
                <h3 style={{ fontWeight: 'bold', color: '#000', marginBottom: '0.25rem' }}>LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/muhammad-usman-004b363a4/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#666', textDecoration: 'none' }}
                >
                  linkedin.com/in/muhammad-usman-004b363a4
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '3px solid #FCD34D',
                  background: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <span style={{ color: 'white', fontSize: '1.2rem' }}>🐙</span>
              </div>
              <div>
                <h3 style={{ fontWeight: 'bold', color: '#000', marginBottom: '0.25rem' }}>GitHub</h3>
                <a 
                  href="https://github.com/samii999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#666', textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Please contact the owner for permission to access the code repository.');
                  }}
                >
                  github.com/samii999
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '3px solid #FCD34D',
                  background: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <span style={{ color: 'white', fontSize: '1.2rem' }}>📍</span>
              </div>
              <div>
                <h3 style={{ fontWeight: 'bold', color: '#000', marginBottom: '0.25rem' }}>Location</h3>
                <p style={{ color: '#666' }}>Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-white rounded-2xl shadow-lg p-8"
          style={{ border: '3px solid #000000' }}
        >
          <div style={{backgroundColor: '#000000', padding: '1rem 1.5rem', width: '100%', marginBottom: '2rem', display: 'block', border: '2px solid #FFD700', borderBottom: 'none'}}>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#ffffff",
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#000000',
                display: 'block',
                margin: '0',
                lineHeight: '1.5'
              }}
            >
              Send Me a Message
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus !== 'idle' && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  backgroundColor: submitStatus === 'success' ? '#10b981' : '#ef4444',
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                {statusMessage}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #000',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #000',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #000',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: isSubmitting ? '#666' : 'black',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontWeight: 'bold',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                border: '2px solid #FCD34D',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                width: '100%',
                opacity: isSubmitting ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = '#FCD34D';
                  e.currentTarget.style.color = 'black';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.color = 'white';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div
        className="bg-white rounded-2xl shadow-lg p-8"
        style={{ border: '3px solid #000000' }}
      >
        <div style={{backgroundColor: '#000000', padding: '1rem 1.5rem', width: '100%', marginBottom: '2rem', display: 'block', border: '2px solid #FFD700', borderBottom: 'none'}}>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#ffffff",
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#000000',
              display: 'block',
              margin: '0',
              lineHeight: '1.5'
            }}
          >
            Connect With Me
          </h2>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/samii999"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '3px solid #FCD34D',
              backgroundColor: 'black',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onClick={(e) => {
              e.preventDefault();
              alert('Please contact the owner for permission to access the code repository.');
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FCD34D';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
          >
            🐙
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-usman-004b363a4/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '3px solid #FCD34D',
              backgroundColor: 'black',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FCD34D';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
          >
            💼
          </a>

          <a
            href="mailto:um558899@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '3px solid #FCD34D',
              backgroundColor: 'black',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FCD34D';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
          >
            📧
          </a>
        </div>
      </div>
    </section>
  );
}