import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount
  // Update componentWillReceiveProps() -> shouldComponentUpdate == true - > componentwillUpdate() -> render() -> componentDidUpdate
state={}
componentDidMount(){
  this._getMovies();
}

_renderMovise =() =>{
  const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
  return movies
}
_getMovies = async () => {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi = () => {
  return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
  .then(potato => potato.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))
}
  render() {
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
      {this.state.movies ? this._renderMovise() : 'Loading'}
      </div>
    );
  }
}

export default App;
