import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Quete1 from './Quete1';
import Quete2 from './Quete2';
import Quete3 from './Quete3';
import Quete4 from './Quete4';
import Quete5 from './Quete5';
import ExBouton from './ExBouton';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExBouton />
    {/* <Quete1 />
    <Quete2 />
    <Quete3 />
    <Quete4 />
    <Quete5 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
