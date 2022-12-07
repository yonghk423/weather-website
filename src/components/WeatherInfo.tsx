import React from "react";
import { IweatherData } from "../api/GetApi";
import styled from "styled-components";

type Props = {
  weatherData?: IweatherData;
  loading: boolean;
  error: string;
};

const WeatherInfo: React.FC<Props> = ({ loading, error, weatherData }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!weatherData) return <div>데이터가 존재하지 않습니다.😭 </div>;
  const { main, name, icon, temp, temp_max, temp_min } = weatherData;

  return (
    <Container>
      <li>{name}</li>
      <li>{temp}</li>
      <li>{main}</li>
      <img alt='weather' className='weather-icon' src={`icons/${icon}.png`} />
      <li>
        {temp_min} &deg;C | {temp_max} &deg;C
      </li>
    </Container>
  );
};

export default WeatherInfo;

const Container = styled.ul`
  display: grid;
  justify-content: center;
  list-style: none;
`;
