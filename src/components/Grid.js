import React, { useEffect, useState } from "react";
import "./Grid-style.css";
import { Link } from "react-router-dom";

const Grid = ({ devices, deck }) => {
  const dangerCompartments = devices.map(item => item.comp);
  const [highlightedId, setHighlightedId] = useState(dangerCompartments);

  useEffect(() => {
    setHighlightedId(dangerCompartments);
  }, []);

  // Define the number of boxes in each row for the ship-like shape
  const rowSizes = [14, 13, 11, 9, 7]; 

  let boxId = 1; // Track the box ID

  return (
    <div className="grid-container">
      {rowSizes.map((rowSize, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {Array.from({ length: rowSize }, (_, index) => {
            const currentBoxId = boxId++;
            return highlightedId.includes(currentBoxId) ? (
              <Link
                key={currentBoxId}
                style={{ textDecoration: "none" }}
                to={`deck/${deck}`}
              >
                <div
                  id={`box-${currentBoxId}`}
                  className={`box highlighted`}
                >
                  {currentBoxId}
                </div>
              </Link>
            ) : (
              <div
                key={currentBoxId}
                id={`box-${currentBoxId}`}
                className={`box`}
              >
                {currentBoxId}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
