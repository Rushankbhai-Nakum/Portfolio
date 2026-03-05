/**
 * About Page Component
 * Landing page with personal introduction and skills showcase
 */
import ScrollReveal from './ScrollReveal';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, 
  FaHtml5, FaCss3Alt, FaNpm 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, 
  SiMysql, SiPostman, SiVisualstudiocode, SiC, SiCplusplus 
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';

const About = () => {
  const skills = [
    { 
      category: 'Frontend Development', 
      items: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    { 
      category: 'Backend Development', 
      items: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'REST API Development', icon: <BiData /> }
      ]
    },
    { 
      category: 'Databases', 
      items: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> }
      ]
    },
    { 
      category: 'Programming Languages', 
      items: [
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'SQL', icon: <BiData /> }
      ]
    },
    { 
      category: 'Tools & Platforms', 
      items: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'VS Code', icon: <SiVisualstudiocode /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'npm', icon: <FaNpm /> }
      ]
    }
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
                Rushanksinh Nakum
                
              </h1>
              <div className="text-lg md:text-xl text-gray-300 space-y-4">
                
                <p>
                MERN Stack Developer | Full Stack Developer
                </p>
                <p>
                  Full Stack Developer specializing in MERN stack development with experience building modern web applications. Passionate about solving real-world problems through efficient and scalable digital solutions.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md aspect-square bg-gray-800 border-4 border-white overflow-hidden">
                <img 
                  src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" 
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Skills & Technologies
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Technologies and tools I use to build modern, scalable web applications.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.category}>
                  <div className="border border-white p-6 hover:bg-white hover:text-black transition-all duration-300 group">
                    <h3 className="text-xl font-bold mb-4 pb-2 border-b border-current">
                      {skill.category}
                    </h3>
                    <ul className="space-y-3">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-base">
                          <span className="text-2xl group-hover:scale-110 transition-transform">
                            {item.icon}
                          </span>
                          <span>{item.name}</span>
                        </li>
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
