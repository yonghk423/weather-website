import { useState, useEffect } from "react";
import WeatherApi from "../api/WeatherApi";
import { IweatherData } from "../App";

type ReturnTypes = [boolean, undefined, IweatherData | undefined];

const useWeatherData = (): ReturnTypes => {
  const [weatherData, setWeatherData] = useState<IweatherData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  console.log(weatherData);

  useEffect(() => {
    setLoading(false);
    setError(undefined);
    const WeatherApiData = async () => {
      const data = await WeatherApi("seoul");
      setWeatherData(data);
    };
    WeatherApiData();
  }, []);

  return [loading, error, weatherData];
};

export default useWeatherData;
