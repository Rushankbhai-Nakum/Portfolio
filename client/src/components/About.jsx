/**
 * About Page Component
 * Landing page with personal introduction and skills showcase
 */
import ScrollReveal from './ScrollReveal';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Postman', 'npm'] }
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* About Content */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Name
              </h1>
              <div className="text-lg md:text-xl text-gray-300 space-y-4">
                <p>
                  Full Stack Developer specializing in building exceptional digital experiences.
                  Passionate about creating elegant solutions to complex problems using modern
                  web technologies.
                </p>
                <p>
                  With expertise in MERN stack development, I transform ideas into scalable,
                  user-friendly applications that make a difference.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md aspect-square bg-gray-800 border-4 border-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" 
                  alt="Professional Developer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal>
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.category}>
                  <div className="border-2 border-white p-6 hover:bg-white hover:text-black transition-colors">
                    <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>
                    <ul className="space-y-2">
                      {skill.items.map(item => (
                        <li key={item} className="text-lg">{item}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
