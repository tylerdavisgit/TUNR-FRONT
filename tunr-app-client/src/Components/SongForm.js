import React from "react";
import "./SongForm.scss";
export default function SongForm({ handleChange, handleSubmit, input }) {
  return (
    <div id="form-wrapper">
      <h3 id="form-header">ADD A NEW SONG</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="Add Song Title"
          name="song_title"
          value={input.song_title}
          onChange={handleChange}
        />
        <label>Artist</label>
        <input
          placeholder="Add Song Artist"
          name="artist"
          value={input.artist}
          onChange={handleChange}
        />
        <label>Time</label>
        <input
          placeholder="Add Song Duration"
          name="duration"
          value={input.duration}
          onChange={handleChange}
        />
        <button id="form-submit" type="submit">
          ADD NEW SONG
        </button>
      </form>
    </div>
  );
}
