import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Роутинг з хлібними крихтами</h1>
        {/* Додаємо навігаційні кнопки */}
        <nav>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
          </ul>
        </nav>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
