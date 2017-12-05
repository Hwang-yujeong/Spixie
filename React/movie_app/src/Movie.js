import React from 'react';
import PropTypes from 'prop-types'; // 부모컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없진지 확인가능
import LinesEllipsis from 'react-lines-ellipsis' // 데이터 내용 줄임 컴포넌트 데이터가 길면 ...으로 표시
import './Movie.css';

// function component (render function,will mount, did mount 다 필요 없이 오로지
// htmldmf return만 함 1개의 propos만 있고 1개의 html 만 있음)
function Movie({title, poster, genres, synopsis}){ // Movie에 상속받은 title, poster, genres, synopsis을 html로 출력  
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis // 데이터 줄임 컴포넌트
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...' // 변경가능
                    trimRight
                    basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){ // 이미지 보여주는 컴포넌트
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

//데이터 타임 유효성 검사
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}

export default Movie
