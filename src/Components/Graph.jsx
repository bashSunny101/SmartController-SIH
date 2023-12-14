import React from "react";
import MainGrid from "./MainGrid";
import "./Graph.css";

export default function Graph({
  data,
  header,
  title1,
  title2,
  title3,
  pow31,
  pow32,
  pow33,
}) {
  return (
    <>
      <div className="containers">
        <div className="heading">{header}</div>
        <div className="sub">
          <div className="side-status">
            <MainGrid title={title1} pow3={pow31} />
            <MainGrid title={title2} pow3={pow32} />
            <MainGrid title={title3} pow3={pow33} />
          </div>
          <div className="graph">Graph to be rendered</div>
        </div>
      </div>
    </>
  );
}
