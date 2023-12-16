import React from "react";
import { Chrono } from "react-chrono";
import "./Timeline.css";
import svg from "../assets/logo.ico";
import Info from "./Info";

const data = [
  {
    title: "Solar Plant",
    items: [
      { cardTitle: "Solar Plant A" },
      { cardTitle: "Solar Plant B" },
    ],
  },
  {
    title: "Wind Plant",
    items: [
      { cardTitle: "Solar Plant A",
      cardDetailedText: "7 kWh",
      },
      { cardTitle: "Solar Plant B" },
      { cardTitle: "Solar Plant B" },
    ],
    
  },
  {
    title: "Hydroelectric Power",
    items: [
      { cardTitle: "Solar Plant A",},
      { cardTitle: "Solar Plant B" },
    ],
  },
  {
    title: "Battery Saver",
    items: [
      { cardTitle: "Solar Plant A" },
      { cardTitle: "Solar Plant B" },
    ],
  },
  {
    title: "Battery Saver",
    items: [
      { cardTitle: "Solar Plant A" },
      { cardTitle: "Solar Plant B" },
    ],
  },
];

function Timeline() {
  return (
    <div className="vert">
      <div className="containers" style={{textAlign:"center", display:"flex", gap:"1em", justifyContent:"space-evenly"}}>
        <img src={svg} alt="image1" />
        <Info title="Utility Grid" main="15kWh"/>
      </div>
      <Chrono 
        scrollable={{ scrollbar: true }}
        items={data}
        mode="VERTICAL_ALTERNATING"
        slideShow
        slideItemDuration={1500}
        slideShowType="reveal"
        classNames={{
          card: "my-card",
          cardMedia: "my-card-media",
          cardSubTitle: "my-card-subtitle",
          cardText: "my-card-text",
          cardTitle: "my-card-title",
          controls: "my-controls",
          title: "my-title",
        }}
      >
        <div className="chrono-icons">
          <img src={svg} alt="image1" />
          <img src="image2.svg" alt="image2" />
        </div>
      </Chrono>
    </div>
  );
}

export default Timeline;
