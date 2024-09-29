import React from 'react';
import { FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';

function ContactPage() {
  return (
    <section style={{
      background: '#000',
      width: '800px',
      borderRadius: '20px',
      padding: '20px',
      margin: '10px auto',
      maxWidth: '800px',
      boxShadow: '8px 8px 20px rgba(106, 90, 205, 0.5), -8px -8px 20px rgba(255, 255, 255, 0.5)',
      border: '2px solid rgba(106, 90, 205, 0.7)',
      textAlign: 'center'
    }}>
      <h2>Contact Me</h2>
      <img src="/devil.jpg" alt="Devil" style={{ width: '200px', borderRadius: '50%', marginBottom: '20px' }} />
      <p>Email: 
        <a 
          href="mailto:devilking6105@gmail.com" 
          className="contact-link">
          devilking6105@gmail.com
        </a>
      </p>
      <p>Social Media:</p>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
        <li style={{ margin: '0 10px' }}>
          <a 
            href="https://www.facebook.com/devilking6105" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link">
            <FaFacebook style={{ fontSize: '25px' }} /> {/* Set icon size here */}
          </a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a 
            href="https://www.tiktok.com/@devilking6105" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link">
            <FaTiktok style={{ fontSize: '25px' }} /> {/* Set icon size here */}
          </a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a 
            href="https://twitter.com/devilking61051" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link">
            <FaTwitter style={{ fontSize: '25px' }} /> {/* Set icon size here */}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactPage;