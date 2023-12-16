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

function ComMonDetails() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      {/* First Container */}
      <div className="container m-2">
        <div className="text-3xl mb-4 font-bold ">
          Power Generation Components
        </div>
        <div className="flex justify-between text-2xl">
          <div className="flex">
            {/* Select components */}
          </div>
        </div>
        <div className="container">
          <LineChart
            width={1400}
            height={500}
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
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          <table className="min-w-full">
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
      <div className="container mt-6 ">
        <div className="text-3xl mb-4 font-bold ">
            Component List
        </div>
        <table className="min-w-full">
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
