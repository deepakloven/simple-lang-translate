import React, { useState } from 'react';
import data from './components/Data.json';

function App() {
  const [selectedLanguageData, setSelectedLanguageData] = useState([]);

  const handleClick = (lang) => {
    const filteredData = data.filter(item => item.hasOwnProperty(lang));
    setSelectedLanguageData(filteredData);
  };

  return (
    <div className='container'>
      <button className='button bt1' onClick={() => handleClick('np')}>Nepali</button>
      <button className='button bt2' onClick={() => handleClick('ch')}>Chinese</button>
      <button className='button bt3' onClick={() => handleClick('en')}>English</button>

      {/* Render filtered data based on selected language */}
      {selectedLanguageData.map((item, i) => (
        <div className='border m-3' key={i}>
          {/* Render content based on selected language */}
          <h1>{item.np || item.ch || item.en}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
