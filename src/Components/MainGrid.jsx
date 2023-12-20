import React from "react";
import "./MainGrid.css";

export default function MainGrid({ title, main, perc, map, pow1, pow2, pow3, color }) {
  return (
    <>
      <div className="containers">
        <div className="heading">
          <p className=" text-gray-400 ">{title}</p>
        </div>
        <div className="main" style={{color}}>{main}</div>
        <div className="pow3">{pow3}</div>
        <div className="perc">{perc}</div>
        <div className="map">{map}</div>
        {pow1 ? (
          <div className="sub">
            <div>
              <div className="pow1">{pow1}</div>
              <div className="script1">Production</div>
            </div>
            <div className="verti" style={{ height: "4.5rem" }}></div>
            <div>
              <div className="pow2">{pow2}</div>
              <div className="script2">Consumption</div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
