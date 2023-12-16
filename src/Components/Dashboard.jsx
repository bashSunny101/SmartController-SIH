import React from "react";
import PanelGrid from "./PanelGrid";
import "./DashBoard.css";
import AnalyticsIcon from "@mui/icons-material/Analytics";



const handleClick = (event) => {
  const activeButton = document.querySelector(".active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  event.target.classList.add("active");
  
};


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
            <div className="admin">Admin</div>
          </div>
        </nav>
        <div className="display">
          <div className="left-panel">
            
            <PanelGrid
              icon={<AnalyticsIcon fontSize="large" />}
              prop="DashboardMain"
              
            />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="GridMonitoring" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="ComponentMonitoring" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
          </div>
          <div className="right-panel">
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
