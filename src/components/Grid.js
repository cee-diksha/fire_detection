import React, { useState } from "react";
import "./Grid-style.css"; 

const Grid = () => {
  const [highlightedId, setHighlightedId] = useState(null); 

  const boxes = Array.from({ length: 60 }, (_, index) => index + 1); 

  const handleHighlight = (id) => {
    setHighlightedId(id);
  };

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

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter box ID"
          min="1"
          max="60"
          onChange={(e) => handleHighlight(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Grid;
