import React from 'react'

import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs,libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus? 'library-active' : ''}`}>
            <h2>Library</h2>
            <div className="song-library">
                {songs.map((song) => {
                    return(<LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} song={song} songs={songs} id={song.id} key={song.id} />)
                })}
            </div>
        </div>
    )
}

export default Library
