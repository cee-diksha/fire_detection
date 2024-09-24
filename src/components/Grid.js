import React, { useEffect, useState } from "react";
import "./Grid-style.css"; 
import { Link } from "react-router-dom";

const Grid = ({devices, deck}) => {
  const dangerCompartments = devices.map(item => item.comp)
  const [highlightedId, setHighlightedId] = useState(dangerCompartments); 
  console.log(dangerCompartments, "compartment check", devices)

  useEffect(() => {
    setHighlightedId(dangerCompartments)
  }, [])

  console.log(highlightedId, "compart")

  const boxes = Array.from({ length: 60 }, (_, index) => index + 1); 

  return (
    <div style={{marginRight: "14px"}}>
      <div className="grid-container">
        {boxes.map((boxId) => (
         highlightedId.includes(boxId) ? <Link style={{textDecoration: "none"}} to={`deck/${deck}`}>
              <div
              key={boxId}
              id={`box-${boxId}`}
              className={`box ${highlightedId.includes(boxId) ? "highlighted" : ""}`}
            >
              {boxId}
            </div>
          </Link> : <div
          key={boxId}
          id={`box-${boxId}`}
          style={{cursor: "not-allowed"}}
          className={`box ${highlightedId.includes(boxId) ? "highlighted" : ""}`}
        >
          {boxId}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
