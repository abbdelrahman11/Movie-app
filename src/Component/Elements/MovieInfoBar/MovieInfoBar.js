import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcTime } from "../../../help";
// import
import "./MovieInfoBar.css";
const MovieInfoBar = (props) => {
  return (
    <div className="MovieInfoBar">
      <div className="bar-content">
        <span className="icon">
          <FontAwesomeIcon className="the-icon" icon="stopwatch" size="2x" />
          <span className="parag-info">
            <span className="span-info">Running Time:</span>
            {calcTime(props.time)}
          </span>
        </span>
        <span className="icon">
          <FontAwesomeIcon className="the-icon" icon="money-bill" size="2x" />
          <span className="parag-info">
            <span className="span-info">Budget:</span>
            {props.budget}
          </span>
        </span>
        <span className="icon">
          <FontAwesomeIcon className="the-icon" icon="ticket-alt" size="2x" />
          <span className="parag-info">
            <span className="span-info">Revenue:</span>
            {props.revenue}
          </span>
        </span>
      </div>
    </div>
  );
};
export default MovieInfoBar;
