import { useState, useEffect } from "react";
import GetApi from "../api/GetApi";
import { IweatherData } from "../App";

type ReturnTypes = [boolean, undefined, IweatherData | undefined];

const useWeatherData = (searchData: string): ReturnTypes => {
  const [weatherData, setWeatherData] = useState<IweatherData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(false);
    setError(undefined);
    const WeatherApiData = async () => {
      const data = await GetApi(`${searchData !== "" ? searchData : "seoul"}`);
      setWeatherData(data);
    };
    WeatherApiData();
  }, [searchData]);

  return [loading, error, weatherData];
};

export default useWeatherData;
