import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWeatherData from "./hooks/useWeatherData";
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
  const [loading, error, weatherData] = useWeatherData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
