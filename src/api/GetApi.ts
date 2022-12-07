import axios from "axios";

export interface IweatherData {
  main: string;
  icon: string;
  temp: string;
  temp_min: string;
  temp_max: string;
  name: string;
}

interface ResponseWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    [key: string]: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  country: string;
}
const GetApi = async (city: string): Promise<IweatherData> => {
  try {
    const response = await axios
      .get<ResponseWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
      .then((data) => data?.data);
    const { weather } = response;
    const { main, icon } = weather[0];
    const {
      main: { temp, temp_min, temp_max },
      name,
    } = response;

    return {
      main,
      icon,
      // 여기서 굳이 안해도되는데, 기본 구조 때문에 여기다가 넣은 겅미
      // 만약 물어보면 대응할 생각하시면 좋을듯합니다.!!
      temp: temp.toString(),
      temp_min: temp_min.toString(),
      temp_max: temp_max.toString(),
      name,
    };
  } catch (err) {
    throw new Error("API Request Error:, error ");
  }
};

export default GetApi;
