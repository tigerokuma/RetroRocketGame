// src/MainPage.tsx
import React from 'react';
import './MainPage.css'; // Importing the styles
import Frogger from '../frogger/frogger';

const MainPage: React.FC = () => {
  return (
    <div className="main-container">
    
      <div className="black-square">
          {< Frogger />}
          </div>
    </div>
  );
};
export default MainPage;