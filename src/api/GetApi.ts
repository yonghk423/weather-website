import axios from "axios";

const GetApi = async (city: string) => {
  try {
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
      .then((data) => data?.data);
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

export default GetApi;
