import React, { createContext, useContext, useRef, useState } from 'react';

const MusicContext = createContext();

export const useMusicContext = () => {
  return useContext(MusicContext);
};

const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio());
  const playlist = [
    {
      title: 'Raabta',
      url: 'https://pwdown.info/113604/Raabta.mp3',
    },
    {
      title: 'Babli - Young Galib',
      url: 'https://pwdown.info/113604/Babli%20-%20Young%20Galib.mp3',
    },
    {
      title: 'Simroon Tera Naam',
      url: 'https://pwdown.info/113777/Simroon%20Tera%20Naam.mp3',
    },
  ];

  const play = (trackIndex) => {
    if (trackIndex >= 0 && trackIndex < playlist.length) {
      setCurrentTrackIndex(trackIndex);
      audioRef.current.src = playlist[trackIndex].url;
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
      setIsPlaying(true);
    }
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    play(nextIndex);
  };

  const previousTrack = () => {
    const prevIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    play(prevIndex);
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentTrackIndex,
        playlist,
        play,
        pause,
        nextTrack,
        previousTrack,
        audioRef,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicProvider };
