import React from 'react';
import logo from './credit.png';
import './App.css';
import logo2 from './card.jpg';
import logo3 from './mastercard.jpeg';

function App() {
  return (
    <div className="container">
  
  <h1>
    CREDIT CARD
  </h1>
  
  <img className="image" src={logo} alt="Logo" />
  <img className="image2" src={logo3} alt="Logo" />
      <h1 className="text1">
        6942
      </h1>
      <p>
        4568 5648 4568 4321
      </p>
      <h3>
        Card Holder
      </h3>
      
      
  
  </div>
    
  );
}

export default App;
