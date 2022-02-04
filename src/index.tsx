import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if ( !navigator.geolocation ) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
