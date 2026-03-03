/**
 * 404 Not Found Page
 * Displayed when user navigates to a non-existent route
 */
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors font-medium"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
