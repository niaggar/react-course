import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

// Componente principal a renderizar
import App from './App';



// Varible que renderiza html en sintaxis jsx
//  const welcome = <h1>hello world!</h1>;


// Renderizar
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
