import { useState, useEffect } from "react";
import GetApi from "../api/GetApi";
import { IweatherData } from "../api/GetApi";

type ReturnTypes = {
  loading: boolean;
  error: string;
  weatherData?: IweatherData;
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
      } catch (err) {
        console.log("err", err);
        setError("Invalid city name. please enter again:)");
      } finally {
        setLoading(false);
      }
    };
    WeatherApiData();
  }, [searchData]);

  return { loading, error, weatherData };
};

export default useWeatherData;
