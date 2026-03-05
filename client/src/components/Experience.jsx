/**
 * Experience Page Component
 * Timeline layout displaying professional experience and internships
 */
import ScrollReveal from './ScrollReveal';

// Reusable Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  return (
    <ScrollReveal>
      <div className="relative mb-12 md:mb-16">
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10 hidden md:block"></div>
        
        {/* Card Container */}
        <div className={`md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
        }`}>
          <div className="border border-white p-6 bg-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 group relative">
            {/* Current Badge */}
            {experience.current && (
              <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-bold group-hover:bg-black group-hover:text-white transition-colors">
                CURRENT
              </div>
            )}
            
            {/* Job Title */}
            <h3 className="text-2xl font-bold mb-2 group-hover:text-black">
              {experience.title}
            </h3>
            
            {/* Company */}
            <p className="text-xl font-semibold mb-2 opacity-90">
              {experience.company}
            </p>
            
            {/* Location */}
            <p className="text-sm mb-2 opacity-80 flex items-center gap-2">
              <span>📍</span>
              {experience.location}
            </p>
            
            {/* Duration */}
            <p className="text-sm mb-4 opacity-70 flex items-center gap-2">
              <span>📅</span>
              {experience.duration}
            </p>
            
            {/* Responsibilities */}
            <div className="pt-4 border-t border-current">
              <p className="text-sm font-semibold mb-3 opacity-80">Key Responsibilities:</p>
              <ul className="space-y-2">
                {experience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 text-xs">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Innovatix Technologies',
      location: 'Surat, India',
      duration: 'Jan 2026 – Present',
      current: true,
      responsibilities: [
        'Developed MERN stack applications with focus on scalability and performance',
        'Implemented JWT authentication for secure user management',
        'Built Nayvora Solutions company website with modern design principles',
        'Integrated blog system and contact form with backend API'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'QODORS Technologies',
      location: 'Remote',
      duration: 'May 28, 2025 – June 11, 2025',
      current: false,
      responsibilities: [
        'Built responsive UI using ReactJS and modern CSS frameworks',
        'Developed Notes Management Application with CRUD functionality',
        'Implemented reusable components following best practices'
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey in software development and technology.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white opacity-30"></div>
          
          {/* Experience Cards */}
          <div>
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                experience={exp} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
