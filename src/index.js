import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_UQMJ17GuoLfHJMhXFWAN5htSP7HJYro",
  authDomain: "play4less-68ee1.firebaseapp.com",
  projectId: "play4less-68ee1",
  storageBucket: "play4less-68ee1.appspot.com",
  messagingSenderId: "24019891505",
  appId: "1:24019891505:web:8c525fd8aca4b35804ac10"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);