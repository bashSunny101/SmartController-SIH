import React from "react";
import "./PanelGrid.css";

export default function PanelGrid({ icon, prop }) {
  return (
    <>
      <div className="container">
        <div className="flex">
          <div>{icon}</div>
          <div>
            <p>{prop}</p>
          </div>
        </div>
      </div>
    </>
  );
}
