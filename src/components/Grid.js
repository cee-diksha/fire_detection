import React, { useEffect, useState } from "react";
import "./Grid-style.css";
import { Link } from "react-router-dom";

const Grid = ({ data, deckNo }) => {
  console.log(data, "data check");

  // Assuming data.danger, data.normal, etc., are arrays of compartment IDs
  const dangerComp = data.danger;
  const normalComp = data.normal;
  const tempriseComp = data.temprise;
  const lowbatteryComp = data.lowbattery;

  // no need to wrap these in an object inside useState
  const [highlightedId, setHighlightedId] = useState({
    dangerComp: [],
    normalComp: [],
    tempriseComp: [],
    lowbatteryComp: []
  });

  useEffect(() => {
    setHighlightedId({ dangerComp, normalComp, tempriseComp, lowbatteryComp });
  }, [dangerComp, normalComp, tempriseComp, lowbatteryComp]);

  const getBoxClass = (boxId) => {
    console.log(dangerComp, normalComp, tempriseComp, lowbatteryComp, "dangerComp, normalComp, tempriseComp, lowbatteryComp")
    if (highlightedId.dangerComp.includes(boxId)) return "danger";
    else if (highlightedId.tempriseComp.includes(boxId)) return "temprise";
    else if (highlightedId.lowbatteryComp.includes(boxId)) return "lowbattery";
    else if (highlightedId.normalComp.includes(boxId)) {
      console.log(highlightedId, boxId, "checking color")
      return "normal"
    }
    else return "box"; // default class
  };

  // no. of boxes in each row for the ship-like shape
  // const rowSizes = [14, 13, 11, 9, 7];
  const boxes = Array.from({ length: 60 }, (_, index) => index + 1); 

  console.log(highlightedId, "highlightedId")

  return (
    <div style={{ marginRight: "14px" }}>
      <div className="grid-container">
        {boxes.map((boxId) => {
          const boxClass = getBoxClass(boxId); // Use boxId here instead of currentBoxId
          return (
            <Link
              key={boxId}
              style={{ textDecoration: "none" }}
              to={`deck/${deckNo}`}
            >
              <div
                id={`box-${boxId}`}
                className={`box ${boxClass}`} // Apply the class dynamically
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
