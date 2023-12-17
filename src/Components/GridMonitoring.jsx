import React, { useState } from "react";
import { Chrono } from "react-chrono";
import svg from "../assets/logo.ico";
import Info from "./Info";
import "./GridMonitoring.css";

const GridMonitoring = () => {
  const [firstButtonState, setFirstButtonState] = useState(true);
  const [buttonStates, setButtonStates] = useState([true, true, true, true, true]);

  const handleFirstButtonClick = () => {
    setFirstButtonState((prevState) => !prevState);
  };

  const handleClick = (index) => {
    setButtonStates((prevStates) => {
      const newButtonStates = [...prevStates];
      newButtonStates[index] = !newButtonStates[index];
      return newButtonStates;
    });
  };

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

  return (
    <>
      <div className="vert">
        <div className={`containers2 ${firstButtonState ? "on" : ""}`}>
          <img src={svg} alt="image1" />
          <Info
            title="Utility Grid"
            main={firstButtonState ? "15kWh" : " 0 kWh"}
          />
          <button className="toggler">
            <label className="switch">
              <input type="checkbox" checked={firstButtonState} />
              <span
                className="slider round"
                onClick={handleFirstButtonClick}
              ></span>
            </label>
          </button>
        </div>
        <div style={{ width: "40rem", height: "70vh" }}>
          <Chrono mode="VERTICAL_ALTERNATING" items={data}>
            <div className="lefty">
              {buttonStates.map((item, index) => (
                <div key={index}>
                  <div
                    className={`containers2 ${buttonStates[index] ? "on" : ""}`}
                  >
                    <Info
                      title="Utility Grid"
                      main={buttonStates[index] ? "15kWh" : " 0 kWh"}
                    />
                    <button className="toggler">
                      <label className="switch">
                        <input type="checkbox" checked={buttonStates[index]} />
                        <span
                          className="slider round"
                          onClick={() => handleClick(index)}
                        ></span>
                      </label>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Chrono>
        </div>
      </div>
    </>
  );
};

export default GridMonitoring;
