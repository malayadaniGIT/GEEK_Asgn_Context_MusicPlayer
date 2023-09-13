import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MusicProvider } from './Components/MusicContext';


ReactDOM.render(
  <React.StrictMode>
    <MusicProvider>
      <App />
    </MusicProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
