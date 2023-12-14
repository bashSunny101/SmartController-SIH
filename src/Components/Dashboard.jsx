import React from "react";
import PanelGrid from "./PanelGrid";
import "./DashBoard.css";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MainGrid from "./MainGrid";
import MapIcon from "@mui/icons-material/Map";
import Graph from "./Graph";

function Dashboard() {
  return (
    <>
      <div>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4 nav">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="src\assets\image (4).svg"
                className="h-8"
                alt="Vidyut Logo"
              />
            </a>
          </div>
        </nav>
        <div className="display">
          <div className="left-panel">
            <PanelGrid
              icon={<AnalyticsIcon fontSize="large" />}
              prop="DashBoard"
            />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
          </div>
          <div className="right-panel">
            <div className="right-grid">
              <MainGrid title="Grid Status" main="Connected to the main Grid" />
              <MainGrid
                title="Grid Status"
                pow1="45 KW"
                height="40px"
                pow2="45 KW"
              />
              <MainGrid title="Battery SoC" perc="75%" />
              <MainGrid
                title="Grid Status"
                map={<MapIcon fontSize="large" />}
              />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
