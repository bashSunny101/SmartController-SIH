import React from "react";
import PanelGrid from "./PanelGrid";
import "./DashBoard.css";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MainGrid from "./MainGrid";
import MapIcon from "@mui/icons-material/Map";
import Graph from "./Graph";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [

    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Dashboard() {
  
  return (
    <>
      <div className="flex-col ">
          <header className="flex justify-between border-gray-700 border-b-2 p-2 sticky z-2 ">
           <img src="src\assets\image (4).svg" alt="logo" className="h-10"/> 
           <div className=" border-2 rounded-xl text-white px-2 hover:bg-blue-600">Admin</div>
          </header>
          <div>
     <div className='flex justify-end sm:flex-row flex-wrap w-full  h-full pt-4'>
      <div className="left pl-16 left-0  text-center w-1/3 fixed">
         <div className='border rounded-md w-36 h-12 mb-2 my-6 pt-2 text-white'>dashboard</div>
         <div className='border rounded-md w-36 h-12 mb-2 my-6 pt-2 text-white'>dashboard</div>
         <div className='border rounded-md w-36 h-12 mb-2 my-6 pt-2 text-white'>dashboard</div>
         <div className='border rounded-md w-36 h-12 mb-2 my-6 pt-2 text-white'>dashboard</div>
         <div className='border rounded-md w-36 h-12 mb-2 my-6 pt-2 text-white'>dashboard</div>
         <div className='border rounded-md w-36 h-12 mb-2 my-6 pt-2 text-white'>dashboard</div>
         <div className='border rounded-md w-36 h-12 mb-2 my-6 pt-2 text-white'>dashboard</div>
      </div>
      <div className=" w-8/12 overflow-y-auto ">
        <div className="upper flex flex-wrap gap-8 text-center">
        <div className=' border rounded-md w-44 h-20 mb-2 pt-6 text-white'>Grid Status</div>
         <div className='border rounded-md w-44 h-20 mb-2 pt-6 text-white'>Grid Status</div>
         <div className='border rounded-md w-44 h-20 mb-2 pt-6 text-white'>Battery SoC</div>
         <div className='border rounded-md w-44 h-20 mb-2 pt-6 text-white'>Geospatial Status</div>
        </div>
        <div className="mid flex flex-wrap  gap-8 mt-4 text-center">
        <div className=' border rounded-md ml-8 w-5/12 h-44 mb-2 pt-10 text-white'>

        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
         <div className='border rounded-md w-5/12 h-44 mb-2 pt-10 text-white'>
         <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
         </div>
        </div>


        <div className='below flex  items-center justify-center  flex-wrap'>
          <div className="w-1/2 gap-8  flex flex-wrap">
        <div className="below-left w-[50%]   gap-8 mt-4 text-center">
          <div className="w-full flex gap-2">
        <div className=' border rounded-md  w-1/2  h-32 mb-2 pt-8 text-white'>dash</div>
        <div className=' border rounded-md  w-1/2  h-32 mb-2 pt-8 text-white'>dash</div>
        </div>
         <div className='border rounded-md w-full h-32 mb-2 pt-10 text-white'>dashboard</div>
        </div>
        <div className="below-left w-[40%]  mt-4 text-center">
        <div className=' border rounded-md  w-5/6  h-full mb-2 pt-10 text-white'>dashboard</div>
         </div>
        </div>
        <div className="below-right w-1/2 flex flex-wrap  gap-4 mt-4 text-center">
        <div className=' border rounded-md  w-[90%]  h-32 mb-2 pt-10 text-white'>dashboard</div>
        <div className=' border rounded-md  w-[90%]  h-32 mb-2 pt-10 text-white'>dashboard</div>
        
        </div>

        </div>

      </div>
     </div>
    </div>
      <div>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4 nav">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="src\assets\image (4).svg"
                className="h-8"
                alt="Vidyut Logo"
              />
            </a>
          </div>
        </nav>
        <div className="display">
          <div className="left-panel">
            <PanelGrid
              icon={<AnalyticsIcon fontSize="large" />}
              prop="DashBoard"
            />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
            <PanelGrid icon={<AnalyticsIcon fontSize="large" />} prop="" />
          </div>
          <div className="right-panel">
            <div className="right-grid">
              <MainGrid title="Grid Status" main="Connected to the main Grid" />
              <MainGrid
                title="Grid Status"
                pow1="45 KW"
                height="40px"
                pow2="45 KW"
              />
              <MainGrid title="Battery SoC" perc="75%" />
              <MainGrid
                title="Grid Status"
                map={<MapIcon fontSize="large" />}
              />
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
                header="Power Generation"
                title1="Solar"
                title2="Wind"
                title3="Grid"
                pow31="40KW"
                pow32="30KW"
                pow33="20KW"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
