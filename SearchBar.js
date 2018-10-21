import React from 'react';
import './SearchBar.css';


 class searchBar extends React.Component {
  

render(){
  return(
    <div className="searchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <a>SEARCH</a>
</div>
  )
}
}
export default searchBar;
