import React from 'react';
import WeatherPanel from './views/WeatherPanel'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <WeatherPanel />
      <div style={{width:"70%", height: "100vh", background: "#100F1D"}}>aa</div>
    </div>
  );
}

export default App;
