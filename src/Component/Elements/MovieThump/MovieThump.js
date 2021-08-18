import React from "react";
import { Link } from "react-router-dom";
import "./MovieThump.css";
const MovieThump = (props) => {
  return (
    <div className="moviethump">
      {props.clickable ? (
        <Link
          to={{
            pathname: `/${props.movieId}`,
            movieName: `${props.movieName}`,
          }}
        >
          <img className="content-img" src={props.image} alt="moviethumb" />
        </Link>
      ) : (
        <img src={props.image} alt="moviethumb" />
      )}
    </div>
  );
};

export default MovieThump;
