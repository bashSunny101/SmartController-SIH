import React, { useEffect, useState } from "react";
import MainGrid from "./MainGrid";
import MapIcon from "@mui/icons-material/Map";
import Graph from "./Graph";
import Info from "./Info";
import { BACKEND_URI } from '../../env_variables';
import axios from "axios";


const handleClick = (event) => {
  const activeButton = document.querySelector(".active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  event.target.classList.add("active");
};


const Dash = () => {
  // ... (existing state variables)
  
    let [utility_status, setUtility_Status] = useState("");
    let [genPower, setGenPower] = useState("");
    let [conPower, setConPower] = useState("");
    let [battery, setBattery] = useState("");
    let [solar, setsolar] = useState("");
    let [ids, setIds] = useState("");
    let [firewall, setFirewall] = useState("");
    let [honeyTotal, setHoneyTotal] = useState("");
    let [honeyActive, setHoneyActive] = useState("");
    let [honeyDetect, setHoneyDetect] = useState("");
    let [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        var response = await axios.get(`${BACKEND_URI}/dashboard/get_dashboard`);
        response = response.data;
        const utility_status = response.utility_status.data;
        let inputTotalValue = response.grid_status.data.find(item => item._id === "input").totalValue;
        let outputTotalValue = response.grid_status.data.find(item => item._id === "output").totalValue;
        let batteryPer = response.grid_status.data.find(item => item._id === "storage").totalValue;
        let idsActive = response.ids;
        let fireActive = response.firewall;
        let honTotal = response.honeypot.total;
        let honActive = response.honeypot.active;
        let honDetect = response.honeypot.detections;
        let honeypott = `${honActive}/${honTotal}`;
        batteryPer = parseInt(batteryPer);
        batteryPer += "%";
        inputTotalValue += " KW";
        outputTotalValue += " KW";
        setGenPower(inputTotalValue);
        setConPower(outputTotalValue);
        setBattery(batteryPer);
        setIds(idsActive);
        setFirewall(fireActive);
        setHoneyTotal(honTotal);
        setHoneyActive(honActive);
        setHoneyDetect(honDetect);
        setHoneypot(honeypott)

        if (utility_status === "inactive") {
          setUtility_Status("Operating in Island Mode");
        }
        console.log(typeof (response.data.utility_status.data));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 30000); // 30000 milliseconds = 30 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="right-panel">
        <div className="right-grid">
          <MainGrid title="Utility Grid Status" main={utility_status}/>
          <MainGrid
            title="Grid Status"
            pow1={genPower}
            height="40px"
            pow2={conPower}
          />
          <MainGrid title="Battery SoC" perc={battery} />
          <MainGrid title="Grid Status" map={<MapIcon fontSize="large"  />} />
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
            header="Power Consumption"
            title1="Residential"
            title2="Commercial"
            title3="Industrial"
            pow31="40KW"
            pow32="30KW"
            pow33="20KW"
          />
        </div>
        <div className="row">
          <div className="first">
            <div className="row-2">
              <MainGrid title="IDS" main={ids} color="green" />
              <MainGrid title="Firewall" main={firewall} color="green" />
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
              <Info title="Status" main={honeypot} />
              <br />
              <Info title="Detection" main={honeyDetect} />
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
