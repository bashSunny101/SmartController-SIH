import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function ComponentMonitoring() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <div className="">
        <div className="border-gray-800 flex-col justify-center items-center h-screen">
          <div className="container">
            <div className="flex justify-between m-2 text-2xl">
              Power Generation Components
              <button
                className={`px-4 py-1 ${
                  isToggled ? "bg-green-600" : "bg-red-500"
                } text-white rounded-md`}
                onClick={handleToggle}
              >
                {isToggled ? "Enabled" : "Disabled"}
              </button>
            </div>

            <div className="container">
              <table className="min-w-full">
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
            </div>
            <Link to="/ComMonDetails">
              <button className="mt-3  p-3 text-sm border-2 hover:bg-black rounded-2xl">
                More details
              </button>
            </Link>
          </div>
          <div className="container">
            <div className="flex justify-between m-2 text-2xl">
              Power Generation Components
              <button
                className={`px-4 py-1 ${
                  isToggled ? "bg-green-600" : "bg-red-500"
                } text-white rounded-md`}
                onClick={handleToggle}
              >
                {isToggled ? "Enabled" : "Disabled"}
              </button>
            </div>

            <div className="container">
              <table className="min-w-full">
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
            </div>
            <Link to="/ComMonDetails">
              <button className="mt-3  p-3 text-sm border-2 hover:bg-black rounded-2xl">
                More details
              </button>
            </Link>
          </div>
          <div className="container">
            <div className="flex justify-between m-2 text-2xl">
              Power Generation Components
              <button
                className={`px-4 py-1 ${
                  isToggled ? "bg-green-600" : "bg-red-500"
                } text-white rounded-md`}
                onClick={handleToggle}
              >
                {isToggled ? "Enabled" : "Disabled"}
              </button>
            </div>

            <div className="container">
              <table className="min-w-full">
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
            </div>
            <Link to="/ComMonDetails">
              <button className="mt-3  p-3 text-sm border-2 hover:bg-black rounded-2xl">
                More details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentMonitoring;
