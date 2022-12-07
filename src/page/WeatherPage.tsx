import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Search from "../components/Search";
import WeatherInfo from "../components/WeatherInfo";
import useWeatherData from "../hooks/useWeatherData";

const Main = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const { loading, error, weatherData } = useWeatherData(searchData);

  const handleSearchWeather = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(e.target.value);
  }, []);

  const handleSearchWeatherSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearchData(inputSearchValue);
      setInputSearchValue("");
    },
    [inputSearchValue]
  );

  return (
    <Container>
      <Search
        handleSearchWeatherSubmit={handleSearchWeatherSubmit}
        handleSearchWeather={handleSearchWeather}
        inputSearchValue={inputSearchValue}
      />
      <WeatherInfo weatherData={weatherData} loading={loading} error={error} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  margin: 30px;
  background-color: rgba(225, 225, 225, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
