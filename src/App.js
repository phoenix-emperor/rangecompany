import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const saved = localStorage.getItem('theme');
    try {
      return saved ? JSON.parse(saved) : false;
    } catch (error) {
      // If there's an error parsing, default to light mode
      localStorage.removeItem('theme');
      return false;
    }
  });

  // Update theme when isDarkMode changes
  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
    
    // Update text colors for better contrast
    document.documentElement.style.setProperty('--text-primary', isDarkMode ? '#ffffff' : '#1a1a1a');
    document.documentElement.style.setProperty('--text-secondary', isDarkMode ? '#e5e7eb' : '#6b7280');
    document.documentElement.style.setProperty('--text-muted', isDarkMode ? '#9ca3af' : '#9ca3af');
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <CoreValues />
                <Services />
                <Projects />
                <Contact />
                <CTA />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
