/**
 * Projects Page Component
 * Grid layout showcasing portfolio projects with links
 */
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      outcomes: [
        'Built a full-featured online store with secure payment integration',
        'Implemented admin dashboard for inventory and order management',
        'Achieved 99.9% uptime with optimized database queries'
      ],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-demo.com'
    },
    {
      name: 'Task Management System',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io', 'Redux'],
      outcomes: [
        'Developed real-time collaborative task tracking application',
        'Integrated team chat and notification system',
        'Reduced project coordination time by 40% for teams'
      ],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://taskmanager-demo.com'
    },
    {
      name: 'Weather Forecast App',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      outcomes: [
        'Created responsive weather dashboard with 7-day forecast',
        'Implemented location-based weather detection using geolocation',
        'Visualized weather data with interactive charts and graphs'
      ],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-demo.com'
    },
    {
      name: 'Portfolio CMS',
      tech: ['Next.js', 'Sanity.io', 'TypeScript', 'Vercel'],
      outcomes: [
        'Built headless CMS for dynamic portfolio content management',
        'Achieved 95+ Lighthouse performance score',
        'Implemented SEO optimization and server-side rendering'
      ],
      github: 'https://github.com/yourusername/portfolio-cms',
      live: 'https://portfolio-cms-demo.com'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index}>
              <div className="border-2 border-white p-6 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                
                {/* Technology Stack */}
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 opacity-80">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs border border-current px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Outcomes */}
                <div className="mb-6 flex-grow">
                  <p className="text-sm font-semibold mb-2 opacity-80">Key Outcomes:</p>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="mr-2">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-current px-4 py-2 hover:opacity-70 transition-opacity"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <FiGithub size={18} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-current px-4 py-2 hover:opacity-70 transition-opacity"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <FiExternalLink size={18} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
