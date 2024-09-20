import React, { useEffect, useState } from "react";
import "./Grid-style.css"; 

const Grid = ({compartment}) => {
  const [highlightedId, setHighlightedId] = useState(null); 

  useEffect(() => {
    setHighlightedId(compartment)
  }, [compartment])

  const boxes = Array.from({ length: 60 }, (_, index) => index + 1); 

  return (
    <div>
      <div className="grid-container">
        {boxes.map((boxId) => (
          <div
            key={boxId}
            id={`box-${boxId}`}
            className={`box ${highlightedId === boxId ? "highlighted" : ""}`}
          >
            {boxId}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
