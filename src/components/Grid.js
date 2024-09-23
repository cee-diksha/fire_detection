import React, { useEffect, useState } from "react";
import "./Grid-style.css"; 

const Grid = ({compartment}) => {
  const [highlightedId, setHighlightedId] = useState(compartment); 
  console.log(compartment, "compartment check")

  useEffect(() => {
    setHighlightedId(compartment)
  }, [compartment])

  console.log(highlightedId, "compart")

  const boxes = Array.from({ length: 60 }, (_, index) => index + 1); 

  return (
    <div style={{marginRight: "14px"}}>
      <div className="grid-container">
        {boxes.map((boxId) => (
          <div
            key={boxId}
            id={`box-${boxId}`}
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
