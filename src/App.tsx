import React, { useState, useRef, useCallback } from "react";
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
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const { weatherData } = useWeatherData(searchData);
  const cityInput = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearchData(inputValue);
      setInputValue("");
      if (cityInput.current) {
        cityInput.current.focus();
      }
    },
    [inputValue]
  );
  return (
    <Layout>
      <Main
        weatherData={weatherData}
        onSubmit={onSubmit}
        onChange={onChange}
        inputValue={inputValue}
        cityInput={cityInput}
      />
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
