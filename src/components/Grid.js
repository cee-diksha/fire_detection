import React, { useEffect, useState } from "react";
import "./Grid-style.css"; 
import { Link } from "react-router-dom";

const Grid = ({devices, deck}) => {
  const dangerCompartments = devices.map(item => item.comp)
  const [highlightedId, setHighlightedId] = useState(dangerCompartments); 
  console.log(dangerCompartments, "compartment check")

  useEffect(() => {
    setHighlightedId(dangerCompartments)
  }, [dangerCompartments])

  console.log(highlightedId, "compart")

  const boxes = Array.from({ length: 60 }, (_, index) => index + 1); 

  return (
    <div style={{marginRight: "14px"}}>
      <div className="grid-container">
        {boxes.map((boxId) => (
          <Link style={{textDecoration: "none"}} to={`deck/${deck}`}>
              <div
              key={boxId}
              id={`box-${boxId}`}
              className={`box ${highlightedId.includes(boxId) ? "highlighted" : ""}`}
            >
              {boxId}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grid;
