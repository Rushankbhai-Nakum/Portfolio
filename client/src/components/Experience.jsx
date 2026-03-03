/**
 * Experience Page Component
 * Timeline layout displaying professional experience and internships
 */
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      type: 'Running Internship',
      duration: '4 Months',
      company: 'Tech Solutions Pvt Ltd',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2024 - Present',
      description: [
        'Developing and maintaining web applications using MERN stack with focus on scalability',
        'Collaborating with senior developers to implement new features and optimize existing code',
        'Participating in daily standups, code reviews, and agile development practices'
      ],
      current: true
    },
    {
      type: 'Summer Internship',
      duration: '1 Month',
      company: 'Digital Innovations Inc',
      role: 'Frontend Developer Intern',
      period: 'June 2023',
      description: [
        'Built responsive user interfaces using React and Tailwind CSS for client projects',
        'Worked on component library development and implemented reusable UI components',
        'Improved website performance by optimizing images and implementing lazy loading'
      ],
      current: false
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
        </ScrollReveal>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index}>
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                    <div className="border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-all duration-300 relative">
                      {/* Current Badge */}
                      {exp.current && (
                        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-bold">
                          CURRENT
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">{exp.type}</h3>
                        <p className="text-sm opacity-70 mb-1">Duration: {exp.duration}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xl font-semibold mb-1">{exp.role}</p>
                        <p className="text-lg opacity-80 mb-1">{exp.company}</p>
                        <p className="text-sm opacity-70">{exp.period}</p>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <span className="text-sm">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
