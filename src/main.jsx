import { createRoot } from 'react-dom/client'
import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import DemoPage from './pages/DemoPage'; 
import GamePage from './pages/GamePage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <div className="main-container pt-6">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/juega" element={<GamePage />} />
      </Routes>
    </div>
  </BrowserRouter>
)
