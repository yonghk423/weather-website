import { useState, useEffect } from "react";
import getApi from "../api/getApi";
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
      const data = await getApi(`${searchData !== "" ? searchData : "seoul"}`);
      setWeatherData(data);
    };
    WeatherApiData();
  }, [searchData]);

  return [loading, error, weatherData];
};

export default useWeatherData;
