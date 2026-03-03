/**
 * Education Page Component
 * Displays educational background with card layout
 */
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech',
      field: 'Computer Science Engineering',
      institution: 'University Name',
      year: '2022',
      score: 'CGPA: 8.5/10'
    },
    {
      degree: 'HSC',
      field: 'Science Stream',
      institution: 'College Name',
      year: '2018',
      score: 'Percentage: 85%'
    },
    {
      degree: 'SSC',
      field: 'General',
      institution: 'School Name',
      year: '2016',
      score: 'Percentage: 90%'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Education</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index}>
              <div className="border-2 border-white p-6 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold mb-3">{edu.degree}</h3>
                <p className="text-lg mb-2 opacity-90">{edu.field}</p>
                <p className="text-base mb-2 opacity-80">{edu.institution}</p>
                <p className="text-sm mb-3 opacity-70">Year: {edu.year}</p>
                <p className="text-lg font-semibold">{edu.score}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
