import React from "react";
import { IweatherData } from "../App";
import useWeatherData from "../hooks/useWeatherData";

type Props = {
  weatherData: IweatherData | undefined;
};

const WeatherInfo: React.FC<Props> = ({ weatherData }) => {
  const [loading, error] = useWeatherData("");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
