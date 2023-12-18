import React from "react";
const alerts = [
  { type: "SQL Injection Attempt", severity: "High", count: 3 },
  { type: "Cross-Site Scripting (XSS)", severity: "Medium", count: 5 },
  { type: "Directory Traversal", severity: "Low", count: 2 },
  { type: "Brute Force Attack on Login", severity: "Critical", count: 7 },
  { type: "Failed Login Attempt", severity: "High", count: 5 },
];

const logs = [
  {
    timestamp: "2023-01-22 09:20 AM",
    userId: "admin",
    ip: "192.168.1.100",
    action: "Login Success",
  },
  {
    timestamp: "2023-01-22 09:30 AM",
    userId: "intruder",
    ip: "192.168.1.200",
    action: "Login Failure",
  },
  {
    timestamp: "2023-01-22 09:30 AM",
    userId: "intruder",
    ip: "192.168.1.200",
    action: "Login Failure",
  },
  {
    timestamp: "2023-01-22 09:30 AM",
    userId: "intruder",
    ip: "192.168.1.200",
    action: "Login Failure",
  },
  {
    timestamp: "2023-01-22 09:30 AM",
    userId: "intruder",
    ip: "192.168.1.200",
    action: "Login Failure",
  },
  // ... more logs
];

function SecurityCenter() {
  return (
    <>
    <div className="h-screen">

      <div className="container  text-lg ">
        <div className=" text-white p-2 rounded-lg flex justify-between items-center w-full  ">
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-xl font-medium">Security Alerts</span>
            <span className="text-xl font-bold">52</span>
          </div>
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-xl font-medium">Blocked Users</span>
            <span className="text-xl font-bold">52</span>
          </div>
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-xl font-medium">Surveillance Users</span>
            <span className="text-xl font-bold">65</span>
          </div>
          <div className="flex flex-col items-center border-r-2 px-2">
            <span className="text-xl font-medium">Honeypot Alerts</span>
            <span className="text-xl font-bold">32</span>
          </div>
          <div className="flex items-center ">
            <span className="text-xl font-medium text-green-400">●</span>
            <span className="text-xl font-medium ">Last 24 Hours</span>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-4 rounded-lg mt-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold  text-gray-500">
              Security Alerts
            </h1>
            <div className="relative">
              <select className="bg-gray-700 text-white appearance-none py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 text-sm">
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
                      {alert.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-sm py-2 px-4 border-2 rounded bg-gray-800 hover:bg-gray-600 focus:outline-none">
              View Detailed Security Alert Logs
            </button>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg mt-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-500">
              Honeypot Alerts
            </h1>
            <div className="relative">
              <select className="bg-gray-700 text-white appearance-none py-2 px-4 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 text-sm">
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
                {alerts.map((alert, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.type}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.severity}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {alert.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-sm py-2 px-4 border-2 rounded bg-gray-800 hover:bg-gray-600 focus:outline-none">
              View Detailed Security Alert Logs
            </button>
          </div>
        </div>

        <div className="">
          <div className="bg-gray-800 p-4 text-white mt-5">
            <h2 className="text-xl font-bold mb-4 text-gray-500">
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
                  {logs.map((log, index) => (
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
                  ))}
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
