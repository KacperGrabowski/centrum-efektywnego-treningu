import facebook from '../assets/facebook.svg'; 
import instagram from '../assets/instagram.svg'; 
import gmail from '../assets/gmail.svg'; 
import './components.css'
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const isDark = location.pathname !== '/centrum-efektywnego-treningu/';
  
  return (
    <footer className={`h-30 w-full  py-4 px-6 bottom-0 z-50 ${isDark ? 'bg-gradient-to-r from-green-900 to-teal-950 text-white' : 'bg-transparent text-gray-800 fixed'}`}>
      <div className="h-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <p className="mt-auto">&copy; {new Date().getFullYear()} Tomasz Stewarski. Wszelkie prawa zastrzeżone.</p>
        <div className="flex h-full space-x-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-full hover:text-blue-600">
            <img
              src={facebook}
              alt="Logo"
              className="h-full object-contain transition-transform duration-300 ease-in-out hover:scale-90 focus:scale-105 img-transform"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-full hover:text-pink-500">
            <img
              src={instagram}
              alt="Logo"
              className="h-full object-contain transition-transform duration-300 ease-in-out hover:scale-90 focus:scale-105 img-transform"
            />
          </a>
          <a href="mailto:example@example.com" className="h-full hover:text-green-600">
            <img
              src={gmail}
              alt="Logo"
              className="h-full object-contain transition-transform duration-300 ease-in-out hover:scale-90 focus:scale-105 img-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
