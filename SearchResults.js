import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';


class searchResults extends React.Component {
 

   render(){
     return(
       <div className="searchResults">
  <h2>Results</h2>
  <TrackList track = {this.props.searchResults} />
</div>
     )
   }
 }
export default searchResults;
