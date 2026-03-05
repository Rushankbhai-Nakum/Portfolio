/**
 * Footer Component
 * Displays social links and copyright information
 */
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Rushankbhai-Nakum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="GitHub Profile"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rushanksinh-nakum-578452291/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="mailto:rushanksinhnakum09@gmail.com"
              className="hover:opacity-70 transition-opacity"
              aria-label="Email Contact"
            >
              <FiMail size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Rushanksinh Nakum. All rights reserved.</p>
            <p className="mt-1">Building scalable web applications with the MERN stack.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
