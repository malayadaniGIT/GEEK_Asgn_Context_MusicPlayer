// src/App.js
import React from 'react';
import './App.css';
import { MusicProvider } from './Components/MusicContext';
import MusicPlayer from './Components/MusicPlayer';
import Playlist from './Components/Playlist';


function App() {
  return (
    <div className="App">
      <h1>My Music Player</h1>
      <MusicProvider>
        <Playlist />
        <MusicPlayer />
      </MusicProvider>
    </div>
  );
}

export default App;
