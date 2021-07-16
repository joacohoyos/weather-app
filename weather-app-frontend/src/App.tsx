import React from 'react';
import WeatherPanel from './containers/WeatherPanel'
import WeatherInfo from './containers/WeatherInfo'
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
