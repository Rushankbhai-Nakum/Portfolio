/**
 * Main App Component
 * Handles routing, loading state, and SEO meta tags
 */
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import { updateMetaTags, seoConfig } from './utils/seo';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// SEO wrapper component
function SEOWrapper({ children, page }) {
  useEffect(() => {
    const config = seoConfig[page] || seoConfig.home;
    updateMetaTags(config);
  }, [page]);

  return children;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <SEOWrapper page="home">
              <About />
            </SEOWrapper>
          } />
          <Route path="/about" element={
            <SEOWrapper page="about">
              <About />
            </SEOWrapper>
          } />
          <Route path="/education" element={
            <SEOWrapper page="education">
              <Education />
            </SEOWrapper>
          } />
          <Route path="/experience" element={
            <SEOWrapper page="experience">
              <Experience />
            </SEOWrapper>
          } />
          <Route path="/projects" element={
            <SEOWrapper page="projects">
              <Projects />
            </SEOWrapper>
          } />
          <Route path="/contact" element={
            <SEOWrapper page="contact">
              <Contact />
            </SEOWrapper>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
