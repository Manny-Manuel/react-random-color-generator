// importing css elements from App directory
import './App.css';
// importing useState function to get Random Numbers
import React, { useState } from 'react';
// importing components
import Profile from './Profile';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  const randomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: hex,
        minHeight: '50.34vh',
        overflow: 'Hidden',
        zoom: 3,
      }}
    >
      {/* component profile imported between </> */}
      <Profile />
      <h1>{hex}</h1>
      <button onClick={randomizedHex}> Click me </button>
    </div>
  );
};

export default App;
