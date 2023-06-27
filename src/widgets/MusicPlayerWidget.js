import React, { useState, useEffect } from 'react';
import '../styles/musicplayer.css'

const MusicPlayerWidget = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const storedSong = localStorage.getItem('currentSong');
    const storedIsPlaying = localStorage.getItem('isPlaying');

    if (storedSong) {
      setCurrentSong(JSON.parse(storedSong));
    }

    if (storedIsPlaying) {
      setIsPlaying(JSON.parse(storedIsPlaying));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentSong', JSON.stringify(currentSong));
    localStorage.setItem('isPlaying', JSON.stringify(isPlaying));
  }, [currentSong, isPlaying]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setCurrentSong(file);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-widget">
      <input type="file" accept="audio/*" onChange={handleFileSelect} />
      {currentSong && (
        <div className="song-container">
          <h3>{currentSong.name}</h3>
          <audio src={URL.createObjectURL(currentSong)} controls autoPlay={isPlaying} />
          <button className={`play-button ${isPlaying ? 'paused' : ''}`} onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <span className="play-state">{isPlaying ? 'Playing' : 'Paused'}</span>
        </div>
      )}
    </div>
  );
};

export default MusicPlayerWidget;