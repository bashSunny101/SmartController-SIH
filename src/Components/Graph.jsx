import React from "react";
import MainGrid from "./MainGrid";
import "./Graph.css";
import Chart from 'react-google-charts'

export default function Graph({
  LineData,
  header,
  title1,
  title2,
  title3,
  pow31,
  pow32,
  pow33,
}) {

const LineChartOptions = {
    hAxis: {
        title: 'Date',
    },
    vAxis: {
        title: 'Power',
    },
    series: {
        1: { curveType: 'function' },
    },
}
  return (
    <>
      <div className="containers">
        <div className="heading">{header}</div>
        <div className="subj">
          <div className="side-status">
            <MainGrid title={title1} pow3={pow31} />
            <MainGrid title={title2} pow3={pow32} />
            <MainGrid title={title3} pow3={pow33} />
          </div>
          <div className="graph2">
                <Chart
                    width="100%"
                    height={'100%'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={LineData}
                    options={LineChartOptions}
                    rootProps={{ 'data-testid': '2' }}
                />
          </div>
        </div>
      </div>
    </>
  );
}
