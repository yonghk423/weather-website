import React from "react";
import styled from "styled-components";
import { IweatherData } from "../App";
import Search from "../components/Search";
import WeatherInfo from "../components/WeatherInfo";
type Props = {
  weatherData: IweatherData | undefined;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Main: React.FC<Props> = ({ weatherData, onSubmit }) => {
  console.log(weatherData);
  return (
    <Container>
      <Search onSubmit={onSubmit} />
      <WeatherInfo weatherData={weatherData} />
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
