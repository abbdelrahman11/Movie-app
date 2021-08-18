import React from "react";
import { IMAGE_URL, POSTER_SIZE } from "../../../config";
// import FontAwesome from "react-fontawesome";
import MovieThump from "../MovieThump/MovieThump";
import "./MovieInfo.css";
const MovieInfo = (props) => {
  return (
    <div className="movie-info">
      <div className="M-info-content">
        <div className="M-info-thump">
          <MovieThump
            image={
              props.movie.poster_path
                ? `${IMAGE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                : "http://placehold.it/300/300"
            }
            clickable={false}
          />
        </div>
        <div className="M-info-text">
          <h1>
            <span className="span-info">Name: </span>
            {props.movie.title}
          </h1>
          <p className="parag-info">
            <span className="span-info">overview:</span>
            {props.movie.overview}
          </p>
          <p className="parag-info">
            <span className="span-info"> original Language:</span>"
            {props.movie.original_language}"
          </p>
          <p className="parag-info">
            <span className="span-info"> Release Date:</span>
            {props.movie.release_date}
          </p>
          <p className="parag-info">
            <span className="span-info"> IMDB RATING:</span>
            {props.movie.vote_average}
          </p>

          <div className="rating">
            <span className="span-info">Rate:</span>
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={props.movie.vote_average * 10}
            >
              bg
            </meter>
          </div>
          {props.directors.length > 1 ? (
            <span className="span-info">DIRECTORS:</span>
          ) : (
            <span className="span-info">DIRECTOR:</span>
          )}
          {props.directors.map((element, i) => {
            return (
              <p
                className="parag-info"
                style={{ display: "inline-block" }}
                key={i}
              >
                {element.name}
              </p>
            );
          })}
        </div>
        {/* <FontAwesome className="fa-film" name="film" size="5x" /> */}
      </div>
    </div>
  );
};
export default MovieInfo;
