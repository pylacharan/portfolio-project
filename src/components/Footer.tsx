import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
              Paila Charan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              A passionate developer focused on creating intuitive and engaging web experiences that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/pylacharan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/paila-charan-10006325a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:pylacharan2@gmail.com" 
                className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Home
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Skills
              </a>
              <a href="#education" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Education
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-2">
              <p>Hyderabad, India</p>
              <p>
                <a href="mailto:pylacharan2@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  pylacharan2@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+916305373339" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  +91 6305373339
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Paila Charan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;