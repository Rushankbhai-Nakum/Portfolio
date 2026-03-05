/**
 * Education Page Component
 * Displays educational background with vertical timeline layout
 */
import ScrollReveal from './ScrollReveal';

// Reusable Education Card Component
const EducationCard = ({ education, index }) => {
  return (
    <ScrollReveal>
      <div className="relative mb-12 md:mb-16">
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10 hidden md:block"></div>
        
        {/* Card Container */}
        <div className={`md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
        }`}>
          <div className="border border-white p-6 bg-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 group">
            {/* Degree Title */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-black">
              {education.degree}
            </h3>
            
            {/* Institution */}
            <p className="text-lg font-semibold mb-2 opacity-90">
              {education.institution}
            </p>
            
            {/* Location */}
            <p className="text-sm mb-2 opacity-80 flex items-center gap-2">
              <span>📍</span>
              {education.location}
            </p>
            
            {/* Year */}
            <p className="text-sm mb-3 opacity-70">
              📅 {education.year}
            </p>
            
            {/* Score */}
            <div className="pt-3 border-t border-current">
              <p className="text-lg font-bold">
                {education.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Education = () => {
  const education = [
    {
      degree: 'B.Tech – Information Technology',
      institution: 'A. D. Patel Institute of Technology, CVM University',
      location: 'Anand, India',
      year: '2022 – 2026',
      score: 'CGPA: 8.92 / 10'
    },
    {
      degree: 'HSC – Science (PCM)',
      institution: 'P. P. Savani Vidhya Bhavan',
      location: 'Surat, India',
      year: '2022',
      score: 'Percentage: 72%'
    },
    {
      degree: 'SSC',
      institution: 'Yogi Pravrutti Vidyalaya',
      location: 'Surat, India',
      year: '2020',
      score: 'Percentage: 86%'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey in technology and computer science.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white opacity-30"></div>
          
          {/* Education Cards */}
          <div>
            {education.map((edu, index) => (
              <EducationCard 
                key={index} 
                education={edu} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
