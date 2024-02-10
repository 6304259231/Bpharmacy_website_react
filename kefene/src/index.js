import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// ** Babel is a JavaScript compiler often used in React development to help developers write code using the latest ECMAScript features (ES6 and beyond) and JSX syntax, which are not natively supported in all browsers. Babel transpiles (converts) this modern JavaScript code into older versions of JavaScript that are widely supported in browsers, making it possible to use the latest language features without worrying about browser compatibility.
// or ot can compile jsx code in to javascript basic code!!! ***



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
