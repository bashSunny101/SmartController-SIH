import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URI } from "../../env_variables";


function SecurityCenter() {
  const [securityAlerts, setSecurityAlerts] = useState(0);
  const [blockedUsers, setBlockedUsers] = useState(0);
  const [honeypotAlerts, setHoneypotAlerts] = useState(0);
  const [surveillanceUsers, setSurveillanceUserCount] = useState(0);
  const [timeframe, setTimeframe] = useState('day');
  const [timeframe1, setTimeframe1] = useState('day');
  const [alerts, setAlertData] = useState([]);
  const [alerts1, setAlertData1] = useState([]);

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
    console.log(event.target.value);
  };
  const handleTimeframeChange1 = (event) => {
    setTimeframe1(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(timeframe == "Last 24 Hours"){
          setTimeframe('day');
        }
        else if(timeframe == "Last 7 Days"){
          setTimeframe('week');
        }else if(timeframe == "Last 30 Days"){
          setTimeframe('month');
        }

        if(timeframe1 == "Last 24 Hours"){
          setTimeframe('day');
        }
        else if(timeframe1 == "Last 7 Days"){
          setTimeframe('week');
        }else if(timeframe1 == "Last 30 Days"){
          setTimeframe('month');
        }
        const response = await axios.get(`${BACKEND_URI}/alert/get_security_logs/${timeframe}`);
        const response2 = await axios.get(`${BACKEND_URI}/alert/latest_24_hours`);
        const response3 = await axios.get(`${BACKEND_URI}/alert/get_honeypot_logs/${timeframe1}`);
        const statdata=response2.data;
        const data = response.data;
        const data1 = response3.data;
        console.log(data);
        console.log(data1);

        setSecurityAlerts(statdata.totalSecurityAlerts);
        setHoneypotAlerts(statdata.totalHoneypotAlerts);
        setBlockedUsers(statdata.blockedUserCount);
        setSurveillanceUserCount(statdata.surveillanceUserCount);
        if (data && data.success){

          setAlertData(data.logs); // Update this based on your actual data structure
        }

        if(data1 && data1.success) {
          setAlertData1(data1.logs); // Update this based on your actual data structure
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [timeframe],[timeframe1]);

  return (
    <>
    <div className="h-screen">

      <div className="container  text-lg ">
        <div className=" text-white p-2 rounded-lg flex justify-between items-center w-full  ">
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-lg font-medium">Security Alerts</span>
            <span className="text-lg font-bold">{securityAlerts}</span>
          </div>
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-lg font-medium">Blocked Users</span>
            <span className="text-lg font-bold">{blockedUsers}</span>
          </div>
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-lg font-medium">Surveillance Users</span>
            <span className="text-lg font-bold">{surveillanceUsers}</span>
          </div>
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-lg font-medium">Honeypot Alerts</span>
            <span className="text-lg font-bold">{honeypotAlerts}</span>
          </div>
          <div className="flex items-center ">
            <span className="text-lg font-medium text-green-400">●</span>
            <span className="text-lg font-medium ">Last 24 Hours</span>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold  text-gray-500">
              Security Alerts
            </h1>
            <div className="relative">
              <select onChange={handleTimeframeChange}
        value={timeframe} className="bg-gray-700 text-white appearance-none py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 text-sm">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                {/* Add other options here */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548c0-0.258 0.104-0.516 0.292-0.705 0.376-0.376 1.039-0.376 1.415 0l3.292 3.292 3.292-3.292c0.376-0.376 1.039-0.376 1.415 0 0.189 0.189 0.292 0.447 0.292 0.705 0 0.259-0.104 0.517-0.292 0.706l-4 4c-0.376 0.376-1.039 0.376-1.415 0l-4-4c-0.189-0.189-0.292-0.447-0.292-0.706z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-md font-medium uppercase tracking-wider">
                    Vulnerability Type
                  </th>
                  <th className="px-4 py-2 text-left text-md font-medium uppercase tracking-wider">
                    Severity
                  </th>
                  <th className="px-4 py-2 text-left text-md font-medium uppercase tracking-wider">
                    Incident Count
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {alerts.map((alert, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.type}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.severity}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.totalAlerts}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <Link to="/DetailedSecurityLogs">
            <button  className="text-sm py-2 px-4 border-2 rounded bg-gray-800 hover:bg-gray-600 focus:outline-none" >
              View Detailed Security Alert Logs
            </button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg mt-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold text-gray-500">
              Honeypot Alerts
            </h1>
            <div className="relative">
              <select onChange={handleTimeframeChange1}
        value={timeframe1} className="bg-gray-700 text-white appearance-none py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 text-sm">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                {/* Add other options here */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548c0-0.258 0.104-0.516 0.292-0.705 0.376-0.376 1.039-0.376 1.415 0l3.292 3.292 3.292-3.292c0.376-0.376 1.039-0.376 1.415 0 0.189 0.189 0.292 0.447 0.292 0.705 0 0.259-0.104 0.517-0.292 0.706l-4 4c-0.376 0.376-1.039 0.376-1.415 0l-4-4c-0.189-0.189-0.292-0.447-0.292-0.706z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-md font-medium uppercase tracking-wider">
                    Honeypot Type
                  </th>
                  <th className="px-4 py-2 text-left text-md font-medium uppercase tracking-wider">
                    Severity
                  </th>
                  <th className="px-4 py-2 text-left text-md font-medium uppercase tracking-wider">
                    Incident Count
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {alerts1.map((alert, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.type}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.severity}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.totalAlerts}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
          <Link to="/DetailedHoneypotAlert">
            <button className="text-sm py-2 px-4 border-2 rounded bg-gray-800 hover:bg-gray-600 focus:outline-none">
              View Detailed Honeypot Alerts
            </button>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="bg-gray-800 p-4 text-white mt-5">
            <h2 className="text-lg font-bold mb-4 text-gray-500">
              Access Logs
            </h2>
            <div className="overflow-x-auto mt-3">
              <table className="min-w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left   uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="px-4 py-2 text-left   uppercase tracking-wider">
                      User ID
                    </th>
                    <th className="px-4 py-2 text-left   uppercase tracking-wider">
                      IP Address
                    </th>
                    <th className="px-4 py-2 text-left   uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {logs.map((log, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                      }`}
                    >
                      <td className="p-2">{log.timestamp}</td>
                      <td className="p-2">{log.userId}</td>
                      <td className="p-2">{log.ip}</td>
                      <td className="p-2">{log.action}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SecurityCenter;
