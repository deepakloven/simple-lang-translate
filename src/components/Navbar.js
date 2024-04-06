import React, { useState } from 'react';
import languageData from '../components/Data.json'; 
import '../css/navbar.css';
// import '../components/data.xml'

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">Logo</div>
          <ul className="navbar-menu">
            <li className="navbar-item">Home</li>
            <li className="navbar-item dropdown">
              <span className="dropdown-toggle">Dropdown</span>
              <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={() => handleLanguageChange('np')}> Nepali</li>
                <li className="dropdown-item" onClick={() => handleLanguageChange('ch')}>Chinese</li>
                <li className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</li>
              </ul>
            </li>
            <li className="navbar-item">About</li>
            <li className="navbar-item">Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <div className='first-container'>
          <div className='left-container'>
          <h1>{languageData[0][selectedLanguage].greeting}</h1>
            <span>{languageData[0][selectedLanguage].name}</span>
            <p>{languageData[0][selectedLanguage].profession}</p>
            </div>
            <div className='right-container'>
            </div>

            <div className='mid-container'>
              <h2>{languageData[0][selectedLanguage].ab}</h2>
              <p>  {languageData[0][selectedLanguage].des}</p>
              {/* <h3>{languageData[0][selectedLanguage].dd}</h3> */}
            </div>


        </div>
      </div>
    </>
  );
}

export default Navbar;
