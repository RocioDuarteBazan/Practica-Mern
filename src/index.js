import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // los estilos son los unicos que se importan directamente
import App from './App'; //estoy importando otro componente

//la estructura de lo que se importa es la siguiente
//1ro escribo la palabra import 
//2do el nombre de lo que necesito
//3ro escribo la palabra FROM desde donde lo estoy importando
//4to escribo la ruta de lo que necesito

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//todo lo que necesite se importa y se exporta