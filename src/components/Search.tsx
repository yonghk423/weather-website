import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
type Props = {
  handleSearchWeatherSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchWeather: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputSearchValue: string;
};
const Search: React.FC<Props> = ({
  handleSearchWeatherSubmit,
  handleSearchWeather,
  inputSearchValue,
}) => {
  return (
    <Container>
      <form onSubmit={handleSearchWeatherSubmit}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='weather search by city...'
          value={inputSearchValue}
          onChange={handleSearchWeather}
          required
          autoFocus
          style={{
            boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06)",
            width: "300px",
            height: "40px",
            fontSize: "20px",
          }}
        />
        <IconButton aria-label='delete' type='submit'>
          <SearchIcon />
        </IconButton>
      </form>
    </Container>
  );
};
export default Search;

const Container = styled.div`
  display: grid;
  justify-content: center;
  /* border: 1px solid black; */
  position: relative;
  top: 50px;
`;
