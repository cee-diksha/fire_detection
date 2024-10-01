import React, { useEffect, useState } from "react";
import "./Grid-style.css";
import { Link } from "react-router-dom";

const Grid = ({ data, deckNo, param }) => {

  const dangerComp = data.danger || []; // Ensure it's always an array
  const normalComp = data.normal || [];
  const tempriseComp = data.temprise || [];
  const lowbatteryComp = data.lowbattery || [];
  const deletedComp = data.deleted || [];

  const [highlightedId, setHighlightedId] = useState({
    dangerComp: [],
    normalComp: [],
    tempriseComp: [],
    lowbatteryComp: [],
    deletedComp: []
  });

  useEffect(() => {
    setHighlightedId({ 
      dangerComp: dangerComp || [], 
      normalComp: normalComp || [], 
      tempriseComp: tempriseComp || [], 
      lowbatteryComp: lowbatteryComp || [],
      deletedComp: deletedComp || []
    });
  }, [dangerComp, normalComp, tempriseComp, lowbatteryComp, deletedComp]);

  const getBoxClass = (boxId) => {
    if (highlightedId.dangerComp.includes(boxId)) return "danger";
    if (highlightedId.tempriseComp.includes(boxId)) return "temprise";
    if (highlightedId.lowbatteryComp.includes(boxId)) return "lowbattery";
    if (highlightedId.deletedComp.includes(boxId)) return "deleted";
    if (highlightedId.normalComp.includes(boxId)) return "normal";
    return "box"; // default class
  };

  const boxes = Array.from({ length: 60 }, (_, index) => index + 1); 

  return (
    <div style={{ marginRight: "14px" }}>
      <div className="grid-container">
        {boxes.map((boxId) => {
          const boxClass = getBoxClass(boxId); 
          return (
            <Link
              key={boxId}
              style={{ textDecoration: "none" }}
              to={param === "dashboard" ? `deck/${deckNo}/${boxId}` : `/deck/${deckNo}/${boxId}`}
            >
              <div
                id={`box-${boxId}`}
                className={`box ${boxClass}`} 
              >
                {boxId}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
