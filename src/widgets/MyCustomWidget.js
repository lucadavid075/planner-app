import React, { useState } from 'react';
import '../styles/musicplayer.css'

// MusicPlayerWidget component
const MusicPlayerWidget = () => {
  // State variables for the current song and playback status
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle file selection
  const handleFileSelect = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    // Update the current song state with the selected file
    setCurrentSong(file);
    // Start playing the song
    setIsPlaying(true);
  };

  // Function to toggle play/pause
  const togglePlay = () => {
    // Toggle the playback status
    setIsPlaying(!isPlaying);
  };

  // Render the MusicPlayerWidget component
  return (
    <div className="music-player-widget">
      {/* File input for song selection */}
      <input type="file" accept="audio/*" onChange={handleFileSelect} />
      {/* Display song information and controls if a song is selected */}
      {currentSong && (
        <div className="song-container">
          {/* Display the song name */}
          <h3>{currentSong.name}</h3>
          {/* Audio element for song playback */}
          <audio src={URL.createObjectURL(currentSong)} controls autoPlay={isPlaying} />
          {/* Button to toggle play/pause */}
          <button className={`play-button ${isPlaying ? 'stopped' : ''}`} onClick={togglePlay}>
            {/* Display "Stop" if playing, "Play" if stopped */}
            {isPlaying ? 'Stop' : 'Play'}
          </button>
          {/* Display the current play state */}
          <span className="play-state">{isPlaying ? 'Playing' : 'Stopped'}</span>
        </div>
      )}
    </div>
  );
};

export default MusicPlayerWidget;