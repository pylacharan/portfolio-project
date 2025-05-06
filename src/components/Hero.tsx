import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of screen
      const xPos = clientX / innerWidth;
      const yPos = clientY / innerHeight;
      
      // Use these values to create a parallax effect
      const moveX = (xPos - 0.5) * 20;
      const moveY = (yPos - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el, index) => {
        const factor = (index + 1) * 0.2;
        (el as HTMLElement).style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Abstract shapes for background */}
      <div className="absolute inset-0 z-0">
        <div className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
        <div className="parallax-element absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-400/10 dark:bg-teal-600/10 blur-3xl"></div>
        <div className="parallax-element absolute top-3/4 left-1/2 w-72 h-72 rounded-full bg-amber-400/10 dark:bg-amber-600/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h2 className="text-lg text-blue-600 dark:text-teal-400 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="block">Paila Charan</span>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              I design and develop exceptional digital experiences that are fast, accessible, and built with best practices.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                View Projects <ArrowDown size={16} />
              </button>
              <a 
                href="/resume.pdf" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                Resume <Download size={16} />
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/pylacharan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/paila-charan-10006325a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Hero image with animated glow */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="parallax-element relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-teal-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToProjects}
      >
        <ArrowDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;