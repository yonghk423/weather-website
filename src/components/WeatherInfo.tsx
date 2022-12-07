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
  if (error) return <p>{error}</p>;
  if (!weatherData) return <div>데이터가 존재하지 않습니다.😭 </div>;
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
  /* border: 1px solid black; */
  position: relative;
  top: 150px;
`;

const DataName = styled.li`
  font-size: 80px;
`;
const DataTemp = styled.li`
  font-size: 40px;
`;
const DataMain = styled.li`
  font-size: 20px;
`;
const DataMinMax = styled.li`
  font-size: 30px;
`;

const Loading = styled.p``;
