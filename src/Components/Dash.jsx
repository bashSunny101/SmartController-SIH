import React, { useEffect, useState } from "react";
import MainGrid from "./MainGrid";
import MapIcon from "@mui/icons-material/Map";
import Graph from "./Graph";
import Info from "./Info";
import { BACKEND_URI } from '../../env_variables';
import axios from "axios";


function convertDataProduction(weeklyData) {
  weeklyData = weeklyData.data;
  if (!Array.isArray(weeklyData)) {
      console.error('Expected an array for weeklyData');
      return [];
  }

  const categories = {
      "solar plants": [],
      "wind turbines plants": [],
      "utility": []
  };

  // Extracting data for each category
  weeklyData.forEach(item => {
      if (categories.hasOwnProperty(item.name) && Array.isArray(item.metrics)) {
          item.metrics.forEach(metric => {
              if (metric && metric.value !== undefined && metric.from) {
                  const date = new Date(metric.from).getDate();
                  categories[item.name].push({ date, value: metric.value });
              }
          });
      }
  });

  // Creating a map of dates to values for each category
  const dateMap = {};
  Object.keys(categories).forEach(category => {
      categories[category].forEach(data => {
          if (!dateMap[data.date]) {
              dateMap[data.date] = { solar: 0, wind: 0, utility: 0 };
          }
          if (category === "solar plants") dateMap[data.date].solar += data.value;
          else if (category === "wind turbines plants") dateMap[data.date].wind += data.value;
          else if (category === "utility") dateMap[data.date].utility += data.value;
      });
  });

  // Formatting the final array
  const finalArray = [['x', 'Solar', 'Wind', 'Utility']];
  for (const [date, values] of Object.entries(dateMap)) {
      finalArray.push([parseInt(date), values.solar, values.wind, values.utility]);
  }

  return finalArray.sort((a, b) => a[0] - b[0]); // Sort by date
}


function convertDataConsumption(weeklyData) {
  weeklyData = weeklyData.data;
  if (!Array.isArray(weeklyData)) {
      console.error('Expected an array for weeklyData');
      return [];
  }

  const categories = {
      "residential": [],
      "commercial": [],
      "industial": []
  };

  // Extracting data for each category
  weeklyData.forEach(item => {
      if (categories.hasOwnProperty(item.name) && Array.isArray(item.metrics)) {
          item.metrics.forEach(metric => {
              if (metric && metric.value !== undefined && metric.from) {
                  const date = new Date(metric.from).getDate();
                  categories[item.name].push({ date, value: metric.value });
              }
          });
      }
  });

  // Creating a map of dates to values for each category
  const dateMap = {};
  Object.keys(categories).forEach(category => {
      categories[category].forEach(data => {
          if (!dateMap[data.date]) {
              dateMap[data.date] = { solar: 0, wind: 0, utility: 0 };
          }
          if (category === "residential") dateMap[data.date].solar += data.value;
          else if (category === "industrial") dateMap[data.date].wind += data.value;
          else if (category === "commercial") dateMap[data.date].utility += data.value;
      });
  });

  // Formatting the final array
  const finalArray = [['x', 'Residential', 'Industrial', 'Commercial']];
  for (const [date, values] of Object.entries(dateMap)) {
      finalArray.push([parseInt(date), values.solar, values.wind, values.utility]);
  }

  return finalArray.sort((a, b) => a[0] - b[0]); // Sort by date
}

// Example usage
// const response = {
//   data: {
//       weekly_data: [ /* ... your data ... */ ]
//   }
// };

// const result = convertData(response.data.weekly_data);
// console.log(result);





const handleClick = (event) => {
  const activeButton = document.querySelector(".active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  event.target.classList.add("active");
};

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}




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
    const [co2Emissions, setCo2Emissions] = useState('');
    const [energyEfficiency, setEnergyEfficiency] = useState('');
    const [solarPlantsValue, setSolarPlantsValue] = useState('');
    const [windTurbinesValue, setWindTurbinesValue] = useState('');
    const [batteryValue, setBatteryValue] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        var response = await axios.get(`${BACKEND_URI}/dashboard/get_dashboard`);
        await sleep(2000); 
        response = response.data;
        let utility_status = response.utility_status.data;
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
        const co2Value = response.co2_emission.vslue; 
      const co2Unit = response.co2_emission.unit;
        const energyEff = response.energy_efficiency.value; 
      const energyEffunit = response.energy_efficiency.unit;
      const solarPlants = response.active_components.data.filter(obj => obj.typeName === "solar plants")[0].activeCount + " MWH";
      const windTurbines = response.active_components.data.filter(obj => obj.typeName === "wind turbines plants")[0].activeCount + " MWH";
      const battery = response.active_components.data.filter(obj => obj.typeName === "battery")[0].activeCount + " MWH";
      if (solarPlants) {
        setSolarPlantsValue(solarPlants);
      }
      if (windTurbines) {
        setWindTurbinesValue(windTurbines);
      }
      if (battery) {
        setBatteryValue(battery);
      }
      setCo2Emissions(`${co2Value} ${co2Unit}`);
      setEnergyEfficiency(`${energyEff} ${energyEffunit}`);

        if (utility_status === "inactive") {
          setUtility_Status("Operating in Island Mode");
        }
      } catch (error) {
      }
      const production = convertDataProduction(response.weekly_data);
      const consumption = convertDataConsumption(response.weekly_data);
      exports.production;
      exports.consumption;
      console.log("production: ",production);
      console.log("consumption: ",consumption);
    };
    

    fetchData();

    const interval = setInterval(fetchData, 30000); // 30000 milliseconds = 30 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="right-panel text-lg">
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
        <MainGrid title="CO2 Emissions" main={co2Emissions} />
          <MainGrid title="Energy Efficiency" main={energyEfficiency} />
          <div className="containers">
            <div className="heading">
              <p>Active Component Status</p>
            </div>
            <div className="row2 mar">
              <Info title="Nanogrids" main="3" />
              <Info title="Solar Plants" main={solarPlantsValue} />
              <Info title="Wind Turbines" main={windTurbinesValue} />
              <Info title="Battery Storage" main={batteryValue} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
