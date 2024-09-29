import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import HomePage from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Use HomePage component */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
