import React from "react";
import { IMAGE_URL, POSTER_SIZE } from "../../../config";
import "./Actor.css";
const Actor = (props) => {
  const POSTER_SIZE = "w300";
  return (
    <div className="actor">
      <img
        className="actor-img"
        src={
          props.actor.profile_path
            ? `${IMAGE_URL}${POSTER_SIZE}${props.actor.profile_path}`
            : "http://placehold.it/300/300"
        }
        alt="actorthump"
      />
      <span className="name">{props.actor.name}</span>
      <span className="name">{props.actor.character}</span>
    </div>
  );
};
export default Actor;
