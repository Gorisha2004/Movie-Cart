import React from 'react';
import { connect } from 'react-redux';
import { data } from '../data';
import {addMovieToList,handleMovieSearch} from '../actions';

class Navbar extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      showSearchResults: false,
      searchText: ''
    };
  }

handleAddToMovies = (movie)=>{
  this.props.dispatch(addMovieToList(movie));
  this.setState({
    showSearchResults: false
  });
}

handleSearch = () => {
  const{ searchText } = this.state;

  this.props.dispatch(handleMovieSearch(searchText));
  this.setState({
    showSearchResults : false
  })
}

handleChange = (e) => {
  this.setState({
    searchText: e.target.value
  });
};

  render(){
    const { showSearchResults }=this.state;
    return (
      <div className="nav">
        <div>
          <input onChange={this.handleChange}/>
          <button id="search-btn">Search</button>

          {showSearchResults && 
          <div className="search-results">
            <div className="search-result">
              <img src={data[0].Poster} alt="search-pic" />

              <div className='movie-info'>
                <span>{data[0].Title}</span>
                <button onClick = {() => this.handleAddToMovies(data[0])}>
                  Add To Movies
                </button>
              </div>
            </ div>
          </ div>
          }
        </div>
      </div>
    );
  }
}   


export default Navbar;
