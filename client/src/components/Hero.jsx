import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          Building modern web applications with clean code and elegant design
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="hover:opacity-70 transition-opacity">
            <FiGithub size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="hover:opacity-70 transition-opacity">
            <FiLinkedin size={28} />
          </a>
          <a href="mailto:email@example.com"
             className="hover:opacity-70 transition-opacity">
            <FiMail size={28} />
          </a>
        </div>
        <a href="#contact" 
           className="inline-block px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors font-medium">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
