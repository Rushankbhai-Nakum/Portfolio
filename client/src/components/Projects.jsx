/**
 * Projects Page Component
 * Grid layout showcasing portfolio projects with links
 */
import { FiExternalLink } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

// Reusable Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="border border-white p-6 bg-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 group flex flex-col h-full">
        {/* Project Name */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-black">
          {project.name}
        </h3>
        
        {/* Tech Stack */}
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
          <p className="text-sm font-semibold mb-3 opacity-80">Key Outcomes:</p>
          <ul className="space-y-2">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="mt-1">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Live Demo Button */}
        <a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 border border-current px-4 py-3 hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white transition-all duration-300 font-medium mt-auto"
          aria-label={`View ${project.name} live demo`}
        >
          <FiExternalLink size={18} />
          <span>Live Demo</span>
        </a>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'Nayvora Solutions – Company Website',
      tech: ['React.js', 'Node.js', 'Express.js', 'JWT Authentication', 'Nodemailer', 'Multer', 'PM2'],
      outcomes: [
        'Developed a full-stack company website showcasing services and portfolio',
        'Implemented secure admin authentication and blog management system',
        'Integrated contact form with email functionality',
        'Optimized production deployment for performance and reliability'
      ],
      live: 'https://nayvora.in'
    },
    {
      name: 'Notes Management App',
      tech: ['React.js', 'JavaScript', 'CSS', 'Local Storage'],
      outcomes: [
        'Built a Notes Management application using ReactJS',
        'Implemented features to add, edit, delete, and pin notes',
        'Designed responsive UI for better user experience',
        'Implemented efficient state management for notes handling'
      ],
      live: 'https://notes-management-app-umber.vercel.app/'
    },
    {
      name: 'Hand Cricket Game with AI',
      tech: ['Python', 'OpenCV', 'CVZone'],
      outcomes: [
        'Developed a gesture-controlled hand cricket game',
        'Implemented real-time finger detection for batting input',
        'Built AI opponent with scoring and wicket logic',
        'Demonstrated real-time computer vision processing'
      ],
      live: 'https://github.com/Rushankbhai-Nakum/Hand-Cricket-With-AI'
    },
    {
      name: 'Cinechan – Personalized Entertainment Recommendation System',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      outcomes: [
        'Built a mood-based content recommendation platform',
        'Implemented secure user authentication system',
        'Developed user preference tracking for personalized suggestions',
        'Created admin panel for content management',
        'Designed collaborative filtering-based recommendation engine'
      ],
      live: 'https://github.com/Rushankbhai-Nakum/Cinechan-'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Some of the projects I have built using modern technologies.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
