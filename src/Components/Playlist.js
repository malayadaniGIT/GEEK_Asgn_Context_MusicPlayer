import React, { useState } from 'react';
import { useMusicContext } from './MusicContext';
import './Playlist.css'; // Import your CSS file for styling

const Playlist = () => {
  const { playlist, play, pause, currentTrackIndex, isPlaying } = useMusicContext();

  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const handleSongClick = (index) => {
    if (currentTrackIndex === index) {
      if (isPlaying) {
        pause();
      } else {
        play(index);
      }
    } else {
      play(index);
    }
    setIsSongPlaying(!isSongPlaying);
  };

  return (
    <div className="playlist">
      <h2>Playlist</h2>
        {playlist.map((track, index) => (
            <div className={`song ${currentTrackIndex === index ? 'active' : ''}`} key={index}>
              <button
                onClick={() => handleSongClick(index)}
                className={`play-button ${currentTrackIndex === index && isPlaying ? 'pause' : 'play'}`}
              >
                {currentTrackIndex === index && isPlaying ? '||' : '►'}
              </button>
              <span className="song-title">{track.title}</span>
            </div>
        ))}
    </div>
  );
};

export default Playlist;
