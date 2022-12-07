import React from "react";
import { IweatherData } from "../api/GetApi";
import styled from "styled-components";

type Props = {
  weatherData?: IweatherData;
  loading: boolean;
  error: string;
};

const WeatherInfo: React.FC<Props> = ({ loading, error, weatherData }) => {
  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;
  if (!weatherData) return <div>The data does not exist.😭 </div>;
  const { main, name, icon, temp, temp_max, temp_min } = weatherData;

  return (
    <Container>
      <DataName>{name}</DataName>
      <DataTemp>{temp}&deg;C</DataTemp>
      <DataMain>{main}</DataMain>
      <img alt='weather' className='weather-icon' src={`icons/${icon}.png`} />
      <DataMinMax>
        {temp_min} &deg;C | {temp_max} &deg;C
      </DataMinMax>
    </Container>
  );
};

export default WeatherInfo;

const Container = styled.ul`
  display: grid;
  justify-content: center;
  list-style: none;
  position: relative;
  top: 120px;
`;

const DataName = styled.li`
  font-size: 80px;
  position: relative;
`;
const DataTemp = styled.li`
  font-size: 40px;
`;
const DataMain = styled.li`
  font-size: 25px;
`;
const DataMinMax = styled.li`
  font-size: 30px;
  position: relative;
  left: -15px;
`;

const Loading = styled.h2`
  position: relative;
  top: 200px;
  left: 200px;
`;

const Error = styled.h2`
  position: relative;
  top: 200px;
  left: 50px;
`;
