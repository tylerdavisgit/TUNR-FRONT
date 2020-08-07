import React from "react";
import "./FavoriteSongs.scss";

export default function FavoriteSongs({ faves }) {
  return (
    <div className="fav-playlist-wrapper">
      <div id="fav-header">
        <h3 id="fav-song-header">Favorite Songs List</h3>
        <h4 id="fav-song-subheader">Song Artist Time</h4>
      </div>
      <ul className="fav-playlist">
        {faves.map((song) => {
          return (
            <li key={song.id} className="fav-song-wrapper">
              <div className="fav-song-line-1">
                <span className="fav-line1-left">
                  <p className="fav-song-title">{song.song_title}</p>
                </span>
                <span className="fav-line1-right">
                  <p className="fav-artist-name">{song.artist}</p>
                </span>
              </div>
              <p className="fav-duration-para">{song.duration}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
