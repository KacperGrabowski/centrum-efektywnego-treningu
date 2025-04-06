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
            <Route path="/centrum-efektywnego-treningu/" element={<Home />} />
            <Route path="/centrum-efektywnego-treningu/about" element={<About />} />
            <Route path="/centrum-efektywnego-treningu/offer" element={<Offer />} />
            <Route path="/centrum-efektywnego-treningu/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}