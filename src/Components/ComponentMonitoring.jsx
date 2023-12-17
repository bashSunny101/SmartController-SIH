import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const data = [
  { sourceType: 'Solar Plant', energyGenerated: '44 kW', activeSites: 'Solar Plant A, Solar Plant B, Solar Plant C, Solar Plant D' },
  { sourceType: 'Wind Plant', energyGenerated: '24 kW', activeSites: 'Wind Plant A, Wind Plant B, Wind Plant C, Wind Plant D, Wind Plant E' },
  // ... add other plants here
];

function ComponentMonitoring() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <>
        <div className="bg-black text-white font-mono ">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl">Power Generation Components</h1>
        <div className="bg-green-500 rounded-full h-3 w-3"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Source Type</th>
              <th className="px-4 py-2">Energy Generated</th>
              <th className="px-4 py-2">Active Component Sites</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.sourceType}</td>
                <td className="border px-4 py-2">{item.energyGenerated}</td>
                <td className="border px-4 py-2">{item.activeSites}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4">
        <button className="border border-white py-2 px-4 hover:bg-white hover:text-black transition ease-in duration-200">
          More Details
        </button>
      </div>
    </div>
    </>
  );
}

export default ComponentMonitoring;
