import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const backendOptions = [
  "Solar Plant",
  "Wind Plant",
  "Hydroelectric Plant",
  "Utility Grid",
];

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  // Add more data as needed
];

function ComMonDetails(prop) {
  return (
    <div className="flex flex-col items-center justify-center mt-5 ">
      {/* First Container */}
      <div className="container m-2 bg-black">
        <div className="text-lg flex justify-between mb-4 font-bold text-green-500">
          Energy Storage
          <div className="flex">

          <div className="relative">
              <select className="bg-gray-700 text-white appearance-none py-2 px-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 text-sm">
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
            <div className="relative">
              <select className="bg-gray-700 text-white appearance-none py-2 px-6 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 text-sm">
              <option>All</option>
                <option>Solar Plant</option>
                <option>Wind Plant</option>
                <option>Hydroelectric Power Plant</option>
                <option>Biomas Power Plant</option>
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
        </div>
        
        <div className="container">
          <LineChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="" dataKey="uv" stroke="#82ca9d"activeDot={{ r: 8 }} />
          </LineChart>
          <table className="min-w-full mt-4 text-lg">
            <thead>
              <tr className="text-blue-500">
                <th className="border p-3">Source Type</th>
                <th className="border p-3">Energy Generated</th>
                <th className="border p-3">Active Component Sites</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy data for the first table */}
              <tr>
                <td className="border p-3">Solar Plant</td>
                <td className="border p-3">5000 MW</td>
                <td className="border p-3">15</td>
              </tr>
              <tr>
                <td className="border p-3">Wind Plant</td>
                <td className="border p-3">3200 MW</td>
                <td className="border p-3">12</td>
              </tr>
              <tr>
                <td className="border p-3">Hydroelectric Plant</td>
                <td className="border p-3">4300 MW</td>
                <td className="border p-3">8</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Second Container */}
      <div className="container mt-6 bg-black ">
        <div className="text-lg mb-4 font-bold ">
            Component List
        </div>
        <table className="min-w-full text-lg">
            <thead>
              <tr className="text-blue-500">
                <th className="border p-3">Component ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Type</th>
                <th className="border p-3">Maximum Capacity</th>
                <th className="border p-3">Location</th>
                <th className="border p-3">Addition Properties</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy data for the second table */}
              <tr>
                <td className="border p-3">SP101</td>
                <td className="border p-3">Sunshine Array</td>
                <td className="border p-3">Solar</td>
                <td className="border p-3">1000 MW</td>
                <td className="border p-3">California</td>
                <td className="border p-3">High efficiency</td>
              </tr>
              <tr>
                <td className="border p-3">WP202</td>
                <td className="border p-3">Breeze Turbine</td>
                <td className="border p-3">Wind</td>
                <td className="border p-3">500 MW</td>
                <td className="border p-3">Texas</td>
                <td className="border p-3">Low maintenance</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default ComMonDetails;
