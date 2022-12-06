import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeatherApi from "./api/WeatherApi";
import Main from "./page/Main";

export interface IweatherData {
  main: string;
  icon: string;
  temp: string;
  temp_min: string;
  temp_max: string;
  name: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<IweatherData>();
  console.log(weatherData);
  useEffect(() => {
    const WeatherApiData = async () => {
      const data = await WeatherApi("seoul");
      setWeatherData(data);
    };
    WeatherApiData();
  }, []);
  return (
    <Layout>
      <Main weatherData={weatherData} />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  max-width: 36rem /* 576px */;
  margin-left: auto;
  margin-right: auto;
`;
