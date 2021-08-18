import React from "react";
import "./LoadMore.css";
const LoadMore = (props) => {
  return (
    <div className="loadMore" onClick={props.onclick}>
      <button className="btn">Load More</button>{" "}
    </div>
  );
};

export default LoadMore;
