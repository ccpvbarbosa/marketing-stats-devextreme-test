import React, { useState } from "react";
import "./styles/alts-exposure.css";
import Chart, {
  CommonSeriesSettings,
  Series,
  SeriesTemplate,
  Label,
  Legend,
  ValueAxis,
  Tick,
  Tooltip,
  ArgumentAxis
} from "devextreme-react/chart";
import { data, range_AnnualizedReturn, range_Volatility } from "./data";
import service from "./devExtremeData.js";

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();

const { portfolios, years } = data;

const sampleData = years.map((y) => ({
  year: `${y.year} Years`,
  val: y.volatility[3]
}));
const chartDataSource = range_Volatility.map((v, i) => {
  return {
    volatility: v,
    return: range_AnnualizedReturn[i],
    val: range_Volatility[i]
  };
});
const yearSources = [
  { name: "5 Years", value: "year", color: "3072bb" },
  { name: "3 Years", value: "year", color: "005160" },
  { name: "2 Years", value: "year", color: "000086" }
];

const chartingData = [];
portfolios.forEach((p, i_p) => {
  years.forEach((y, i_y) => {
    const obj = {
      // name: `${y.year} Year`,
      // value: `${y.year} Year`,
      year: y.year,
      portfolioId: i_p,
      return: y.returns[i_p],
      volatility: y.volatility[i_p]
    };
    chartingData.push(obj);
  });
});
chartingData.sort((a, b) => a.year - b.year);
console.table(chartingData);

export const AlternativeAllocationChart = (props) => {
  const initialState = [
    ...chartingData
    // { year: 2, portfolioId: 2, return: 9.08, volatility: 9.58 },
    // { year: 3, portfolioId: 3, return: 9.08, volatility: 9.58 },
    // { year: 5, portfolioId: 2, return: 9.08, volatility: 9.58 }
  ];
  const [dataSource, setDataSource] = useState(initialState);
  const [type, setType] = useState("line");
  return (
    <>
      <h1>Testing below</h1>
      <Chart dataSource={dataSource} title="Global Macro Stats">
        <CommonSeriesSettings argumentField="volatility" type="line" />
        <ArgumentAxis title="Volatility" />
        <ValueAxis title="Annualized Return" />
        <Legend verticalAlignment="top" />
        {/* Can't align center... */}
        {yearSources.map((src, i) => (
          <Series
            key={i}
            // type="line"
            // dashStyle={"longDash"}
            name={src.name}
            valueField={src.value}
            color={`#${src.color}`}
          />
        ))}
        <Tooltip enabled={true} />
        {/* <Series name="Volatility" argumentField="volatility" /> */}
        {/* <Series name="Return" argumentField="return"><Label visible={true} /></Series> */}
        {/* <ValueAxis>
          <Tick visible={false} />
          <Label visible={false} />
        </ValueAxis> */}
      </Chart>
      {/* <div className="line-container">
        <div className="line"></div>
        {portfolios.map((port) => {
          return (
            <div className="line-dot">
              <p>{port.alts} Alts</p>
              <p>{port.bonds} Bonds</p>
              <p>{port.stocks} Stocks</p>
            </div>
          );
        })}
      </div> */}
      <h1>Devextreme code below</h1>
      <Chart
        dataSource={countriesInfo}
        title="DevExtreme Example"
        palette="Violet"
      >
        <CommonSeriesSettings argumentField="country" type={type} />
        {energySources.map((item) => (
          <Series key={item.value} valueField={item.value} name={item.value} />
        ))}
      </Chart>
    </>
  );
};
