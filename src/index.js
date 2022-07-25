import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// esses dois imports são gambiarras. fiquei com preguiça de arrumar a config
// do webpack pra importar direito os CSS's que não estiverem exclusivamente no `index.js`
// melhor negócio é usar outro bundler (por exemplo rollup ou parcel.js)
// q já vem com umas config extra
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
