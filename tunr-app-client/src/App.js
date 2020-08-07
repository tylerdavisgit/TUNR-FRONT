import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Playlist from "./Components/Playlist";
import FavoriteSongs from "./Components/FavoriteSongs";
import SongForm from "./Components/SongForm";

function App() {
  const [playlist, setPlaylist] = useState([]);

  const faves = playlist.filter((song) => song.Is_Fave == true);

  const [song, setSong] = useState(false);

  const [input, setInput] = useState({
    song_title: "",
    artist: "",
    duration: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `http://localhost:3000/playlists`,
      method: "POST",
      data: input,
    })
      .then((res) => {
        setSong(!song);
        setInput({
          song_title: "",
          artist: "",
          duration: "",
        });
      })
      .catch(console.error);
  };

  const toggleFav = async (song, e) => {
    const Is_Fave = song.Is_Fave;
    e.preventDefault();
    await axios.put(`http://localhost:3000/playlists/${song.id}`, {
      Is_Fave: !Is_Fave,
    });
    makeApiCall();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios({
      url: `http://localhost:3000/playlists/${e.target.value}`,
      method: "DELETE",
    });
    setSong(!song);
  };

  const makeApiCall = async () => {
    const res = await axios("http://localhost:3000/playlists");
    const sortedList = res.data.sort(function (a, b) {
      if (a.song_title.toLowerCase() < b.song_title.toLowerCase()) return -1;
      if (b.song_title.toLowerCase() < a.song_title.toLowerCase()) return 1;
      return 0;
    });
    setPlaylist(sortedList);
  };

  useEffect(() => {
    makeApiCall();
  }, [song]);

  return (
    <div className="App">
      <div id="header">
        <h1>TUNR.</h1>
        <h4>FOR ALL YOUR PLAYLIST NEEDS</h4>
      </div>
      <Playlist
        playlist={playlist}
        handleDelete={handleDelete}
        toggleFav={toggleFav}
      />
      <FavoriteSongs faves={faves} />
      <SongForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
    </div>
  );
}

export default App;
