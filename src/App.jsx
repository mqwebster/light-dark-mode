import { useState } from 'react';
import Navbar from './components/Navbar';

import './App.css';
import Main from './components/Main';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggle() {
    console.log('Switched');
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div className='App'>
      <Navbar isDark={darkMode} toggle={toggle} />
      <Main isDark={darkMode} />
    </div>
  );
}
