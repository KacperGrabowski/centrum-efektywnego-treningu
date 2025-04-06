import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Offer from './pages/Offer.tsx';
import Contact from './pages/Contact.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow"> {}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}