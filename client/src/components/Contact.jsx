/**
 * Contact Page Component
 * Form for users to send messages with backend integration
 */
import { useState } from 'react';
import axios from 'axios';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </ScrollReveal>
        
        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 resize-none transition-colors"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Contact Me'}
            </button>
            
            {status === 'success' && (
              <div className="p-4 bg-green-100 border-2 border-green-600 text-green-800 text-center font-medium">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-100 border-2 border-red-600 text-red-800 text-center font-medium">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
