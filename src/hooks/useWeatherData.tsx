import { useState, useEffect } from "react";
import GetApi from "../api/GetApi";
import { IweatherData } from "../App";

// type ReturnTypes = { boolean, string, IweatherData | undefined };
type ReturnTypes = {
  loading: boolean;
  error: string;
  weatherData: IweatherData | undefined;
};
const useWeatherData = (searchData: string): ReturnTypes => {
  const [weatherData, setWeatherData] = useState<IweatherData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    const WeatherApiData = async () => {
      try {
        const data = await GetApi(`${searchData !== "" ? searchData : "seoul"}`);
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError("에러가 발생");
      }
    };
    WeatherApiData();
  }, [searchData]);

  return { loading, error, weatherData };
};

export default useWeatherData;
