import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ComMonDetails from "./ComMonDetails";
import { func } from "prop-types";

function ComponentMonitoring() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  


  return (
    <>
      <div className=" border-gray-800 flex-col justify-center items-center h-screen     ">
        <div  >
          <div className="flex-col container  bg-black">
            <div className="flex justify-between  text-2xl w-screen">
              <div className=" p-2  flex  justify-between ">
                <p className="font-bold text-yellow-500">Power Generation Components</p>
                <p className="text-green-500 text-2xl font-bold">Live</p>
              </div>
              
            </div>
            <table className="mt-4 text-2xl w-full">
              <thead>
                <tr>
                  <th className="border p-3">Source Type</th>
                  <th className="border p-3">Energy Generated</th>
                  <th className="border p-3">Active Component Sites</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Solar Plant</td>
                  <td className="border p-3">44</td>
                  <td className="border p-3">3</td>
                </tr>
                <tr>
                  <td className="border p-3">Wind Plant</td>
                  <td className="border p-3">24</td>
                  <td className="border p-3">3</td>
                </tr>
              </tbody>
            </table>
            <Link to="/ComMonDetails">
        <button className="mt-5 p-4 rounded-xl border-2 bg-slate-900 text-white">
          More Details
        </button>
      </Link>
          </div>
        </div>
        <div  className="mt-6">
          <div className="flex-col container  bg-black">
            <div className="flex justify-between  text-2xl w-screen">
              <div className=" p-2  flex justify-between  ">
                <p className="font-bold text-blue-500">Power Consumption Components</p>
                <p className="text-green-500 text-2xl font-bold">Live</p>
              </div>
                
            </div>
            <table className="mt-4 text-2xl w-full">
              <thead>
                <tr>
                  <th className="border p-3">Source Type</th>
                  <th className="border p-3">Energy Generated</th>
                  <th className="border p-3">Active Component Sites</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Solar Plant</td>
                  <td className="border p-3">44</td>
                  <td className="border p-3">3</td>
                </tr>
                <tr>
                  <td className="border p-3">Wind Plant</td>
                  <td className="border p-3">24</td>
                  <td className="border p-3">3</td>
                </tr>
              </tbody>
            </table>
            <Link to="/ComMonDetails2">
        <button className="mt-5 p-4 rounded-xl border-2 bg-slate-900 text-white">
          More Details
        </button>
      </Link>
          </div>
        </div>
        <div  className="mt-6">
          <div className="flex-col container  bg-black">
            <div className="flex justify-between  text-2xl w-screen">
              <div className=" p-2  flex justify-between  ">
                <p className="font-bold text-green-500">Energy Storage</p>
                <p className="text-green-500 text-2xl font-bold">Live</p>
              </div>
            </div>
            <table className="mt-4 text-2xl w-full">
              <thead>
                <tr>
                  <th className="border p-3">Source Type</th>
                  <th className="border p-3">Energy Generated</th>
                  <th className="border p-3">Active Component Sites</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Solar Plant</td>
                  <td className="border p-3">44</td>
                  <td className="border p-3">3</td>
                </tr>
                <tr>
                  <td className="border p-3">Wind Plant</td>
                  <td className="border p-3">24</td>
                  <td className="border p-3">3</td>
                </tr>
              </tbody>
            </table>
            <Link to="/ComMonDetails3">
        <button className="mt-5 p-4 rounded-xl border-2 bg-slate-900 text-white">
          More Details
        </button>
      </Link>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default ComponentMonitoring;
