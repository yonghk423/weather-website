import React, { useState } from "react";
import useWeatherData from "../hooks/useWeatherData";
import WeatherApi from "../api/weatherApi";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
const Search: React.FC<Props> = () => {
  const [input, setInput] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='search'
          name='search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        ></input>
        <button type='submit' placeholder='search city'>
          search
        </button>
      </form>
    </div>
  );
};
export default Search;
