import React, { useEffect } from "react";
import PanelGrid from "./PanelGrid";
import "./Dashboard.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BugReportIcon from "@mui/icons-material/BugReport";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import HardwareIcon from "@mui/icons-material/Hardware";
import SecurityIcon from "@mui/icons-material/Security";
import Timeline from "./Timeline";
import Dash from "./Dash";
import { useState } from "react";
import ComponentMonitoring from "./ComponentMonitoring";
import PatchManagement from "./PatchManagement";
import HardwareManagement from "./HardwareManagement";
import SecurityCenter from "./SecurityCenter";
import AdminPanel from "./AdminPanel";

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
      case "AdminPanel":
        return <AdminPanel />;
      case "Dash":
        return <Dash />;
      case "Timeline":
        return <Timeline />;
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
                src="src\assets\logo.svg"
                className="h-10"
                alt="Vidyut Logo"
              />
            </a>
            <div className="admin">Admin</div>
          </div>
        </nav>
        <div className="display ">
          <div className="left-panel">
            <button onClick={() => handleToggleClick("AdminPanel")}>
              <PanelGrid
                icon={<AdminPanelSettingsIcon fontSize="large" />}
                prop="Admin Panel"
              />
            </button>
            <button onClick={() => handleToggleClick("Dash")}>
              <PanelGrid
                icon={<DashboardIcon fontSize="large" />}
                prop="Dashboard"
              />
            </button>

            <button onClick={() => handleToggleClick("Timeline")}>
              <PanelGrid
                icon={<Grid4x4Icon fontSize="large" />}
                prop="Grid Utility"
              />
            </button>
            <button onClick={() => handleToggleClick("Component Monitoring")}>
              <PanelGrid
                icon={<BrandingWatermarkIcon fontSize="large" />}
                prop="Component Monitoring"
              />
            </button>
            <button onClick={() => handleToggleClick("Hardware Management")}>
              <PanelGrid
                icon={<HardwareIcon fontSize="large" />}
                prop="Hardware Management"
              />
            </button>
            <button onClick={() => handleToggleClick("Patch Management")}>
              <PanelGrid
                icon={<BugReportIcon fontSize="large" />}
                prop="Patch Management"
              />
            </button>
            <button onClick={() => handleToggleClick("Security Center")}>
              <PanelGrid
                icon={<SecurityIcon fontSize="large" />}
                prop="Security Center"
              />
            </button>
          </div>

          <div className="scroll">{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
