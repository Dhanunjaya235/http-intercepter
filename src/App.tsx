import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherForm from './components/display_weather';
import GlobalIntercepter from './components/using_global_intercepter';
function App() {
  return (
    <div className="App">
      <h1>
        HTTP Intercepter Practice
      </h1>
      <GlobalIntercepter/>
      <WeatherForm/>
    </div>
  );
}

export default App;
