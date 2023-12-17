import React, { useEffect } from "react";
import PanelGrid from "./PanelGrid";
import "./DashBoard.css";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import Timeline from "./Timeline";
import Dash from "./Dash";
import { useState } from "react";
import ComponentMonitoring from "./ComponentMonitoring";
import PatchManagement from "./PatchManagement";
import HardwareManagement from "./HardwareManagement";
import SecurityCenter from "./SecurityCenter";
import GridMonitoring from "./GridMonitoring";

function Dashboard() {
  let compType = localStorage.getItem("prp") || "Dash";
  const [selectedComponent, setSelectedComponent] = useState(compType);

  useEffect(() => {
    if (selectedComponent) {
      localStorage.setItem("prp", selectedComponent);
    }
  }, [selectedComponent]);

  const handleToggleClick = (component) => {
    setSelectedComponent(component);
  };
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Dash":
        return <Dash />;
      case "GridMonitoring":
        return <GridMonitoring />;
      case "Component Monitoring":
        return <ComponentMonitoring />;
      case "Hardware Management":
        return <HardwareManagement />;
      case "Patch Management":
        return <PatchManagement />;
      case "Security Center":
        return <SecurityCenter />;
      default:
        return null;
    }
  };
  return (
    <>
      <div>
        <nav className=" back bg-white dark:bg-gray-900  z-20 top-0 sticky start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4 nav">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="src\assets\image (4).svg"
                className="h-10"
                alt="Vidyut Logo"
              />
            </a>
            <div className="admin">Admin</div>
          </div>
        </nav>
        <div className="display">
          <div className="left-panel">
            <button onClick={() => handleToggleClick("Dash")}>
              <PanelGrid
                icon={<AnalyticsIcon fontSize="large" />}
                prop="DashBoard"
              />
            </button>
            <button onClick={() => handleToggleClick("GridMonitoring")}>
              <PanelGrid
                icon={<AnalyticsIcon fontSize="large" />}
                prop="Grid Monitoring"
              />
            </button>
            <button onClick={() => handleToggleClick("Component Monitoring")}>
              <PanelGrid
                icon={<AnalyticsIcon fontSize="large" />}
                prop="Component Monitoring"
              />
            </button>
            <button onClick={() => handleToggleClick("Hardware Management")}>
              <PanelGrid
                icon={<AnalyticsIcon fontSize="large" />}
                prop="Hardware Management"
              />
            </button>
            <button onClick={() => handleToggleClick("Patch Management")}>
              <PanelGrid
                icon={<AnalyticsIcon fontSize="large" />}
                prop="Patch Management"
              />
            </button>
            <button onClick={() => handleToggleClick("Security Center")}>
              <PanelGrid
                icon={<AnalyticsIcon fontSize="large" />}
                prop="Security Center"
              />
            </button>
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
          </div>
          

          <div className="scroll">{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
