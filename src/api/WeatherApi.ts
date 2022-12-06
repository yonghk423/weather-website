import axios from "axios";

const WeatherApi = async (city: string) => {
  console.log(city);
  try {
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((data) => data?.data);
    console.log(response);
    const { weather } = response;
    const { main, icon } = weather[0];
    const {
      main: { temp, temp_min, temp_max },
      name,
    } = response;

    return { main, icon, temp, temp_min, temp_max, name };
  } catch (err) {
    throw new Error("API Request Error:, error ");
  }
};

export default WeatherApi;
