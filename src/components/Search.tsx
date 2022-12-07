import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

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
        <TextField
          id='standard-basic'
          label='search city...'
          variant='standard'
          value={inputSearchValue}
          onChange={handleSearchWeather}
          required
          autoFocus
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
`;
