import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

/**
 * 用法三
 * 重写console
 */
// if(process.env.NODE_ENV === 'production') {
//   console.log = function (){}
// }
console.warn('this is a react app')
console.error('Something error')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
