import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WordProvider } from './context/WordContext'
ReactDOM.render(
  <React.StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
