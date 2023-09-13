import React from 'react';
import { useMusicContext } from './MusicContext';

const MusicPlayer = () => {
  const {
    isPlaying,
    currentTrackIndex,
    playlist,
    play,
    pause,
    nextTrack,
    previousTrack,
    audioRef,
  } = useMusicContext();

  const currentTrack = playlist[currentTrackIndex];

  const musicPlayerStyle = {
    backgroundColor: '#313232', 
    padding: '20px',
    color:'white',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    width: '40%',
    marginLeft: '30%',
    marginTop:'10px'
  };

  const buttonStyle = {
    backgroundColor: 'transparent', // Make the button background transparent
    cursor: 'pointer',
    color: 'white',
    borderRadius: '5px',
    margin: '0 10px', // Add a gap between buttons
    padding: '5px 10px', // Add padding to buttons for spacing
  };

  return (
    <div className="music-player" style={musicPlayerStyle}>
      <h2>Now Playing</h2>
      <p>{currentTrack ? currentTrack.title : 'No Track Selected'}</p>
      <div className="controls">
        <button onClick={() => previousTrack()} style={buttonStyle}>&#9668;</button> {/* Previous symbol */}
        {isPlaying ? (
          <button onClick={() => pause()} style={buttonStyle}>&#10074;&#10074;</button> 
        ) : (
          <button onClick={() => play(currentTrackIndex)} style={buttonStyle}>&#9658;</button> 
        )}
        <button onClick={() => nextTrack()} style={buttonStyle}>&#9658;</button> {/* Next symbol */}
      </div>
      <audio ref={audioRef}></audio>
    </div>
  );
};

export default MusicPlayer;
