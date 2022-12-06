import React, { useState } from "react";
import useWeatherData from "../hooks/useWeatherData";
import WeatherApi from "../api/weatherApi";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
};
const Search: React.FC<Props> = ({ onSubmit, inputValue, setInputValue }) => {
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='search'
          name='search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
