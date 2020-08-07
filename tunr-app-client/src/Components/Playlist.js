import React from "react";
import "./Playlist.scss";
import axios from "axios";

export default function Playlist({ playlist, handleDelete, toggleFav }) {
  return (
    <>
      <div className="playlist-wrapper" key="list-wrap">
        <div id="playlist-header">
          <h2>PLAYLIST 1</h2>
        </div>
        <ul className="playlist">
          {playlist.map((song) => {
            return (
              <li key={song.id} className="song-wrapper">
                <div className="song-line-1">
                  <span className="line1-left">
                    <p className="song-title">{song.song_title}</p>
                  </span>
                  <span className="line1-right">
                    <p className="artist-name">{song.artist}</p>
                    <button onClick={(e) => toggleFav(song, e)}>FAV</button>
                    <button value={song.id} onClick={handleDelete}>
                      X
                    </button>
                  </span>
                </div>
                <p className="duration-para">{song.duration}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
