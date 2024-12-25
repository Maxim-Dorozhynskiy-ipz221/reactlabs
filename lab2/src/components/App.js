import React, { useState, useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Використовуємо кастомний хук для відстеження кліків поза елементом
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="App">
      <h1>Клікни поза списком, щоб закрити його</h1>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? 'Закрити список' : 'Відкрити список'}
      </button>
      
      {isOpen && (
        <div className="dropdown" ref={dropdownRef}>
          <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
