import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; 
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isDark = location.pathname !== '/centrum-efektywnego-treningu/';

  return (
    <header className={`w-full shadow-xl px-6 fixed top-0 z-50 transition-all duration-500 ${isDark ? 'bg-gradient-to-r from-teal-700 to-blue-800 text-white' : 'bg-transparent text-gray-800'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-30">
        <Link to="/" className="h-full">
        <img
            src={logo}
            alt="Logo"
            className="h-full object-contain transition-transform duration-300 ease-in-out hover:scale-90 focus:scale-105"
          />
        </Link>
        <nav className="space-x-6 text-white font-medium">
          <Link to="/centrum-efektywnego-treningu/" className="hover:text-green-400 transition-colors duration-200">
            Start
          </Link>
          <Link to="/centrum-efektywnego-treningu/about" className="hover:text-green-400 transition-colors duration-200">
            O mnie
          </Link>
          <Link to="/centrum-efektywnego-treningu/offer" className="hover:text-green-400 transition-colors duration-200">
            Oferta
          </Link>
          <Link to="/centrum-efektywnego-treningu/contact" className="hover:text-green-400 transition-colors duration-200">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}