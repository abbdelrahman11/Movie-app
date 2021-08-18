import React from "react";
import "./FourColGrid.css";

const FourColGrid = (props) => {
  const renderElement = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <div key={i} className="grid-element">
          {element}
        </div>
      );
    });
    return gridElements;
  };
  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="grid-content">{renderElement()}</div>
    </div>
  );
};

export default FourColGrid;
