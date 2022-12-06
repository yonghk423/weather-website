import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWeatherData from "./hooks/useWeatherData";
import Main from "./page/Main";

export interface IweatherData {
  main: string;
  icon: string;
  temp: string;
  temp_min: string;
  temp_max: string;
  name: string;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const [loading, error, weatherData] = useWeatherData({ searchData });
  console.log(inputValue);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setSearchData(inputValue);
    setInputValue("");
  };
  return (
    <Layout>
      {/* <form onSubmit={onSubmit}>
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
      </form> */}
      <Main
        weatherData={weatherData}
        onSubmit={onSubmit}
        onChange={onChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  max-width: 36rem /* 576px */;
  margin-left: auto;
  margin-right: auto;
`;
