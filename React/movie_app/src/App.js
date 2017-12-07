import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // lifeCycle(생명주기) componentWillMount 진행시 api에 작업요청 - > render() 해당작업수행  -> componentDidMount 완료되면 데이터관련작업
  // Render(출력): componentWillMount() -> render() -> componentDidMount
  // Update(데이터갱신): componentWillReceiveProps() -> shouldComponentUpdate == true - > componentwillUpdate() -> render() -> componentDidUpdate
state={}
componentDidMount(){
  this._getMovies(); // 영화업데이트를 작업수행
}

_renderMovise =() =>{ // 화살표 함수 function() ES6 => 대체 / movie데이터 출력 함수
  const movies = this.state.movies.map(movie => { // movies라는 변수에 영화 데이터를 array.map 를 통해 데이터 정렬후 저장
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
_getMovies = async () => { // 영화데이터 업데이트 함수
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi = () => { //토랜스 영화 api 데이터를 받음
  return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
  .then(potato => potato.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))
}
  render() { // 출력 아래 영화 데이터가 있으면 render movies 출력 만약 데이터가 없으면 Loading 출력
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
      {this.state.movies ? this._renderMovise() : 'Loading'} 
      </div>
    );
  }
}

export default App;
