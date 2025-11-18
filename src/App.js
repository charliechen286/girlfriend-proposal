import React, { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  const renderPage = () => {
    switch(currentPage) {
      case 1: return <Page1 nextPage={nextPage} />;
      case 2: return <Page2 nextPage={nextPage} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />;
      case 3: return <Page3 nextPage={nextPage} />;
      case 4: return <Page4 nextPage={nextPage} />;
      case 5: return <Page5 />;
      default: return <Page1 nextPage={nextPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;