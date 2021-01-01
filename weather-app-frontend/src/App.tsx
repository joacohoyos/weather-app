import React from 'react';
import WeatherPanel from './views/WeatherPanel'
import WeatherInfo from './views/WeatherInfo'

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <WeatherPanel />
      <WeatherInfo />
    </div>
  );
}

export default App;
