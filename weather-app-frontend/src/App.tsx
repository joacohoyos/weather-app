import React from 'react';
import WeatherPanel from './views/WeatherPanel'

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <WeatherPanel />
      <div style={{flex: 3, height: "100vh", background: "#100F1D"}}>aa</div>
    </div>
  );
}

export default App;
