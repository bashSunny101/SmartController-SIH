import React from "react";
import { Chrono } from "react-chrono";
import "./Timeline.css";
import svg from "../assets/logo.ico";
import Info from "./Info";

const data = [
  { title: "Solar Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
];

const value = 0;
const value1 = 10;

function Timeline() {
  return (
    <>
    <div class=" bg-gray-900 flex flex-col items-center w-screen h-screen justify-center">
    <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
    </h1>
    <p class="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
    </p>
</div>
    </>
    // <div className="vert">
    //   <div
    //     className="containers2 on"
    //   >
    //     <img src={svg} alt="image1" />
    //     <Info title="Utility Grid" main="15kWh" />
    //   </div>
    //   <div style={{ width: "40rem", height: "70vh" }}>
    //     <Chrono mode="VERTICAL_ALTERNATING" items={data}>
    //       <div>
    //         <div className="left-panel">
    //           <div className={`containers2 ${value > 0 ? "on" : ""}`}>
    //             <Info title="Utility Grid" main={`${value} kWh`} />
    //           </div>
    //           <div className={`containers2 ${value1 > 0 ? "on" : ""}`}>
    //             <Info title="Utility Grid" main={`${value1} kWh`} />
    //           </div>
    //           <div className={`containers2 ${value > 0 ? "on" : ""}`}>
    //             <Info title="Utility Grid" main={`${value} kWh`} />
    //           </div>
    //           <div className={`containers2 ${value > 0 ? "on" : ""}`}>
    //             <Info title="Utility Grid" main={`${value} kWh`} />
    //           </div>
    //           <div className={`containers2 ${value > 0 ? "on" : ""}`}>
    //             <Info title="Utility Grid" main={`${value} kWh`} />
    //           </div>
    //           <div className={`containers2 ${value > 0 ? "on" : ""}`}>
    //             <Info title="Utility Grid" main={`${value} kWh`} />
    //           </div>
    //           <div className={`containers2 ${value > 0 ? "on" : ""}`}>
    //             <Info title="Utility Grid" main={`${value} kWh`} />
    //           </div>
    //         </div>
    //       </div>
    //       <div>helo</div>
    //       <div>helo</div>
    //       <div>helo</div>
    //       <div>helo</div>
    //       <div>helo</div>
    //     </Chrono>
    //   </div>
    // </div>
  );
};

export default Timeline;
