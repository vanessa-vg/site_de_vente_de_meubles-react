import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Supprime les classes précédentes et ajoute la bonne classe au body
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(darkMode ? 'dark-mode' : 'light-mode');
  }, [darkMode]);

  return (
    <div className="App">
      <h1>Anciens meubles pour une nouvelle vie</h1>
     
     <button className='mode-toggle-btn' onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? ' 🌞 Mode clair' : ' 🌛 Mode sombre'}
     </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
