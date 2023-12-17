import React from "react";

const Info = ({ title, main, color }) => {
  return (
    <>
      <div>
        <div className="heading">
          <p>{title}</p>
        </div>
        <div className="main" style={{color}}>{main}</div>
      </div>
    </>
  );
};

export default Info;
