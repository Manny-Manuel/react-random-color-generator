import './App.css';
import React, { useState } from 'react';

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
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'Hidden',
        zoom: 3,
      }}
    >
      <h1>{hex}</h1>
      <button onClick={randomizedHex}> Randomized </button>
    </div>
  );
};

export default App;
