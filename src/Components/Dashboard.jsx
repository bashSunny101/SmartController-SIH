import React from "react";
import { Chart } from 'react-google-charts';


function Dashboard() {
  const temperatureData = [
    ['Year', 'Highest Temperature'],
    [2017, 32],
    [2018, 35],
    [2019, 31],
    [2020, 37],
    [2021, 30]];
  return (
    <>
      <div className="flex-col ">
          <div className="flex justify-between border-gray-700 border-b-2 p-2 ">
           <img src="src\assets\image (4).svg" alt="logo" className="h-10"/> 
           <div className=" border-2 rounded-xl text-white px-2 hover:bg-blue-600">Admin</div>
          </div>
          <div className="flex">
            <div className="flex-col fixed mt-8 ml-4  w-64">
              <div className="text-white border-2 rounded-lg p-3 m-2">Dashboard</div>
              <div className="text-white border-2 rounded-lg p-3 m-2">Dash</div>
              <div className="text-white border-2 rounded-lg p-3 m-2">Dashboard</div>
              <div className="text-white border-2 rounded-lg p-3 m-2">Dashboard</div>
              <div className="text-white border-2 rounded-lg p-3 m-2">Dashboard</div>
            </div>
            <div className="flex-grow">
              <div><Chart
                chartType="LineChart"
                data={temperatureData}
            /></div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Dashboard;
