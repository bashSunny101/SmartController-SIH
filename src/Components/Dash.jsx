import React from "react";
import MainGrid from "./MainGrid";
import MapIcon from "@mui/icons-material/Map";
import Graph from "./Graph";
import Info from "./Info";

const handleClick = (event) => {
  const activeButton = document.querySelector(".active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  event.target.classList.add("active");
};

const Dash = () => {
  return (
    <>
      <div className="right-panel">
        <div className="right-grid">
          <MainGrid title="Utility Grid Status" main="Connected to the main Grid" />
          <MainGrid
            title="Grid Status"
            pow1="45 KW"
            height="40px"
            pow2="45 KW"
          />
          <MainGrid title="Battery SoC" perc="75%" />
          <MainGrid title="Grid Status" map={<MapIcon fontSize="large" />} />
        </div>
        <div className="graph">
          <Graph
            header="Power Generation"
            title1="Solar"
            title2="Wind"
            title3="Grid"
            pow31="40KW"
            pow32="30KW"
            pow33="20KW"
          />
          <Graph
            header="Power Generation"
            title1="Solar"
            title2="Wind"
            title3="Grid"
            pow31="40KW"
            pow32="30KW"
            pow33="20KW"
          />
        </div>
        <div className="row">
          <div className="first">
            <div className="row-2">
              <MainGrid title="IDS" main="Active" color="green" />
              <MainGrid title="Firewall" main="Active" color="green" />
            </div>
            <div className="containers">
              <div className="header">
                <p>Security Patch</p>
              </div>
              <div className="row2">
                <Info title="Status" main="Up to date" color="green" />
                <Info title="Last Update" main="12-12-2023" color="green" />
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="header">
              <p> Honeypot </p>
            </div>
            <div>
              <Info title="Status" main="3/3" />
              <br />
              <Info title="Detection" main="💀5" />
            </div>
          </div>
          <div className="containers">
            <div className="header">
              <p> Alerts </p>
            </div>
            <div className="btn-row">
              <button
                className="active"
                onClick={(event) => handleClick(event)}
              >
                Security
              </button>
              <button onClick={(event) => handleClick(event)}>
                System Health
              </button>
              <button onClick={(event) => handleClick(event)}>
                Honeypot Detection
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <MainGrid title="CO2 Emissions" main="90 kg/MWh" />
          <MainGrid title="Energy Efficiency" main="90%" />
          <div className="containers">
            <div className="heading">
              <p>Active Component Status</p>
            </div>
            <div className="row2 mar">
              <Info title="Nanogrids" main="3" />
              <Info title="Solar Plants" main="5" />
              <Info title="Wind Turbines" main="2" />
              <Info title="Battery Storage" main="4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
