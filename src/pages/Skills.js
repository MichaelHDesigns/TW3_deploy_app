import React from 'react';
import { FaDev, FaReact, FaDatabase, FaBtc, FaSitemap } from 'react-icons/fa';

function SkillsPage() {
  const iconStyle = {
    marginRight: '10px',
    fontSize: '30px', // Set the icon size to 30px
    color: '#6a5acd' // Purple color
  };

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
      <h2>Skills</h2>
      <img src="/devil.jpg" alt="Devil" style={{ width: '200px', borderRadius: '50%', marginBottom: '20px' }} />

      <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
        {/* TechnicallyWeb3 Logo and Title */}
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
          <img 
            src="https://avatars.githubusercontent.com/u/129417982?v=4" 
            alt="TechnicallyWeb3" 
            style={{ width: '30px', height: '30px', marginRight: '10px' }} // Same size as other icons
          />
          TechnicallyWeb3 Core Developer
        </li>
        
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
        <FaDev style={iconStyle} />
          Full Stack Development
        </li>
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
          <FaReact style={iconStyle} />
          Front-End: React, Next.js, JavaScript
        </li>
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
          <FaDatabase style={iconStyle} />
          Back-End: Python, SQL
        </li>
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
          <FaBtc style={iconStyle} />
          Blockchain Technologies
        </li>
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
          <FaSitemap style={iconStyle} />
          AI
        </li>
      </ul>
    </section>
  );
}

export default SkillsPage;