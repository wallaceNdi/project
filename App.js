import React, { Component } from 'react';
import './App.css';
import searchResults from '../SearchResults/SearchResults';
import searchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';

class App extends Component {
constructor(props){
  super(props);

  this.state ={
    searchResults:[
      {"name": "name1",
      "artist": "artist1",
      "album": "album1",
      "id" : 1}
    ],
    playlistTitle: "title",
    playlistTracks: [
           {
             "name": "name1",
             "artist": "artist1",
             "album": "album1",
             "id" : 1
           },
           {
             "name": "name2",
             "artist": "artist2",
             "album": "album2",
             "id" : 2
           },
   ]

  }
}
addTrack(track){
  if (this.state.playlistTracks.find(savedTrack =>
    savedTrack.id === track.id)) {
  return;
}
}

  render(){
    return (
      <div>
<h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <searchBar />
    <div className="App-playlist">
      <searchResults searchResults = {this.state.searchResults}/>
      <Playlist playlistName ={this.state.playlistName} playlistTracks =
      {this.state.playlistTracks}/>
    </div>
  </div>
</div>

    );
  }
}

export default App;
