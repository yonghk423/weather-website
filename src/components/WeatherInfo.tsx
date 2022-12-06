import React from "react";
import { IweatherData } from "../App";
type Props = {
  weatherData: IweatherData | undefined;
};

const WeatherInfo: React.FC<Props> = ({ weatherData }) => {
  return (
    <ul>
      <li>{weatherData?.name}</li>
      <li>{weatherData?.temp}</li>
      <li>{weatherData?.main}</li>
      <img alt='weather' className='weather-icon' src={`icons/${weatherData?.icon}.png`} />
      <li>
        {weatherData?.temp_min} &deg;C | {weatherData?.temp_max} &deg;C
      </li>
    </ul>
  );
};

export default WeatherInfo;
