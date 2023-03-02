import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Nest as ProvidersNest } from './components/Healpers/Nest';
import { BrowserRouter as Router } from "react-router-dom";
import { appProviders } from "./utils/appProviders";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ProvidersNest element={appProviders}>
      <App />
    </ProvidersNest>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
