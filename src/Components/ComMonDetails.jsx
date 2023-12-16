import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const backendOptions = [
  "Solar Plant",
  "Wind Plant",
  "Hydroelectric Plant",
  "Utility Grid",
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function ComMonDetails() {
  return (
    <>
        <div className="border-gray-800 flex justify-center items-center h-screen">
          <div className="container">
            <div className="m-2 flex justify-between  text-2xl">
              Power Generation Components
              <div className="flex">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected="all">All</option>
                  {backendOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Last 24 hours</option>
                  <option value="CA">last 7 days</option>
                  <option value="FR">last 30 days</option>
                </select>
                ``
              </div>
              {/* dropdown */}
            </div>
            <div className="container ">
              <LineChart
                width={1270}
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
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
              <table className="min-w-full ">
                <thead>
                  <tr>
                    <th className="border p-3">Source Type</th>
                    <th className="border p-3">Energy Generated</th>
                    <th className="border p-3">Active Component Sites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">1</td>
                    <td className="border p-3">2</td>
                    <td className="border p-3">3</td>
                  </tr>
                </tbody>
              </table>
              {/* <ResponsiveConta iner width="100%" height="100%"> */}
              {/* </ResponsiveContainer> */}
            </div>
          </div>
          <div className="container">
            <div className="m-2 flex justify-between  text-2xl">
              Power Generation Components
            </div>
          </div>
      </div>
    </>
  );
}

export default ComMonDetails;
