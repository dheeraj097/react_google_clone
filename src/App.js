import React, { useState } from 'react';

import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Routes } from './components/routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
