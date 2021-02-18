import React,{useState, useRef} from 'react';
//import styles
import './styles/app.scss';
//Adding components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
//Adding Data
import data from './data';

function App() {
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime:current,duration:duration })
  }
  const autoSkipHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[[currentIndex+1] % songs.length]);
    if(isPlaying) audioRef.current.play();  
  }
  return (
    <div className={`App ${libraryStatus ? "library-active-app" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying = {isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}  />
      <audio onEnded={autoSkipHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
