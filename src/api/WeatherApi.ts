import axios from "axios";

const WeatherApi = async (city: string) => {
  console.log(city);
  try {
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((data) => data);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    throw new Error("API Request Error:, error ");
  }
};

export default WeatherApi;
