/**
 * SEO Utility Functions
 * Helper functions to update page meta tags dynamically
 */

export const updateMetaTags = ({ title, description, keywords, ogImage }) => {
  // Update title
  if (title) {
    document.title = title;
  }

  // Update or create meta tags
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage }
  ];

  metaTags.forEach(({ name, property, content }) => {
    if (!content) return;

    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement('meta');
      if (name) element.setAttribute('name', name);
      if (property) element.setAttribute('property', property);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });
};

export const seoConfig = {
  home: {
    title: 'Portfolio - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack. Building modern web applications with clean code and elegant design.',
    keywords: 'full stack developer, MERN stack, React, Node.js, MongoDB, web development, portfolio'
  },
  about: {
    title: 'About - Portfolio',
    description: 'Learn more about my skills, experience, and passion for web development.',
    keywords: 'about, skills, web developer, frontend, backend, full stack'
  },
  education: {
    title: 'Education - Portfolio',
    description: 'My educational background and academic achievements.',
    keywords: 'education, B.Tech, computer science, academic background'
  },
  experience: {
    title: 'Experience - Portfolio',
    description: 'Professional experience and internships in web development.',
    keywords: 'experience, internship, work history, professional background'
  },
  projects: {
    title: 'Projects - Portfolio',
    description: 'Showcase of my web development projects and technical achievements.',
    keywords: 'projects, portfolio, web applications, MERN stack projects'
  },
  contact: {
    title: 'Contact - Portfolio',
    description: 'Get in touch with me for collaboration opportunities and inquiries.',
    keywords: 'contact, hire, collaboration, get in touch'
  }
};
