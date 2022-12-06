import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeatherApi from "./api/WeatherApi";
import Main from "./page/Main";
function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const WeatherApiData = async () => {
      const data = await WeatherApi("seoul");
    };
    WeatherApiData();
  }, []);
  return (
    <Layout>
      <Main />
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
