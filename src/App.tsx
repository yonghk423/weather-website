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
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState("");
  const [loading, error, weatherData] = useWeatherData({ searchData });
  console.log(input);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setSearchData(input);
  };
  return (
    <Layout>
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
      <Main weatherData={weatherData} onSubmit={onSubmit} />
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
